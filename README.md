# Rohit Arodi Ramachandra - Professional Portfolio Website

A modern, responsive personal portfolio website showcasing professional experience, skills, and projects.

## Archived Previous Version
The prior Vite/React implementation that lived in this repository has been moved into `archived/previous`. Nothing was deleted, so you can still reference or restore any of that source by pointing tools at that directory.

## 🌐 Live Demo
Your website will be live at one of these URLs after deployment:
- Netlify: `https://your-site-name.netlify.app`
- Vercel: `https://your-site-name.vercel.app`
- GitHub Pages: `https://yourusername.github.io/Personal_website`

## Deploying to Vercel (Git-connected)
1. Push the current contents of this repo (which match [rohitarodi/Personal_Website](https://github.com/rohitarodi/Personal_Website)) to your GitHub remote.
2. In the Vercel dashboard click **Add New → Project**, then choose the GitHub repository you just updated.
3. Accept the defaults for build command/output (none needed for this static site). The included `vercel.json` already sets up the static build and SPA-style routing.
4. Click **Deploy**. Every push to `main` (or whatever branch you select) will now trigger a fresh deployment automatically.

## 🚀 Quick Hosting Options

### Option 1: Netlify (Recommended - Easiest)
1. Visit [netlify.com](https://netlify.com)
2. Sign up with GitHub, GitLab, or email
3. Drag and drop the entire `Personal_website` folder to Netlify
4. Your site will be live instantly with a random URL
5. Optional: Change to custom domain in site settings

### Option 2: Vercel
1. Visit [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project" → "Import Git Repository"
4. Upload your files or connect GitHub repo
5. Deploy with one click

### Option 3: GitHub Pages (Free)
1. Create a GitHub account at [github.com](https://github.com)
2. Create a new repository named `Personal_website`
3. Upload all files to the repository
4. Go to Settings → Pages
5. Select "Deploy from a branch" → "main" → "/ (root)"
6. Your site will be live at `https://yourusername.github.io/Personal_website`

### Option 4: Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run `firebase login` and `firebase init hosting`
3. Set public directory to current folder
4. Run `firebase deploy`

## 📁 Files Structure
```
Personal_website/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── netlify.toml        # Netlify configuration
```

## 🛠️ Local Development
To run locally:
1. Open `index.html` in any web browser
2. Or use a local server:
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve .`
   - VS Code: Use "Live Server" extension

## 📱 Features
- **Responsive Design**: Works on all devices
- **Modern UI**: Clean, professional styling
- **Smooth Animations**: Scroll-triggered animations
- **Interactive Navigation**: Fixed navbar with smooth scrolling
- **Contact Integration**: Direct email, phone, and LinkedIn links
- **Performance Optimized**: Fast loading and smooth interactions

## 🎨 Customization
To customize the website:
1. **Content**: Edit the HTML in `index.html`
2. **Styling**: Modify colors and layout in `styles.css`
3. **Functionality**: Add features in `script.js`

## 🔗 Contact Information
- **Email**: rohitarodi7@gmail.com
- **LinkedIn**: [linkedin.com/in/arodirohit](https://linkedin.com/in/arodirohit)
- **Location**: Atlanta, Georgia

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

---
Built with ❤️ using HTML, CSS, and JavaScript
