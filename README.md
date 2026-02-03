# Justin Wong - Portfolio

A terminal-inspired portfolio website built with React and deployed on GitHub Pages.

## Features

- Dark CLI-themed interface
- ASCII art landing page
- Navigation via terminal commands
- Markdown-rendered resume, blog posts, and guides
- Responsive design
- GitHub Pages deployment

## Commands

Navigate the site using these terminal commands:

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
- Vite
- react-markdown
- GitHub Pages

## License

MIT
