# Justin Wong - Portfolio

A terminal-inspired portfolio website built with React and deployed on GitHub Pages.

## Features

- Dark CLI-themed interface
- ASCII art landing page
- **Sliding sidebar navigation** with command terminal
- **URL-based routing** - URLs reflect current page
- Navigation via terminal commands OR sidebar links
- Command history in sidebar
- Markdown-rendered resume, blog posts, and guides
- Responsive design
- GitHub Pages deployment

## Navigation

### Keyboard Navigation

- `←` (Left Arrow) - Open sidebar
- `→` (Right Arrow) or `Esc` - Close sidebar
- `↑` (Up Arrow) - Navigate up in sidebar menu
- `↓` (Down Arrow) - Navigate down in sidebar menu
- `Enter` - Select focused menu item

### Terminal Commands

Navigate using these CLI commands in the sidebar terminal:

- `cd /about` - View about page
- `cd /resume` - View resume
- `cd /blog` - View blog posts
- `cd /guides` - View guides
- `cd ~` - Return to home
- `clear` - Clear terminal output
- `help` - Show available commands

## Local Development

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

## Adding Content

### Resume

Edit the file at `/public/content/resume.md`

### Blog Posts

Add markdown files to `/public/content/blog/` and update the posts list in `src/pages/BlogPage.jsx`

### Guides

Add markdown files to `/public/content/guides/` and update the guides list in `src/pages/GuidesPage.jsx`

## Deployment

This site automatically deploys to GitHub Pages when you push to the main branch.

Make sure GitHub Pages is enabled in your repository settings:

1. Go to Settings > Pages
2. Set Source to "GitHub Actions"

## Technologies

- React 18
- React Router DOM
- Vite
- marked (lightweight markdown parser)
- DOMPurify (sanitization)
- GitHub Pages

## License

MIT
