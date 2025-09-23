# Flavian Mwaura - Portfolio Website

A modern, accessible portfolio website showcasing graphics programming projects, technical skills, and professional experience. Built with vanilla HTML, CSS, and JavaScript with a focus on performance, accessibility, and clean design.

## 🌟 Features

- **Modern Design**: Dark theme with gradient accents and glassmorphism effects
- **Responsive Layout**: Mobile-first design that works across all devices
- **Accessibility First**: WCAG compliant with proper ARIA labels, skip links, and keyboard navigation
- **Performance Optimized**: Vanilla JavaScript, optimized CSS, and minimal dependencies
- **Interactive Elements**: Smooth scroll animations, dynamic project filtering, and form validation
- **Professional Content**: Comprehensive sections for about, projects, blog, and contact

## 🏗️ Architecture

### Pages Structure
```
├── index.html          # Homepage with hero section and featured projects
├── about.html          # Personal background and technical expertise
├── projects.html       # Full project portfolio with filtering
├── blog.html          # Technical articles and tutorials
└── contact.html       # Contact form and information
```

### Assets Organization
```
├── css/
│   └── styles.css     # Complete styling with CSS custom properties
├── js/
│   ├── main.js        # Core functionality and project data
│   └── validate.js    # Client-side form validation
└── images/            # Project screenshots and graphics
```

## 🎨 Design System

### Color Palette
- **Background**: `#0f1220` (Deep navy)
- **Surface**: `#171a2b` (Elevated surfaces)
- **Text**: `#e6e8f0` (High contrast white)
- **Muted**: `#b6bbd1` (Secondary text)
- **Accent**: `#7aa2ff` (Primary blue)
- **Accent 2**: `#9b59b6` (Purple for gradients)

### Key Design Elements
- **Backdrop Blur**: Sticky header with glassmorphism effect
- **Gradient Accents**: Used sparingly for CTAs and branding
- **Card System**: Consistent elevated surfaces for content blocks
- **Typography**: System font stack for optimal performance

## 🚀 Technical Implementation

### Core JavaScript Features

#### Project Management System
```javascript
const PROJECTS = [
  {
    title: 'DX11 Terrain Renderer',
    desc: 'Real-time tessellated terrain with normal mapping',
    tags: ['graphics', 'DirectX', 'C++'],
    // ... more project data
  }
];
```

#### Dynamic Content Rendering
- Projects are stored in JavaScript objects for easy management
- Dynamic filtering by technology tags
- Featured projects automatically populated on homepage

#### Accessibility Features
- Intersection Observer for scroll-triggered animations
- Proper ARIA labels and live regions
- Keyboard navigation support
- Skip links for screen readers

### CSS Architecture

#### Modern CSS Features
- CSS Custom Properties for theming
- CSS Grid for complex layouts
- Flexbox for component alignment
- Backdrop filters for modern effects

#### Responsive Design
```css
@media (max-width: 860px) {
  .hero { grid-template-columns: 1fr; }
  .contact-grid { grid-template-columns: 1fr; }
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 860px (Single column layouts, hamburger menu)
- **Tablet**: 860px - 1100px (Optimized grid layouts)
- **Desktop**: > 1100px (Full multi-column experience, larger typography)

## 🔧 Development Setup

### Prerequisites
- Modern web browser
- Local web server (optional but recommended)

### Quick Start
```bash
# Clone the repository
git clone [your-repo-url]
cd portfolio-website

#install any live server
```

### File Structure
```
portfolio-website/
├── README.md
├── index.html
├── about.html
├── projects.html
├── blog.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── validate.js
└── images/
    ├── favicon.png
    ├── hero.png
    └── [project-screenshots]
```

## 🎯 Customization Guide

### Adding New Projects
1. Open `js/main.js`
2. Add new project object to `PROJECTS` array:
```javascript
{
  title: 'Your Project Name',
  desc: 'Brief description of the project',
  img: 'images/your-screenshot.png',
  tags: ['relevant', 'technologies'],
  url: 'https://github.com/your-repo'
}
```

### Updating Personal Information
- **Contact details**: Update in all HTML files (footer sections)
- **Social links**: Modify the social media URLs in footers
- **Bio content**: Edit the about.html page
- **Skills**: Update the technical expertise section

### Styling Modifications
- **Colors**: Modify CSS custom properties in `:root`
- **Typography**: Update font stack in `body` selector
- **Layout**: Adjust grid templates and breakpoints as needed

## 🌐 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **CSS Features**: Grid, Flexbox, Custom Properties, Backdrop Filter
- **JavaScript**: ES6+ features, Intersection Observer API

## 📊 Performance Features

- **Minimal Dependencies**: No external frameworks or libraries
- **Optimized Images**: Compressed project screenshots
- **Efficient CSS**: Utility-first approach with minimal redundancy
- **Lazy Loading**: Intersection Observer for scroll animations
- **Semantic HTML**: Proper document structure for SEO

## 🔒 Security Considerations

- **Form Validation**: Client-side validation (backend integration needed for production)
- **External Links**: `rel="noopener"` for security
- **Content Security**: No inline scripts or styles

## 🚀 Deployment
Absolutely! Here's how you can elegantly add your live link to the README:

---

## 🌐 Live Demo

Check out the deployed portfolio site here:  
🔗 [Live Website](https://flavian101.github.io/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl/)

### Static Hosting Options
- **GitHub Pages**: Push to `gh-pages` branch
- **Netlify**: Connect repository for automatic deployments
- **Vercel**: Import project for instant deployment
- **AWS S3**: Upload files to S3 bucket with static hosting

### Pre-deployment Checklist
- [ ] Update all placeholder content
- [ ] Add actual project screenshots
- [ ] Test contact form integration
- [ ] Verify all internal links
- [ ] Run accessibility audit
- [ ] Optimize images for web

## 🤝 Contributing

Feel free to fork this project and adapt it for your own portfolio. If you find bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: judeflavian20@gmail.com
- **GitHub**: [@flavian101](https://github.com/flavian101)
- **LinkedIn**: [Flavian Mwaura](https://linkedin.com/in/flavian-mwaura)
- **Location**: Kiambu County, Kenya

---

Built with ❤️ by Flavian Mwaura
