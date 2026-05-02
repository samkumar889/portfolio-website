# GitHub Deployment Guide - Sameer Kumar Portfolio

## Quick Deployment Steps

### Method 1: GitHub Pages (Recommended - FREE)

#### Step 1: Create GitHub Repository
1. Go to https://github.com
2. Click "New Repository"
3. Repository name: `portfolio` (or `your-username.github.io`)
4. Make it **Public**
5. Click "Create repository"

#### Step 2: Push Your Code
Open terminal in your project folder and run:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Professional Portfolio"

# Create main branch
git branch -M main

# Add your GitHub repository URL (replace with your actual URL)
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

#### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down and click **Pages** in left sidebar
4. Under **Build and deployment** → **Source**: Select **GitHub Actions**
5. Done! Your site will be deployed automatically

#### Step 4: Access Your Live Site
Your portfolio will be live at:
- `https://YOUR-USERNAME.github.io/portfolio/`

OR if you named it `your-username.github.io`:
- `https://YOUR-USERNAME.github.io/`

---

### Method 2: Netlify (Alternative - FREE)

1. Go to https://www.netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy site"

---

### Method 3: Vercel (Alternative - FREE)

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

---

## Update Your GitHub Profile Link

**IMPORTANT**: Replace the GitHub link in these files with your actual GitHub profile:

### 1. src/components/Hero.jsx (Line 50)
```jsx
href="https://github.com/YOUR-USERNAME"
```

### 2. src/components/Contact.jsx (Line 96)
```jsx
href="https://github.com/YOUR-USERNAME"
```

### 3. src/components/Footer.jsx (Line 14)
```jsx
href="https://github.com/YOUR-USERNAME"
```

### 4. README.md
Update all GitHub links to point to your profile.

---

## Customize Your Projects

Edit `db.json` file to add your real projects:

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Your Project Name",
      "description": "Brief description of what you built",
      "tech": ["React", "Node.js", "MongoDB"],
      "image": "https://your-image-url.com/screenshot.png",
      "github": "https://github.com/YOUR-USERNAME/project-name",
      "live": "https://your-project-live-url.com"
    }
  ]
}
```

---

## Tips for Job Hunting

### 1. Add Real Projects
- Replace placeholder projects with your actual work
- Include live demos whenever possible
- Add screenshots of your projects

### 2. Update Stats
In `src/components/About.jsx`, update:
- Number of projects you've completed
- Years of experience
- Number of clients (if applicable)

### 3. Customize Skills
Edit `db.json` to reflect your actual skills honestly.

### 4. Add Your Photo (Optional)
Replace the "SK" initials with your photo:
1. Add your photo to `public/` folder as `profile.jpg`
2. In `src/components/About.jsx`, replace the initials div with:
```jsx
<img src="/profile.jpg" alt="Sameer Kumar" style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} />
```

### 5. Resume Download Button
Add your resume to `public/` folder as `resume.pdf` and in `src/components/Hero.jsx`:
```jsx
<a href="/resume.pdf" download className="btn btn-secondary">
  <FaDownload /> Download Resume
</a>
```

---

## Testing Before Deployment

1. **Test locally first:**
   ```bash
   # Terminal 1 - Backend
   npm run server
   
   # Terminal 2 - Frontend
   npm run dev
   ```

2. **Build for production:**
   ```bash
   npm run build
   ```

3. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## Troubleshooting

### Site not loading on GitHub Pages?
- Make sure you enabled GitHub Actions in Settings → Pages
- Check if the workflow ran successfully (Actions tab)
- Wait 2-5 minutes for deployment

### CSS not working?
- Run `npm run build` before pushing
- Check browser console for errors

### Contact form not working on GitHub Pages?
GitHub Pages is static hosting. For production contact form:
1. Use Formspree: https://formspree.io
2. Use EmailJS: https://www.emailjs.com
3. Deploy backend to Render.com (free)

---

## Your Portfolio is Ready! 🎉

**Your Information:**
- ✅ Name: Sameer Kumar
- ✅ Title: Full Stack Developer
- ✅ LinkedIn: Connected
- ✅ Email: sameerkumar88977@gmail.com
- ✅ All buttons working
- ✅ Backend integrated
- ✅ Mobile responsive
- ✅ Professional design

**Next Steps:**
1. Push to GitHub
2. Enable GitHub Pages
3. Share the link with recruiters!
4. Add to your resume
5. Apply for jobs!

Good luck with your job search! 🚀
