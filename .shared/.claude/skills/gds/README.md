# GDS (Grammarly Design System) Skill

A Claude Code skill that provides expert knowledge of the Grammarly Design System for building production-quality React UI components.

## What This Skill Does

This skill gives Claude autonomous access to comprehensive Grammarly Design System documentation, including:

- **40+ React Components**: Complete component library (Button, TextField, Modal, Flex, etc.)
- **Design Tokens**: Colors, spacing, typography, elevation, border radius
- **Design Foundations**: Accessibility guidelines, iconography, illustrations
- **UI Patterns**: Forms, feedback, empty states, disabled states
- **Content Guidelines**: Voice, tone, terminology, writing best practices

## When It Activates

The skill automatically activates when you:

- Ask to build or implement UI components
- Request help with React forms, buttons, modals, or layouts
- Need design tokens (colors, spacing, typography)
- Want to implement accessible UI patterns
- Ask about Grammarly design or branding standards
- Work on any user interface implementation

## How It Works

### Progressive Disclosure

The skill uses progressive disclosure to load only the documentation you need:

1. **SKILL.md** provides overview and navigation guidance
2. **docs/llm.txt** contains complete component reference (12KB)
3. **docs/components/*.mdx** contain detailed component documentation
4. **docs/tokens/**, **docs/patterns/**, **docs/foundations/** provide specialized documentation

Claude reads these files only when needed for your specific task, keeping context efficient.

## Directory Structure

```
skills/gds/
├── SKILL.md                    # Skill definition and navigation guide
├── README.md                   # This file
└── docs/                       # Complete GDS documentation
    ├── llm.txt                # Complete component reference
    ├── components/            # Component documentation (40+ files)
    │   ├── buttons/
    │   │   ├── button.mdx
    │   │   ├── buttonaslink.mdx
    │   │   └── icon-button.mdx
    │   ├── text-field.mdx
    │   ├── modal.mdx
    │   └── ...
    ├── foundations/           # Design foundations
    │   ├── color.mdx
    │   ├── typography.mdx
    │   ├── iconography.mdx
    │   └── ...
    ├── tokens/                # Design tokens
    │   ├── color.mdx
    │   ├── space.mdx
    │   └── ...
    ├── patterns/              # UI patterns
    │   ├── forms-pattern/
    │   ├── feedback-pattern.mdx
    │   └── ...
    ├── content/               # Content guidelines
    │   ├── voice-and-tone.mdx
    │   ├── terminology.mdx
    │   └── ...
    └── utilities/             # Utility documentation
```

## Usage Examples

### Example 1: Build a Login Form
```
User: "Create a login form with GDS components"

→ Skill activates automatically
→ Claude reads docs/llm.txt for component overview
→ Claude reads docs/components/form.mdx
→ Claude reads docs/components/text-field.mdx
→ Claude reads docs/components/buttons/button.mdx
→ Claude implements form with proper GDS components
```

### Example 2: Select Right Component
```
User: "What GDS component should I use for a searchable dropdown?"

→ Skill activates automatically
→ Claude reads docs/llm.txt for component selection
→ Claude recommends Combobox
→ Claude reads docs/components/combobox.mdx for details
```

### Example 3: Check Design Tokens
```
User: "What color should I use for error messages in GDS?"

→ Skill activates automatically
→ Claude reads docs/tokens/color.mdx
→ Claude provides correct token (e.g., Tokens.Red60)
```

## Installation

This skill is available to all projects that symlink to `.shared/.claude`:

```bash
# In project directory
ln -s ../../.shared/.claude .claude
```

This provides access to:
- `/skills/gds/` - This skill
- `/commands/` - Shared slash commands
- `/settings.local.json.template` - Claude settings template

## Maintenance

### Updating GDS Documentation

When GDS releases a new version:

1. Export latest documentation from GDS
2. Update files in `docs/` directory
3. Regenerate `docs/llm.txt` if component list changed
4. Commit changes - all projects get updates automatically

### Testing the Skill

Test skill activation with queries like:
- "Build a modal dialog with GDS"
- "What button variants are available in GDS?"
- "How do I implement a form with error handling?"
- "What's the GDS color for success messages?"

## Resources

- **GDS Documentation**: https://uifoundation.gpages.io/grammarly-design-system
- **GDS Source**: https://gitlab.grammarly.io/uifoundation/grammarly-design-system
- **Package**: `@grammarly/design-system` on npm

## Troubleshooting

### Skill Doesn't Activate
- Check that description in SKILL.md contains relevant trigger keywords
- Verify YAML frontmatter is valid
- Try more specific queries (e.g., "Use GDS Button component")

### Documentation Out of Date
- Update `docs/` directory from latest GDS release
- Regenerate `docs/llm.txt` if needed
- Commit changes

### Can't Find Component
- Read `docs/llm.txt` for complete component list
- Check component exists in current GDS version
- Verify file path matches expected structure

## Migration Notes

This skill replaces the previous `.shared/ai-context/gds-docs/` structure.

**Previous approach**: Passive documentation requiring explicit `Read(ai-context/gds-docs/llm.txt)` calls

**New approach**: Active skill that Claude Code invokes autonomously based on context

**Benefits**:
- Autonomous activation - no explicit references needed
- Progressive disclosure - loads only needed docs
- Git-managed - shared across all projects
- First-class Claude Code feature - better integration

---

**Maintained by**: Grammarly Frontend Infrastructure
**Version**: 1.0.0
**Last Updated**: 2025-11-09
