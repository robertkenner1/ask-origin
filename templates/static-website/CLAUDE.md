# {{PROJECT_TITLE}} - Project Settings

## Project Overview
{{PROJECT_DESCRIPTION}}

## Project Type
Frontend Prototype

## Technology Stack
- HTML5 (Semantic markup)
- CSS3 (Grid/Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+ Classes)

## Design Requirements
- [ ] Pixel-perfect accuracy
- [ ] Responsive design (mobile-first)
- [ ] Accessibility compliance (WCAG 2.1)
- [ ] Cross-browser compatibility
- [ ] Performance optimization

## Key Features
- Semantic HTML structure
- Modern CSS with custom properties
- Interactive JavaScript components
- Responsive breakpoints
- Utility classes

## Development Guidelines

### CSS Architecture
- Use CSS custom properties for theming
- Follow BEM naming convention for classes
- Mobile-first responsive design
- Utility classes for common patterns

### JavaScript Patterns
- ES6+ class-based components
- Event delegation for performance
- Debounced resize handlers
- Modular, reusable code

### Accessibility Checklist
- [ ] Semantic HTML elements
- [ ] ARIA labels where needed
- [ ] Keyboard navigation support
- [ ] Focus management
- [ ] Screen reader compatibility
- [ ] Color contrast compliance

## Build Configuration
- **Source files:** `projects/{{PROJECT_NAME}}/src/`
- **Documentation:** `projects/{{PROJECT_NAME}}/prompts/`
- **Build output:** `public/{{PROJECT_NAME}}/`
- **Build command:** `npm run build:sitemap`

## Development Workflow
1. Edit files in `projects/{{PROJECT_NAME}}/src/`
2. Run `make build` to copy to public
3. Use `make start` for development server
4. Test with `make deploy` for production

## Reference Materials
- Grammarly Design System: https://uifoundation.gpages.io/grammarly-design-system/
- MDN Web Docs: https://developer.mozilla.org/
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/

## Notes
{{PROJECT_NOTES}}