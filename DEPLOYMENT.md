# Deployment Guide - Green Haven Houseplant Store

## 🚀 Quick Start

### Local Development
1. Navigate to the project directory:
   ```bash
   cd houseplant-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Production Build
1. Create a production build:
   ```bash
   npm run build
   ```

2. The build files will be created in the `build/` directory

## 🌐 Deployment Options

### Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 📋 Assignment Submission Checklist

### GitHub Repository (6 points)
- [ ] Repository is public
- [ ] Redux files are present (`src/store/`)
- [ ] All components are committed
- [ ] README.md is complete

### Website Features (50 points total)
- [ ] Landing page with background image (1 point)
- [ ] Company paragraph (1 point)
- [ ] Company name (1 point)
- [ ] Get Started button (2 points)
- [ ] Six unique houseplants (2 points)
- [ ] Three categories (1 point)
- [ ] Add to Cart functionality (6 points)
- [ ] Header on all pages (2 points)
- [ ] Shopping cart icon with count (3 points)
- [ ] Navigation between pages (2 points)
- [ ] Total items in cart (2 points)
- [ ] Total cost display (2 points)
- [ ] Plant details in cart (6 points)
- [ ] Increase quantity buttons (4 points)
- [ ] Decrease quantity buttons (4 points)
- [ ] Delete button (2 points)
- [ ] Checkout button (1 point)
- [ ] Continue shopping button (2 points)

## 🔧 Troubleshooting

### Common Issues
1. **Port 3000 already in use**: Try `npm start -- --port 3001`
2. **Build fails**: Check for syntax errors in console
3. **Images not loading**: Verify Unsplash URLs are accessible
4. **Redux not working**: Ensure Provider wraps the app

### Performance Tips
- Images are optimized via Unsplash API
- CSS is minified in production
- React Router handles code splitting
- Redux state is efficiently managed

## 📞 Support

For peer evaluation purposes, ensure all features are working before submission. Test the following user flows:

1. **Landing Page**: Click "Get Started" → should navigate to products
2. **Product Page**: Add items to cart → cart count should increase
3. **Cart Page**: Modify quantities → totals should update correctly
4. **Navigation**: Use header links → should work on all pages
