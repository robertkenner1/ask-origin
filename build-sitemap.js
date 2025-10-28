const fs = require('fs');
const path = require('path');

// Constants
const DEPLOYMENT_TYPES = {
    GITLAB_PAGES: 'gitlab-pages',
    VERCEL: 'vercel',
    UNKNOWN: 'unknown'
};

const PRESERVE_FILES = ['.gitkeep', 'index.html'];
const COMMON_FILES = ['index.html', 'styles.css', 'script.js', 'style.css', 'main.js', 'app.js'];

class SitemapBuilder {
    constructor() {
        this.projectsDir = path.join(__dirname, 'projects');
        this.publicDir = path.join(__dirname, 'public');
        this.outputFile = path.join(this.publicDir, 'projects.json');
    }

    async build() {
        console.log('🔍 Building projects from source...');

        try {
            await this.cleanPublicDirectory();
            await this.copyGitLabPagesProjects();
            const projects = await this.collectAllProjects();
            await this.writeProjectsFile(projects);

            console.log(`✅ Built ${projects.length} projects and generated sitemap`);
        } catch (error) {
            console.error('❌ Error building projects:', error);
            process.exit(1);
        }
    }

    // ============================================
    // Step 1: Clean public directory
    // ============================================

    async cleanPublicDirectory() {
        console.log('🧹 Cleaning public directory...');

        if (!fs.existsSync(this.publicDir)) {
            console.log('📁 Creating public directory...');
            fs.mkdirSync(this.publicDir, { recursive: true });
            return;
        }

        const items = fs.readdirSync(this.publicDir);

        for (const item of items) {
            if (PRESERVE_FILES.includes(item)) continue;

            const itemPath = path.join(this.publicDir, item);
            const stats = fs.statSync(itemPath);

            if (stats.isDirectory()) {
                fs.rmSync(itemPath, { recursive: true, force: true });
            } else {
                fs.unlinkSync(itemPath);
            }
        }

        console.log('✨ Public directory cleaned');
    }

    // ============================================
    // Step 2: Copy GitLab Pages projects
    // ============================================

    async copyGitLabPagesProjects() {
        console.log('📁 Copying GitLab Pages projects...');

        if (!fs.existsSync(this.projectsDir)) {
            console.log('⚠️  Projects directory not found, skipping');
            return;
        }

        const projectDirs = this.getProjectDirectories();

        for (const projectName of projectDirs) {
            const config = this.readProjectConfig(projectName);

            if (!config) {
                console.log(`⚠️  No project.json for ${projectName}, skipping`);
                continue;
            }

            if (config.deployment !== DEPLOYMENT_TYPES.GITLAB_PAGES) {
                const label = config.deployment === DEPLOYMENT_TYPES.VERCEL
                    ? 'Vercel (external)'
                    : config.deployment;
                console.log(`⏭️  Skipping ${projectName} (${label})`);
                continue;
            }

            this.copyProjectToPublic(projectName);
        }
    }

    copyProjectToPublic(projectName) {
        const srcDir = path.join(this.projectsDir, projectName, 'src');
        const destDir = path.join(this.publicDir, projectName);

        if (!fs.existsSync(srcDir)) {
            console.log(`⚠️  No src directory for ${projectName}`);
            return;
        }

        this.copyDirectoryRecursive(srcDir, destDir);
        console.log(`📄 Copied ${projectName} to public`);
    }

    copyDirectoryRecursive(src, dest) {
        const stats = fs.statSync(src);

        if (stats.isDirectory()) {
            if (!fs.existsSync(dest)) {
                fs.mkdirSync(dest, { recursive: true });
            }

            const files = fs.readdirSync(src);
            files.forEach(file => {
                const srcPath = path.join(src, file);
                const destPath = path.join(dest, file);
                this.copyDirectoryRecursive(srcPath, destPath);
            });
        } else {
            fs.copyFileSync(src, dest);
        }
    }

    // ============================================
    // Step 3: Collect all projects for sitemap
    // ============================================

    async collectAllProjects() {
        const projects = [];
        const projectDirs = this.getProjectDirectories();

        for (const projectName of projectDirs) {
            const config = this.readProjectConfig(projectName);
            if (!config) continue;

            const project = await this.buildProjectMetadata(projectName, config);
            if (project) {
                projects.push(project);
                const label = config.deployment === DEPLOYMENT_TYPES.VERCEL ? ' (external)' : '';
                console.log(`📁 Found ${projectName}${label}`);
            }
        }

        return projects;
    }

    async buildProjectMetadata(projectName, config) {
        const { deployment } = config;

        // Determine where to find the project files
        let projectPath, indexPath;

        if (deployment === DEPLOYMENT_TYPES.GITLAB_PAGES) {
            // GitLab Pages: read from public directory
            projectPath = path.join(this.publicDir, projectName);
            indexPath = path.join(projectPath, 'index.html');
        } else {
            // External deployments: read from source
            projectPath = path.join(this.projectsDir, projectName, 'src');
            indexPath = path.join(projectPath, 'index.html');
        }

        if (!fs.existsSync(indexPath)) {
            return null;
        }

        // Extract metadata from HTML
        const htmlContent = fs.readFileSync(indexPath, 'utf-8');
        const stats = fs.statSync(projectPath);

        const title = this.extractTitle(htmlContent) || this.formatTitle(projectName);
        const description = this.extractDescription(htmlContent) || 'No description available';
        const files = this.getProjectFiles(projectPath);
        const icon = title.charAt(0).toUpperCase();

        // Build metadata object
        const metadata = {
            name: projectName,
            title,
            description,
            path: `./${projectName}/`,
            files,
            icon,
            lastModified: stats.mtime.toISOString(),
            type: this.inferProjectType(files, htmlContent),
            deployment: config.deployment
        };

        // Add URL for external deployments
        if (config.url) {
            metadata.url = config.url;
        }

        return metadata;
    }

    // ============================================
    // Helper: Project configuration
    // ============================================

    getProjectDirectories() {
        if (!fs.existsSync(this.projectsDir)) {
            return [];
        }

        return fs.readdirSync(this.projectsDir, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);
    }

    readProjectConfig(projectName) {
        const projectJsonPath = path.join(this.projectsDir, projectName, 'project.json');

        if (!fs.existsSync(projectJsonPath)) {
            return null;
        }

        try {
            const config = JSON.parse(fs.readFileSync(projectJsonPath, 'utf-8'));
            return {
                deployment: config.deployment || DEPLOYMENT_TYPES.UNKNOWN,
                url: config.url || null
            };
        } catch (error) {
            console.warn(`⚠️  Invalid project.json for ${projectName}`);
            return null;
        }
    }

    // ============================================
    // Helper: HTML extraction
    // ============================================

    extractTitle(html) {
        const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
        return match ? match[1].trim() : null;
    }

    extractDescription(html) {
        // Try meta description
        let match = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i);
        if (match) return match[1].trim();

        // Try og:description
        match = html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i);
        return match ? match[1].trim() : null;
    }

    formatTitle(folderName) {
        return folderName
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    // ============================================
    // Helper: Project files and type
    // ============================================

    getProjectFiles(projectPath) {
        const files = [];

        for (const file of COMMON_FILES) {
            if (fs.existsSync(path.join(projectPath, file))) {
                files.push(file);
            }
        }

        // Fallback: add any files if no common files found
        if (files.length === 0) {
            const allFiles = fs.readdirSync(projectPath)
                .filter(file => fs.statSync(path.join(projectPath, file)).isFile())
                .slice(0, 3);
            files.push(...allFiles);
        }

        return files;
    }

    inferProjectType(files, htmlContent) {
        const content = htmlContent.toLowerCase();

        if (content.includes('react') || content.includes('jsx')) return 'React App';
        if (content.includes('vue') || content.includes('vue.js')) return 'Vue App';
        if (content.includes('angular')) return 'Angular App';
        if (content.includes('grammarly')) return 'UI Component';
        if (files.includes('script.js') || files.includes('main.js')) return 'JavaScript App';
        if (files.includes('styles.css') || files.includes('style.css')) return 'Web Page';

        return 'Project';
    }

    // ============================================
    // Step 4: Write output
    // ============================================

    async writeProjectsFile(projects) {
        const data = {
            generated: new Date().toISOString(),
            count: projects.length,
            projects
        };

        fs.writeFileSync(this.outputFile, JSON.stringify(data, null, 2));
        console.log(`📄 Written to ${this.outputFile}`);
    }
}

// Run the sitemap builder
if (require.main === module) {
    const builder = new SitemapBuilder();
    builder.build();
}

module.exports = SitemapBuilder;
