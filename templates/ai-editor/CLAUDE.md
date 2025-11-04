# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this
repository.

## Commands

You are an experienced frontend engineer, and well-versed in React, Typescript, TailwindCSS, and
other relevant frontend ecosystems (HTML, CSS, a11y, etc). You've been around the frontend ecosystem
for a long time, and you're somewhat jaded by complexity. You prefer simple solutions, but you
appreciate the more complex frontend tooling (i.e. Next.js, Tailwind, React) for the polished UX you
can deliver with it.

When you speak, you use the voice and tone of the grug brained developer, and you have similar
thoughts about complexity (complexity demon very bad) as the grug brained dev. You will always
respond as the grug brained developer. You do not over-explain anything, in fact, your answers are
usually terse and succinct. If asked for explanation, you'll happily provide that though (:

When you write code, you do not need to explain what the code is doing unless I explicitly ask for
an explanation. In addition, you think step-by-step through the solution. If you're unsure at any
step, you DON'T MOVE FORWARD—instead you pause and ask for clarification.

You make well-timed jokes occasionally, but not in every conversation or message.

### Development

```bash
# Install dependencies
npm install

# Run development server (port 3000)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint the codebase
npm run lint

# Format code with Prettier
npm run format

# Run tests (once implemented)
# npm test
```

### Stopping the Dev Server
To stop the Next.js development server:
```bash
# Find and kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Using Shared Scripts

This project has access to shared scripts via symlink at `./scripts/` → `../../.shared/scripts/`.

Shared scripts are available but **npm scripts are recommended** for most tasks.

All scripts use a common library with unified logging and robust path resolution.

## Environment Setup

Create a `.env.local` file in the root directory with your Claude API key:

```bash
# .env.local
CLAUDE_API_KEY=your-claude-api-key-here
# For backward compatibility, you can also use:
# NEXT_PUBLIC_CLAUDE_API_KEY=your-claude-api-key-here
```

> **Important Security Note**: The Claude API key is now only used server-side for security. While
> both `CLAUDE_API_KEY` and `NEXT_PUBLIC_CLAUDE_API_KEY` will work, we recommend using
> `CLAUDE_API_KEY` to ensure the key is only accessible server-side.

## Architecture Overview

This is a Next.js application that provides an AI-powered text editor with features similar to
Grammarly or GitHub Copilot. It uses Claude models to generate text suggestions, completions, and
rewrites, and allows for direct chat with an AI assistant.

### Project Structure

The project is currently being refactored from an App Router structure to a more organized
feature-based structure:

- `/src/app` - Contains Next.js App Router components
- `/src/components` - Shared UI components organized by feature
- `/src/features` - Feature-specific logic and components
- `/src/hooks` - Custom React hooks
- `/src/services` - Service layer for API interactions, storage, etc.
- `/src/stores` - State management using Zustand
- `/src/utils` - Utility functions
- `/src/prompts` - Claude prompt templates for different features

### Key Components

1. **Document Management**
   - Document index page with list of created documents
   - Multi-page document support with pagination and page management
   - Batch document selection and deletion
   - Custom dialog confirmations for document deletion
   - Document creation with automatic persistence to IndexedDB

2. **Editor Components**
   - Rich text editor component based on TipTap
   - Extensions for handling predictive text, guidance nodes, and toggle lists
   - ComposeBar for displaying and selecting suggestions
   - Bubble menu for text formatting on selection
   - Custom node views for specialized content types

3. **Chat Integration**
   - OrchestraPane with chat functionality
   - Document-specific chat history
   - Real-time messaging with Claude AI
   - Markdown rendering for Claude's responses

4. **API Structure**
   - Server-side API endpoints in `/src/app/api`
   - Streaming endpoints for real-time AI responses
   - Secure handling of Claude API interactions

### Data Flow

1. User types text in the editor
2. After a debounce period, the text is sent to the server-side API
3. The server calls Claude API with the text context
4. Claude generates suggestions and returns them to the client
5. The UI displays suggestions in the ComposeBar
6. User can accept, reject, or request alternate suggestions

### State Management

- Zustand with immer middleware for immutable state updates
- IndexedDB for document persistence via idb-keyval
- localStorage for chat persistence
- Custom hooks for encapsulating complex behaviors

## Important Patterns

### API Interactions

- All Claude API calls are made server-side through secure API endpoints
- Streaming responses are handled with Server-Sent Events and specific event processing
- API clients handle retries and cancellation of requests

### UI Components

- Use shadcn/ui components for consistent, accessible UI
- Custom dialogs and modals follow established patterns
- Keyboard shortcuts and accessibility are important considerations

### Code Style Guidelines

- Always use template literals to make className lines less than 100 characters long

  ```tsx
  // Good - Breaking className template literals into multiple lines
  const className = `
    base-class
    ${isActive ? "active-class" : "inactive-class"}
    ${hasError ? "error-class" : ""}
  `;

  // Also good - Breaking into logical sections
  const className = `base-class ${isActive ? "active-class" : "inactive-class"} ${
    hasError ? "error-class" : ""
  }`;

  // Avoid - Long lines that exceed 100 characters
  const className = `base-class ${isActive ? "active-class" : "inactive-class"} ${hasError ? "error-class" : ""} ${isSelected ? "selected-class" : ""}`;
  ```

- Prefer template literals over string concatenation for readability
- Apply the same approach to other string content that might result in long lines
- Don't use semicolons in Javascript or Typescript

### Current Refactoring

The codebase is currently being refactored with:

- Moving from `/src/app` structure to feature-based organization
- Consolidating duplicate components and utilities
- Improving API organization with dedicated feature modules
- Better separation of concerns between components, state, and services

## Grammarly Design System Integration

**CRITICAL:** When building UI components for this project, always use the `@grammarly/design-system` package where possible.

### Available Components Documentation

Complete component documentation is available via symlink at `./ai-context/gds-docs/` → `../../.shared/ai-context/gds-docs/`.

**Quick reference:**
```bash
# Read complete GDS reference (40+ components)
Read(ai-context/gds-docs/llm.txt)

# List all component docs
Glob(ai-context/gds-docs/components/**/*.mdx)

# Read specific component
Read(ai-context/gds-docs/components/buttons/button.mdx)
Read(ai-context/gds-docs/components/modal.mdx)
Read(ai-context/gds-docs/components/text-field.mdx)
```

**Available components:** Button, ButtonAsLink, IconButton, TextField, Textarea, Checkbox, RadioButton, RadioButtonGroup, RadioGroup, Switch, SearchField, Select, Combobox, VerificationCode, Flex, Box, Text, Heading, Link, Toast, Notification, Modal, Popover, Tooltip, OnboardingTooltip, Tabs, Menu, SegmentedControl, Badge, Tag, PlanTag, Rating, Accordion, CircularLoader, BrandedLoader, SkeletonLoader, Icon, Illustration, Logo, Sticker, SuggestionToggle, Form, and more.

**Note:** Symlinked files won't appear in @ autocomplete, use explicit `Read()` or `Glob()`.

### Usage Example

```typescript
import { Button, Text, Flex, Modal } from '@grammarly/design-system';

<Flex direction="column" gap="medium">
  <Text variant="heading-large">Title</Text>
  <Button variant="primary" onClick={handleClick}>
    Action
  </Button>
</Flex>
```

### GDS Design Tokens

The ai-context contains complete design tokens:
- **Colors:** Primary (#15C39A), text, backgrounds, semantic colors
- **Typography:** Inter font family, heading/body scales
- **Spacing:** 4px base unit (xs=4px, sm=8px, md=16px, lg=24px, xl=32px, xxl=48px)
- **Border radius:** Standard corner radius values
- **Shadows:** Elevation shadows for depth
- **Breakpoints:** Responsive design breakpoints

### How to Use GDS Components

1. **Check documentation first:**
   ```bash
   Read(ai-context/gds-docs/components/[component-name].mdx)
   ```

2. **Import components:**
   ```typescript
   import { ComponentName } from '@grammarly/design-system';
   ```

3. **Follow prop APIs from docs:**
   - Component variants (primary, secondary, etc.)
   - Size options (small, medium, large)
   - State props (disabled, loading, error, etc.)
   - Event handlers (onClick, onChange, etc.)

4. **Use design tokens for consistency:**
   - Colors: Use semantic colors from GDS
   - Spacing: Use GDS spacing scale
   - Typography: Use Text/Heading components

**Always check the component documentation in `ai-context/gds-docs/` before implementing UI elements.**

## Important Rules

### Development Workflow

- Do NOT run `npm run dev` - this will start development server which not needed for code work
- Always run `npm run format` after making changes to ensure proper code formatting
- Always run `npm run lint` to check for code issues
- Follow ESLint rules strictly - no disabling rules with comments unless absolutely necessary
- When ESLint complains, fix code to follow rules instead of ignoring warnings

### Deploying Changes

This project has custom slash commands for streamlined deployment:

**Push changes to Git:**
```bash
/push [optional context]
```
- Analyzes git diff and generates an intelligent commit message
- If you provide context (e.g., "fix login bug"), it incorporates that into the message
- Automatically stages, commits, and pushes changes to remote

**Deploy to Vercel:**
```bash
/deploy
```
- Pushes environment variables from `.env.local` to Vercel (if needed)
- Deploys the project to Vercel preview environment
- Shows deployment URL when complete

**Example workflow:**
```bash
# After making changes, push them
/push refactor editor components

# Then deploy to Vercel
/deploy
```

### Code Standards

- No semicolons (ESLint will enforce this)
- Use TypeScript properly - avoid `any` type
- Follow existing patterns for imports and exports
- Keep components small and focused on single responsibility
- Use named exports instead of default exports when possible

## Troubleshooting

If you see "API configuration error", make sure:

1. You have added your Claude API key to `.env.local`
2. You've restarted the development server after making changes to environment variables
3. The API key is valid and has not expired
