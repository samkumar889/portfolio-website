# Sameer Kumar - Full Stack Developer Portfolio

Professional portfolio website built with React, featuring a modern design with working backend integration.

## 🚀 Features

- **Modern UI/UX**: Professional gradient design with smooth animations
- **Fully Responsive**: Works perfectly on all devices
- **Working Contact Form**: Backend integration with JSON Server
- **Dynamic Projects**: Projects loaded from backend API
- **Interactive Skills**: Categorized skill display
- **Smooth Navigation**: All buttons and links are functional
- **GitHub Pages Ready**: Optimized for GitHub Pages deployment
- **SEO Optimized**: Meta tags and proper structure
- **Fast Performance**: Built with Vite for optimal speed

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Vite
- CSS3 (Custom styling with gradients and animations)
- React Icons
- React Type Animation
- Axios

**Backend:**
- JSON Server (REST API)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
```bash
git clone <your-repository-url>
cd portfolio-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the backend server** (Terminal 1)
```bash
npm run server
```
This starts JSON Server on http://localhost:3001

4. **Start the frontend** (Terminal 2)
```bash
npm run dev
```
This starts the React app on http://localhost:3000

5. **Open your browser**
Navigate to http://localhost:3000

## 🌐 Deploy to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to GitHub and create a new repository
2. Name it `your-username.github.io` OR any name you prefer

### Step 2: Push your code
```bash
git init
git add .
git commit -m "Initial commit - Portfolio website"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings**
3. Navigate to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The deployment workflow will automatically run

### Step 4: Access your site
Your portfolio will be live at: `https://your-username.github.io/repository-name/`

## 📱 Sections

- **Hero**: Introduction with animated typing effect
- **About**: Personal information and stats
- **Skills**: Categorized technical skills
- **Projects**: Portfolio projects with live links
- **Contact**: Working contact form with backend integration
- **Footer**: Social media links

## 🔧 Customization

### Update Personal Information
Edit the following files:
- `src/components/Hero.jsx` - Name and title
- `src/components/About.jsx` - About text and stats
- `src/components/Contact.jsx` - Contact details
- `src/components/Footer.jsx` - Footer information

### Update Projects
Edit `db.json` to add/modify your projects:
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Your Project",
      "description": "Project description",
      "tech": ["Tech1", "Tech2"],
      "image": "image-url",
      "github": "github-link",
      "live": "live-demo-link"
    }
  ]
}
```

### Update Skills
Edit `db.json` to modify skills:
```json
{
  "skills": [
    {
      "category": "Frontend",
      "items": ["React", "JavaScript", "CSS"]
    }
  ]
}
```

### Change Colors
Edit `src/index.css` and modify the CSS variables:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
}
```

## 📂 Project Structure

```
portfolio-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── 404.html                # GitHub Pages redirect
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About section
│   │   ├── Skills.jsx          # Skills section
│   │   ├── Projects.jsx        # Projects section
│   │   ├── Contact.jsx         # Contact form
│   │   └── Footer.jsx          # Footer
│   ├── services/
│   │   └── api.js              # API integration
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── db.json                     # Backend data
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
└── README.md                   # Documentation
```

## 🔌 Backend API

The portfolio uses JSON Server for backend functionality:

- **GET /** - Fetch all data (projects, skills, messages)
- **POST /messages** - Submit contact form
- **GET /messages** - View all messages
- **GET /projects** - Fetch projects
- **GET /skills** - Fetch skills

### Production Backend
For production, you can:
1. Deploy to Render.com (free)
2. Use Firebase
3. Use Supabase
4. Use any Node.js hosting service

## ✨ Features Details

### Working Contact Form
- Validates input fields
- Sends data to backend
- Shows success/error notifications
- Stores messages in db.json

### Smooth Scrolling
- All navigation links scroll smoothly
- Mobile responsive hamburger menu
- Active section highlighting

### Animations
- Typing animation in hero section
- Hover effects on cards and buttons
- Smooth transitions
- Loading spinners

## 🎨 Design Highlights

- Modern gradient color scheme
- Dark theme for professional look
- Card-based layout
- Responsive grid system
- Professional typography
- Icon integration

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

- **Email**: sameerkumar88977@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/sameer-kumar-gehlot-b24015324
- **GitHub**: https://github.com

## 🙏 Acknowledgments

- Built with React and Vite
- Icons from React Icons
- Styling with custom CSS
- Backend powered by JSON Server

---

**Made with ❤️ by Sameer Kumar**
