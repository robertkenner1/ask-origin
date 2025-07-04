const fs = require('fs');
const path = require('path');

class SitemapBuilder {
    constructor() {
        this.projectsDir = path.join(__dirname, 'projects');
        this.publicDir = path.join(__dirname, 'public');
        this.outputFile = path.join(this.publicDir, 'projects.json');
    }

    async build() {
        console.log('🔍 Building projects from source...');
        
        try {
            // First, copy projects from source to public
            await this.copyProjectsToPublic();
            
            // Then scan and generate sitemap
            const projects = await this.scanForProjects();
            await this.writeProjectsFile(projects);
            console.log(`✅ Built ${projects.length} projects and generated sitemap`);
        } catch (error) {
            console.error('❌ Error building projects:', error);
            process.exit(1);
        }
    }

    async copyProjectsToPublic() {
        console.log('📁 Copying projects from source to public...');
        
        if (!fs.existsSync(this.projectsDir)) {
            console.log('⚠️  Projects directory not found, skipping copy step');
            return;
        }

        const projectDirs = fs.readdirSync(this.projectsDir, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

        for (const projectName of projectDirs) {
            const srcDir = path.join(this.projectsDir, projectName, 'src');
            const destDir = path.join(this.publicDir, projectName);

            if (fs.existsSync(srcDir)) {
                // Ensure destination directory exists
                if (!fs.existsSync(destDir)) {
                    fs.mkdirSync(destDir, { recursive: true });
                }

                // Copy all files from src to public
                this.copyDirectoryRecursive(srcDir, destDir);
                console.log(`📄 Copied ${projectName} from src to public`);
            } else {
                console.log(`⚠️  No src directory found for project: ${projectName}`);
            }
        }
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

    async scanForProjects() {
        const projects = [];
        
        if (!fs.existsSync(this.publicDir)) {
            console.warn('⚠️  Public directory not found');
            return projects;
        }

        const items = fs.readdirSync(this.publicDir, { withFileTypes: true });
        
        for (const item of items) {
            if (item.isDirectory()) {
                const projectPath = path.join(this.publicDir, item.name);
                const indexPath = path.join(projectPath, 'index.html');
                
                if (fs.existsSync(indexPath)) {
                    const project = await this.extractProjectMetadata(item.name, projectPath, indexPath);
                    if (project) {
                        projects.push(project);
                        console.log(`📁 Found project: ${project.title}`);
                    }
                }
            }
        }

        return projects;
    }

    async extractProjectMetadata(folderName, projectPath, indexPath) {
        try {
            const htmlContent = fs.readFileSync(indexPath, 'utf-8');
            const stats = fs.statSync(projectPath);
            
            // Extract metadata from HTML
            const title = this.extractFromHtml(htmlContent, 'title') || this.formatTitle(folderName);
            const description = this.extractFromHtml(htmlContent, 'meta[name="description"]', 'content') || 
                             this.extractFromHtml(htmlContent, 'meta[property="og:description"]', 'content') ||
                             'No description available';
            
            // Get project files
            const files = this.getProjectFiles(projectPath);
            
            // Generate icon from first letter of title
            const icon = title.charAt(0).toUpperCase();
            
            return {
                name: folderName,
                title: title,
                description: description,
                path: `./${folderName}/`,
                files: files,
                icon: icon,
                lastModified: stats.mtime.toISOString(),
                type: this.inferProjectType(files, htmlContent)
            };
        } catch (error) {
            console.warn(`⚠️  Could not extract metadata for ${folderName}:`, error.message);
            return null;
        }
    }

    extractFromHtml(html, selector, attribute = null) {
        try {
            if (selector === 'title') {
                const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
                return match ? match[1].trim() : null;
            }
            
            if (selector.startsWith('meta')) {
                const regex = new RegExp(`<${selector}[^>]*${attribute}=["']([^"']+)["'][^>]*>`, 'i');
                const match = html.match(regex);
                return match ? match[1].trim() : null;
            }
            
            return null;
        } catch (error) {
            return null;
        }
    }

    formatTitle(folderName) {
        return folderName
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    getProjectFiles(projectPath) {
        const commonFiles = ['index.html', 'styles.css', 'script.js', 'style.css', 'main.js', 'app.js'];
        const files = [];
        
        for (const file of commonFiles) {
            if (fs.existsSync(path.join(projectPath, file))) {
                files.push(file);
            }
        }
        
        // Add any other files if no common files found
        if (files.length === 0) {
            const allFiles = fs.readdirSync(projectPath)
                .filter(file => fs.statSync(path.join(projectPath, file)).isFile())
                .slice(0, 3); // Limit to first 3 files
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

    async writeProjectsFile(projects) {
        const data = {
            generated: new Date().toISOString(),
            count: projects.length,
            projects: projects
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