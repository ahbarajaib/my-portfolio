# 🚀 Dynamic Portfolio Website

A modern, fully dynamic portfolio website built with React, Vite, and Tailwind CSS. Features a beautiful admin panel for easy content management without touching code!

## ✨ Features

- ⚡ Built with React 18 + Vite for lightning-fast performance
- 🎨 Styled with Tailwind CSS for a modern, responsive design
- 🎭 Smooth animations powered by Framer Motion
- 📝 **Fully dynamic content** - Edit everything through JSON files
- 🎛️ **Admin Panel GUI** - Beautiful interface for content management
- 🔒 Password-protected admin area
- 📱 Fully responsive design
- 🚀 Zero backend required
- 📦 Easy to deploy (Vercel, Netlify, GitHub Pages)

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1
- **Build Tool**: Vite 5.4.1
- **Styling**: Tailwind CSS 3.4.10
- **Animations**: Framer Motion 11.5.4
- **Icons**: React Icons 5.3.0
- **Routing**: React Router DOM
- **Type Safety**: TypeScript definitions

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## 🎯 Quick Start

### For Development

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### For Content Management

1. Start the dev server: `npm run dev`
2. Visit the admin panel: `http://localhost:5173/admin`
3. Login with password: `admin123` (change this!)
4. Edit your content in the beautiful GUI
5. Download updated JSON files
6. Replace files in `/content` folder
7. Commit and push to GitHub

## 📖 Complete Documentation

### 📚 [READ THE ADMIN GUIDE](./ADMIN_GUIDE.md)

The complete admin guide covers:
- ✅ How to access and use the admin panel
- ✅ Editing each section (Profile, Projects, Experience, etc.)
- ✅ Workflow for updating content
- ✅ Adding images and new technologies
- ✅ Git commit and deployment workflow
- ✅ Troubleshooting common issues
- ✅ Security best practices

**🔥 IMPORTANT**: Read the [ADMIN_GUIDE.md](./ADMIN_GUIDE.md) for detailed instructions on managing your portfolio content!

## 📁 Project Structure

```
my-portfolio/
├── content/                  # 🎯 All your editable content (JSON files)
│   ├── profile.json         # Name, title, hero, about
│   ├── social.json          # Social media links
│   ├── technologies.json    # Tech stack
│   ├── experiences.json     # Work experience
│   ├── projects.json        # Portfolio projects
│   └── contact.json         # Contact information
├── src/
│   ├── components/          # React components
│   │   ├── Admin.jsx        # 🎛️ Admin panel
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Technologies.jsx
│   │   ├── Contact.jsx
│   │   └── NavBar.jsx
│   ├── assets/              # Images and static files
│   ├── types/               # TypeScript type definitions
│   ├── App.jsx              # Main app with routing
│   └── main.jsx             # Entry point
├── ADMIN_GUIDE.md           # 📖 Complete admin documentation
└── package.json
```

## 🎨 Customization

### Change Admin Password

Edit `/src/components/Admin.jsx` line 18:

```javascript
const ADMIN_PASSWORD = 'your-secure-password';
```

### Add New Technologies

1. Visit admin panel → Technologies tab
2. Click "Add Technology"
3. Fill in: Name, Icon (from react-icons), Color (Tailwind class), Duration
4. Download `technologies.json`
5. Update the icon mapping in `/src/components/Technologies.jsx` if using new icons

### Add New Projects

1. Add project image to `/src/assets/projects/`
2. Visit admin panel → Projects tab
3. Click "Add Project"
4. Fill in details and use path: `/src/assets/projects/your-image.jpg`
5. Download `projects.json`

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for auto-deployment on push.

### Netlify

```bash
# Build
npm run build

# Drag & drop the 'dist' folder to Netlify
# Or connect GitHub repo for auto-deployment
```

### GitHub Pages

```bash
# Install gh-pages
npm install -g gh-pages

# Build and deploy
npm run build
gh-pages -d dist
```

## 🔄 Monthly Update Workflow

1. Visit `http://localhost:5173/admin`
2. Edit content in GUI
3. Download all JSON files
4. Move to `/content` folder
5. Test locally
6. Commit: `git add content/ && git commit -m "Monthly portfolio update"`
7. Push: `git push`
8. Auto-deploys! ✨

## 🐛 Troubleshooting

**Content not updating?**
- Clear browser cache (Ctrl+Shift+R)
- Restart dev server

**JSON syntax error?**
- Validate at [jsonlint.com](https://jsonlint.com)

**Images not loading?**
- Verify path is correct and case-sensitive
- Check image exists in `/src/assets/projects/`

For more troubleshooting, see [ADMIN_GUIDE.md](./ADMIN_GUIDE.md)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Built with ❤️ using:
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

**Need help?** Read the [ADMIN_GUIDE.md](./ADMIN_GUIDE.md) for complete documentation!
