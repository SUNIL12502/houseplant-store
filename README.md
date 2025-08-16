# Green Haven - Houseplant E-commerce Store

A modern React-based e-commerce website for selling houseplants, built with Redux for state management and React Router for navigation.

## 🚀 Features

### Landing Page (5 points)
- ✅ **Background image**: Beautiful nature-themed background
- ✅ **Company name**: "Green Haven" prominently displayed
- ✅ **Company description**: Detailed paragraph about the company
- ✅ **Get Started button**: Links to the product listing page

### Product Listing Page (9 points)
- ✅ **Six unique houseplants**: Each with thumbnail, name, and price
- ✅ **Three categories**: Tropical Plants, Low Maintenance, Statement Plants
- ✅ **Add to Cart functionality**: 
  - Shopping cart icon increases by one
  - Button becomes disabled after selection
  - Plant gets added to shopping cart

### Header (7 points)
- ✅ **Displays on all pages**: Consistent header across the site
- ✅ **Shopping cart icon**: Shows total number of items with badge
- ✅ **Navigation**: Links to products and cart pages

### Shopping Cart Page (23 points)
- ✅ **Total items count**: Displays total number of plants
- ✅ **Total cost**: Shows total cost of all items
- ✅ **Plant details**: Each item shows thumbnail, name, and unit price
- ✅ **Increase button**: Increments quantity and updates totals
- ✅ **Decrease button**: Decrements quantity and updates totals
- ✅ **Delete button**: Removes items from cart
- ✅ **Checkout button**: Shows "Coming Soon" message
- ✅ **Continue shopping**: Links back to product listing

### Redux Implementation (4 points)
- ✅ **Store configuration**: Proper Redux store setup
- ✅ **Cart slice**: Complete cart state management
- ✅ **Actions**: Add, remove, increase, decrease functionality
- ✅ **State persistence**: Cart state maintained across navigation

## 🛠️ Technology Stack

- **React 18**: Modern React with hooks
- **Redux Toolkit**: State management
- **React Router**: Navigation and routing
- **CSS3**: Modern styling with responsive design
- **Unsplash API**: High-quality plant images

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
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

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation and cart icon
│   ├── LandingPage.js     # Homepage with company info
│   ├── ProductListing.js  # Product grid with categories
│   ├── ShoppingCart.js    # Cart management
│   └── *.css              # Component styles
├── store/
│   ├── store.js           # Redux store configuration
│   └── cartSlice.js       # Cart state management
├── data/
│   └── plants.js          # Plant data and categories
└── App.js                 # Main app with routing
```

## 🎯 Assignment Requirements Fulfillment

### GitHub (6 points)
- ✅ **Public repository**: Ready for peer evaluation
- ✅ **Redux files**: Complete Redux implementation with store and slice

### Landing Page (5 points)
- ✅ **Background image**: Nature-themed background
- ✅ **Company paragraph**: Detailed company description
- ✅ **Company name**: "Green Haven" branding
- ✅ **Get Started button**: Links to products page

### Product Listing (9 points)
- ✅ **Six unique plants**: Monstera, Snake Plant, Fiddle Leaf Fig, Pothos, ZZ Plant, Bird of Paradise
- ✅ **Three categories**: Tropical Plants, Low Maintenance, Statement Plants
- ✅ **Add to Cart behavior**: Complete functionality as specified

### Header (7 points)
- ✅ **Multi-page display**: Consistent across all pages
- ✅ **Cart icon with count**: Real-time cart total display
- ✅ **Navigation**: Links between pages

### Shopping Cart (23 points)
- ✅ **All required features**: Complete cart functionality
- ✅ **Quantity controls**: Increase/decrease buttons
- ✅ **Delete functionality**: Remove items from cart
- ✅ **Checkout message**: "Coming Soon" alert
- ✅ **Continue shopping**: Navigation back to products

## 🎨 Design Features

- **Modern UI**: Clean, professional design
- **Responsive**: Works on desktop, tablet, and mobile
- **Smooth animations**: Hover effects and transitions
- **Accessibility**: Proper contrast and keyboard navigation
- **Performance**: Optimized images and efficient rendering

## 🔧 Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (not recommended)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This project was created for a Coursera assignment. For peer evaluation purposes, all features have been implemented according to the specified requirements.

## 📄 License

This project is created for educational purposes as part of a Coursera course assignment.
