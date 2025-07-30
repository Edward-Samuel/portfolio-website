# Portfolio Website with CI/CD Pipeline

A modern, responsive portfolio website built with React.js and automated deployment using GitHub Actions, Docker, and multiple hosting platforms.

## 🚀 Features

- **Modern React.js Frontend**: Built with Vite, Tailwind CSS, and Framer Motion
- **Responsive Design**: Mobile-first approach with smooth animations
- **Automated CI/CD**: GitHub Actions pipeline for continuous integration and deployment
- **Multi-Platform Deployment**: Automatic deployment to GitHub Pages, Netlify, and Vercel
- **Docker Support**: Containerized application for consistent deployments
- **Security Scanning**: Automated dependency audits and updates
- **Performance Optimized**: Code splitting, lazy loading, and asset optimization

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **shadcn/ui** - UI component library

### DevOps & Deployment
- **GitHub Actions** - CI/CD pipeline
- **Docker** - Containerization
- **Nginx** - Web server for production
- **GitHub Pages** - Static site hosting
- **Netlify** - JAMstack deployment platform
- **Vercel** - Frontend deployment platform

## 📁 Project Structure

```
portfolio-website/
├── .github/
│   └── workflows/
│       ├── ci-cd.yml                 # Main CI/CD pipeline
│       └── security-and-updates.yml  # Security scanning & updates
├── src/
│   ├── components/
│   │   └── ui/                       # shadcn/ui components
│   ├── assets/                       # Static assets
│   ├── hooks/                        # Custom React hooks
│   ├── lib/                          # Utility functions
│   ├── App.jsx                       # Main application component
│   ├── App.css                       # Application styles
│   └── main.jsx                      # Application entry point
├── public/                           # Public assets
├── Dockerfile                        # Production Docker image
├── Dockerfile.dev                    # Development Docker image
├── docker-compose.yml                # Docker Compose configuration
├── nginx.conf                        # Nginx configuration
├── netlify.toml                      # Netlify deployment config
├── vercel.json                       # Vercel deployment config
└── vite.config.js                    # Vite configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- pnpm (recommended) or npm
- Git
- Docker (optional)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Edward-Samuel/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Docker Development

1. **Using Docker Compose**
   ```bash
   docker-compose up portfolio-dev
   ```

2. **Access the application**
   ```
   http://localhost:3000
   ```

## 🔄 CI/CD Pipeline

The automated CI/CD pipeline is triggered on every push to the `master` branch and includes:

### Build & Test Stage
- Code checkout
- Node.js environment setup
- Dependency installation
- Linting (with warnings allowed)
- Application build
- Artifact upload

### Deployment Stages (Parallel)

#### 1. GitHub Pages
- Automatic deployment to GitHub Pages
- Available at: `https://edward-samuel.github.io/portfolio-website/`

#### 2. Netlify
- Automatic deployment to Netlify
- Custom domain support
- Form handling and serverless functions

#### 3. Vercel
- Automatic deployment to Vercel
- Edge network distribution
- Automatic HTTPS

#### 4. Docker Hub
- Multi-stage Docker build
- Image pushed to Docker Hub
- Tagged with commit SHA and 'latest'

### Security & Maintenance
- Weekly dependency audits
- Automated security scanning
- Dependency update PRs

## ⚙️ Configuration

### Environment Variables & Secrets

Set up the following secrets in your GitHub repository:

#### Netlify Deployment
```
NETLIFY_AUTH_TOKEN=your_netlify_auth_token
NETLIFY_SITE_ID=your_netlify_site_id
```

#### Vercel Deployment
```
VERCEL_TOKEN=your_vercel_token
```

#### Docker Hub
```
DOCKER_USERNAME=your_docker_username
DOCKER_PASSWORD=your_docker_password
```

### Platform-Specific Configuration

#### GitHub Pages
- Enabled in repository settings
- Source: GitHub Actions
- Custom domain (optional)

#### Netlify
- Connect repository in Netlify dashboard
- Build settings configured via `netlify.toml`
- Custom domain and DNS management

#### Vercel
- Import project from GitHub
- Build settings configured via `vercel.json`
- Automatic domain assignment

## 🐳 Docker Usage

### Production Build
```bash
docker build -t portfolio-website:latest .
docker run -p 8080:80 portfolio-website:latest
```

### Development with Docker
```bash
docker-compose up portfolio-dev
```

### Production with Docker Compose
```bash
docker-compose up portfolio-prod
```

## 📝 Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run lint` - Run ESLint

## 🔧 Customization

### Updating Content
1. Edit `src/App.jsx` to modify portfolio content
2. Update personal information, projects, and skills
3. Replace placeholder images in `src/assets/`
4. Commit changes to trigger automatic deployment

### Styling
- Modify `src/App.css` for custom styles
- Update Tailwind configuration in `tailwind.config.js`
- Customize color scheme in CSS variables

### Adding New Sections
1. Create new components in `src/components/`
2. Import and use in `src/App.jsx`
3. Update navigation menu if needed

## 🚨 Troubleshooting

### Common Issues

#### Build Failures
- Check Node.js version compatibility
- Verify all dependencies are installed
- Review build logs in GitHub Actions

#### Deployment Issues
- Ensure all required secrets are set
- Check platform-specific configuration files
- Verify repository permissions

#### Docker Issues
- Ensure Docker daemon is running
- Check Dockerfile syntax
- Verify port mappings

### Debugging
- Use `pnpm run preview` to test production builds locally
- Check browser developer tools for client-side errors
- Review GitHub Actions logs for CI/CD issues

## 📈 Performance Optimization

- **Code Splitting**: Automatic vendor and UI library chunking
- **Asset Optimization**: Compressed images and minified code
- **Caching**: Aggressive caching for static assets
- **CDN**: Global distribution via Netlify/Vercel edge networks

## 🔒 Security Features

- **Content Security Policy**: Configured in nginx and platform configs
- **Security Headers**: X-Frame-Options, XSS Protection, etc.
- **Dependency Scanning**: Weekly automated audits
- **HTTPS**: Enforced on all deployment platforms

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

- **Email**: alex.johnson@example.com
- **LinkedIn**: [linkedin.com/in/alexjohnson](https://linkedin.com/in/alexjohnson)
- **GitHub**: [github.com/alexjohnson](https://github.com/alexjohnson)

---

**Note**: This is a demonstration project showcasing modern CI/CD practices. Customize the content and configuration to match your specific needs.

