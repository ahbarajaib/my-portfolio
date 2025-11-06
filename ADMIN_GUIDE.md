# Portfolio Admin Panel - User Guide

## 🎯 Overview

Your portfolio is now **fully dynamic**! All content is stored in JSON files in the `/content` folder. You can edit your portfolio content through a beautiful admin panel GUI, without touching any code.

## 📁 Content Structure

All your portfolio data is stored in these JSON files:

```
/content
  ├── profile.json       → Name, title, hero content, about text
  ├── social.json        → Social media links (LinkedIn, GitHub, Twitter, Instagram)
  ├── technologies.json  → Tech stack icons and animations
  ├── experiences.json   → Work experience history
  ├── projects.json      → Portfolio projects
  └── contact.json       → Contact information
```

## 🔐 Accessing the Admin Panel

### Step 1: Start Development Server

```bash
npm run dev
```

This will start your portfolio at `http://localhost:5173`

### Step 2: Navigate to Admin Panel

Open your browser and go to:

```
http://localhost:5173/admin
```

### Step 3: Login

- **Default Password**: `admin123`
- After login, you'll have access to all editing features

> **🔒 Security Note**: Change the password in `/src/components/Admin.jsx` (line 18) before deploying to production!

## ✏️ How to Edit Content

### Using the Admin Panel

1. **Login** to the admin panel at `/admin`
2. **Navigate** between tabs (Profile, Social, Technologies, Experiences, Projects, Contact)
3. **Edit** the content in the forms - changes are instant in the UI
4. **Download** the updated JSON files
5. **Commit** the changes to git (see next section)

### Tab-by-Tab Guide

#### 📝 Profile Tab
Edit your:
- **Name** - Displayed in hero section
- **Title** - Your job title/tagline
- **Hero Content** - Introduction paragraph
- **About Text** - Detailed about section

#### 🔗 Social Tab
Update social media URLs:
- LinkedIn profile
- GitHub profile
- Twitter/X profile
- Instagram profile

#### 💻 Technologies Tab
Manage your tech stack:
- **Add/Remove** technologies
- **Icon names** - Must match react-icons library (e.g., `RiReactjsLine`)
- **Colors** - Tailwind CSS color classes (e.g., `text-cyan-400`)
- **Duration** - Animation speed (float number)

**Available Icon Prefixes:**
- `Ri...` - Remix Icons
- `Fa...` - Font Awesome
- `Si...` - Simple Icons
- `Di...` - Devicons
- `Tb...` - Tabler Icons
- `Bi...` - Bootstrap Icons

#### 💼 Experiences Tab
Add/Edit work experience:
- **Year** - Time period (e.g., "August 2023 - Present")
- **Role** - Job title
- **Company** - Company name
- **Description Points** - Bullet points (add/remove as needed)
- **Technologies** - Comma-separated list

#### 🚀 Projects Tab
Manage your project portfolio:
- **Title** - Project name
- **Image Path** - Relative path (e.g., `/src/assets/projects/project-1.jpeg`)
- **Description** - Project details
- **Technologies** - Comma-separated list

#### 📧 Contact Tab
Update contact information:
- Address
- Phone number
- Email

## 💾 Saving Changes

### Method 1: Download Individual Files

1. Edit content in a specific tab
2. Click "Download [filename].json" button at the bottom of that tab
3. The file will download to your Downloads folder

### Method 2: Download All Files at Once (Recommended)

1. Make all your edits across different tabs
2. Click the **"Download All JSON"** button in the top-right corner
3. All 6 JSON files will download to your Downloads folder

### Step 3: Replace JSON Files

1. Navigate to your project's `/content` folder:
   ```bash
   cd /path/to/my-portfolio/content
   ```

2. Replace the old JSON files with the downloaded ones:
   - Move downloaded files from Downloads folder to `/content` folder
   - Overwrite existing files

### Step 4: Verify Changes Locally

```bash
npm run dev
```

Navigate to `http://localhost:5173` and verify your changes look correct.

### Step 5: Commit to Git

```bash
# Check what changed
git status

# Review the changes
git diff content/

# Stage the changes
git add content/

# Commit with a meaningful message
git commit -m "Updated portfolio content - [describe what you changed]"

# Examples:
# git commit -m "Updated work experience and added new project"
# git commit -m "Updated social media links and contact information"
# git commit -m "Added new technologies to tech stack"
```

### Step 6: Push to GitHub

```bash
git push origin main
```

> Replace `main` with your branch name if different

### Step 7: Deploy

If you're using a hosting platform like Vercel, Netlify, or GitHub Pages:

- **Vercel/Netlify**: Auto-deploys on git push (usually takes 1-2 minutes)
- **GitHub Pages**: May need to trigger build manually or wait for GitHub Actions

## 🎨 Adding New Project Images

1. Add your image to `/src/assets/projects/` folder
2. Name it appropriately (e.g., `project-12.jpg`)
3. In admin panel, use the path: `/src/assets/projects/project-12.jpg`
4. Commit both the image and the updated `projects.json`

```bash
git add src/assets/projects/project-12.jpg
git add content/projects.json
git commit -m "Added new project with image"
git push
```

## 🔧 Advanced: Direct JSON Editing

If you prefer editing JSON files directly instead of using the admin panel:

1. Open any file in `/content` folder with your code editor
2. Edit the JSON (be careful with syntax!)
3. Save the file
4. Test locally: `npm run dev`
5. Commit and push

**Example - Adding a New Experience:**

```json
{
  "year": "January 2024 - Present",
  "role": "Senior Full Stack Developer",
  "company": "Tech Corp",
  "description": [
    "Led development of microservices architecture",
    "Mentored junior developers",
    "Improved application performance by 40%"
  ],
  "technologies": ["React", "Node.js", "Docker", "Kubernetes"]
}
```

## 🚨 Troubleshooting

### Issue: Content Not Updating

**Solution:**
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Restart dev server (`npm run dev`)
3. Check browser console for errors

### Issue: JSON Syntax Error

**Symptoms:** White screen or error in console

**Solution:**
1. Validate your JSON at [jsonlint.com](https://jsonlint.com)
2. Check for:
   - Missing commas
   - Extra commas at the end of arrays
   - Unescaped quotes in strings
   - Missing closing brackets

### Issue: Images Not Loading

**Solution:**
1. Verify image exists in `/src/assets/projects/`
2. Check the path is correct (case-sensitive!)
3. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

### Issue: Technology Icons Not Showing

**Solution:**
1. Verify icon name matches react-icons library
2. Check the icon import in `/src/components/Technologies.jsx` line 15-25
3. Add new icon to `iconMap` if using a new icon

## 📝 Changing Admin Password

Edit `/src/components/Admin.jsx`:

```javascript
// Line 18
const ADMIN_PASSWORD = 'your-secure-password-here';
```

Then rebuild and redeploy:

```bash
npm run build
```

## 🔒 Security Best Practices

1. **Never commit passwords to public repositories**
2. **Change default password** before deploying
3. **Use environment variables** for production (optional advanced setup)
4. **Don't share your admin URL** publicly

## 📦 Build for Production

When ready to deploy:

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

The `dist/` folder contains your production-ready static files.

## 🎓 Monthly Update Workflow

Here's your typical monthly update process:

1. ✅ Visit `http://localhost:5173/admin` (start dev server if needed)
2. ✅ Login with password
3. ✅ Update content (new projects, experiences, etc.)
4. ✅ Click "Download All JSON"
5. ✅ Move downloaded files to `/content` folder
6. ✅ Test locally: `npm run dev`
7. ✅ Commit changes: `git add content/ && git commit -m "Monthly update"`
8. ✅ Push to GitHub: `git push`
9. ✅ Wait for auto-deployment (or deploy manually)
10. ✅ Done! 🎉

## 🆘 Need Help?

If you encounter issues:

1. Check this guide first
2. Search for the error message in Google
3. Verify JSON syntax at [jsonlint.com](https://jsonlint.com)
4. Check browser console for errors (F12)

## 🎉 Summary

You now have a **fully dynamic portfolio** that you can update monthly without touching code!

- ✅ All content in JSON files
- ✅ Beautiful admin GUI
- ✅ Simple download → replace → commit workflow
- ✅ No backend needed
- ✅ Version controlled with git
- ✅ Type-safe with TypeScript definitions

**Your workflow is now:**
1. Edit in GUI
2. Download JSON
3. Commit to git
4. Auto-deploy

No more touching code! 🚀
