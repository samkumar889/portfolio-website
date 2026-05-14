# Commands Reference - Sameer Kumar Portfolio

## 🚀 Quick Start

### Windows Users
```bash
# Just double-click start.bat
# OR use PowerShell:
powershell -ExecutionPolicy Bypass -Command "npm run dev"
```

### All Platforms
```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend  
npm run dev
```

---

## 📦 NPM Commands

### Installation
```bash
# Install all dependencies
npm install
```

### Development
```bash
# Start frontend development server (Port 3000)
npm run dev

# Start backend JSON server (Port 3001)
npm run server
```

### Production
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🔧 Git Commands

### Initial Setup
```bash
# Initialize git repository
git init

# Check status
git status

# Add all files
git add .

# Add specific file
git add filename

# Commit changes
git commit -m "Your commit message"

# Create main branch
git branch -M main
```

### Connect to GitHub
```bash
# Add remote repository
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git

# Verify remote
git remote -v

# Push to GitHub
git push -u origin main

# Push future changes
git push
```

### Daily Workflow
```bash
# Check what changed
git status

# Stage changes
git add .

# Commit
git commit -m "Description of changes"

# Push to GitHub
git push
```

---

## 🌐 URLs

### Local Development
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **API Docs**: http://localhost:3001

### API Endpoints
```
GET  http://localhost:3001/           - All data
GET  http://localhost:3001/projects   - Get projects
GET  http://localhost:3001/skills     - Get skills
GET  http://localhost:3001/messages   - Get messages
POST http://localhost:3001/messages   - Send message
```

---

## 🔍 Testing Commands

### Check Node Version
```bash
node --version
# Should be v18 or higher
```

### Check npm Version
```bash
npm --version
```

### List Dependencies
```bash
npm list
```

### Check for Vulnerabilities
```bash
npm audit
```

### Fix Vulnerabilities
```bash
npm audit fix
```

---

## 🛠️ Troubleshooting Commands

### If npm doesn't work (Windows)
```bash
# Use PowerShell with execution policy bypass
powershell -ExecutionPolicy Bypass -Command "npm install"
powershell -ExecutionPolicy Bypass -Command "npm run dev"
```

### Clear Cache
```bash
npm cache clean --force
```

### Reinstall Dependencies
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install

# Windows PowerShell
Remove-Item -Recurse -Force node_modules
npm install
```

### Reset Everything
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json
npm install
```

---

## 📝 Useful One-Liners

### Open in VS Code
```bash
code .
```

### Open in Browser
```bash
# Windows
start http://localhost:3000

# Mac
open http://localhost:3000

# Linux
xdg-open http://localhost:3000
```

### Check Port Usage
```bash
# Windows
netstat -ano | findstr :3000
netstat -ano | findstr :3001

# Mac/Linux
lsof -i :3000
lsof -i :3001
```

### Kill Process on Port
```bash
# Windows
taskkill /PID <PID> /F

# Mac/Linux
kill -9 <PID>
```

---

## 🚢 Deployment Commands

### Build and Deploy
```bash
# 1. Build for production
npm run build

# 2. Test the build
npm run preview

# 3. Deploy to GitHub
git add .
git commit -m "Update portfolio"
git push
```

### Create GitHub Repository (Command Line)
```bash
# Using GitHub CLI (if installed)
gh repo create portfolio --public --push
```

---

## 📊 Project Info Commands

### View Package Info
```bash
npm view
```

### List Scripts
```bash
npm run
```

### Check Dependencies Size
```bash
npm install -g package-size
package-size
```

---

## 🎯 Common Workflows

### Start Working on Portfolio
```bash
# 1. Navigate to project
cd portfolio-website

# 2. Start backend (Terminal 1)
npm run server

# 3. Start frontend (Terminal 2)
npm run dev

# 4. Open browser
http://localhost:3000
```

### Make Changes
```bash
# 1. Edit files in VS Code
code .

# 2. See changes live (hot reload)
# Just save the file!

# 3. Commit changes
git add .
git commit -m "Updated XYZ"
git push
```

### Deploy Updates
```bash
# 1. Make your changes
# 2. Test locally
npm run dev

# 3. Build
npm run build

# 4. Commit and push
git add .
git commit -m "Description"
git push

# 5. GitHub Actions will auto-deploy
```

---

## 📚 Learn More

### NPM Documentation
https://docs.npmjs.com/

### Git Documentation
https://git-scm.com/doc

### GitHub Pages
https://pages.github.com/

### Vite Documentation
https://vitejs.dev/guide/

---

## 💡 Pro Tips

1. **Always test locally before pushing**
2. **Use meaningful commit messages**
3. **Keep dependencies updated**
4. **Build before deploying**
5. **Use `.gitignore` properly**
6. **Test on mobile devices**
7. **Check browser console for errors**

---

**Bookmark this page for quick reference! 🔖**
