# Able AllStars Website

A responsive, accessible website for Able AllStars Inc., dedicated to building ballcourts for kids and adults with balance and movement disorders.

## Mission

Able AllStars builds outdoor ballcourts for special needs kids and adults with balance and movement disorders, including those with Parkinson's, MS, Brain Injuries, Orthopedic Injuries, Down Syndrome, and Autism Spectrum disorders.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Progressive Web App (PWA)**: Installable on mobile devices  
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Meta tags, structured data, and sitemap
- **Video Integration**: YouTube and local MP4 videos with loading states
- **Enhanced UX**: Smooth animations and touch-optimized navigation

## Project Structure

```
website/
├── index.html              # Homepage
├── html/                   # Internal pages
│   ├── about.html
│   ├── projects.html
│   ├── programs.html
│   ├── donate.html
│   ├── team.html
│   ├── contact.html
│   └── 404.html
├── assets/                 # Static assets
│   ├── css/               # Stylesheets
│   ├── images/            # Images and icons
│   ├── videos/            # Video files
│   └── fonts/             # Web fonts
├── public/                # Public assets
├── components/            # Reusable components
├── manifest.json          # PWA manifest
├── sw.js                 # Service worker
├── robots.txt            # SEO crawler instructions
├── sitemap.xml           # Site structure for search engines
└── .htaccess             # Server configuration
```

## Development

### Local Development
```bash
# Quick start with any HTTP server
npm start        # Opens browser automatically
npm run dev      # Server only
npm run serve    # Alternative serve command
```

### Production Deployment
The website is deployed using a simple script that:
1. Clones the latest GitHub repository
2. Replaces the existing files
3. Restarts the web server

## Key Features

### Videos
- YouTube embedded video (auto-playing, muted)
- Local MP4 video with controls
- Loading states and error handling
- Responsive layout (side-by-side on desktop, stacked on mobile)

### Navigation
- Fixed header with logo
- Mobile-friendly hamburger menu
- Smooth transitions and animations
- Touch-optimized for mobile devices

### Progressive Web App
- Installable on mobile devices
- Offline functionality with service worker
- App-like experience
- Custom splash screen and icons

### Performance
- Optimized images and assets
- Lazy loading support
- Compression and caching
- Performance monitoring

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation
- Screen reader support
- High contrast support

## Video Features
- YouTube embedded video (auto-playing, muted)
- Local MP4 video with controls and error handling
- Responsive layout (side-by-side on desktop, stacked on mobile)
- Loading states and accessibility features

## Progressive Web App
- Installable on mobile devices
- Service worker for improved performance  
- Custom app manifest with icons
- Offline-ready functionality

## Performance
- Optimized images and video loading
- Service worker caching
- Performance monitoring and error tracking
- Touch-optimized mobile interface

Built with ❤️ for the special needs community