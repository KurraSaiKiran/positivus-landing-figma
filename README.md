# Positivus Landing Page

A modern, responsive landing page built with React, TypeScript, and Tailwind CSS, based on a Figma design.

## 🚀 Tech Stack

- **React 19.2.0** - UI library
- **TypeScript** - Type safety
- **Vite 7.3** - Build tool and dev server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **React Compiler** - Performance optimization

## 📦 Project Structure

```
positivus-landing/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx      # Header navigation with mobile menu
│   │   ├── Hero.tsx            # Hero section with CTA
│   │   ├── LogoStrip.tsx       # Infinite scrolling company logos
│   │   ├── Services.tsx        # Services showcase cards
│   │   ├── WorkingProcess.tsx  # Accordion process steps
│   │   ├── Testimonials.tsx    # Auto-sliding testimonials carousel
│   │   └── Footer.tsx          # Footer with newsletter subscription
│   ├── assets/                 # SVG icons and images
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles with custom theme
├── public/                     # Static assets
└── index.html                  # HTML template
```

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/KurraSaiKiran/positivus-landing-figma.git

# Navigate to project directory
cd positivus-landing

# Install dependencies
npm install
```

## 🏃 Running the Project

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🌐 Development Server

After running `npm run dev`, open [http://localhost:5173](http://localhost:5173) in your browser.

## ✨ Features

### Interactive Components
- **Auto-Sliding Testimonials**: 5 testimonials with 2-second auto-slide and seamless forward loop
- **Infinite Logo Scroll**: Continuously moving company logos
- **Accordion Process**: Expandable/collapsible working process items (default closed)
- **Mobile Navigation**: Functional hamburger menu with smooth transitions
- **Newsletter Subscription**: Form with email validation and submission handling

### Responsive Design
- **Mobile-First Approach**: Optimized for all screen sizes
- **Breakpoint System**: Tailwind's `md:` breakpoint for desktop styles
- **Flexible Layouts**: Stack vertically on mobile, horizontal on desktop
- **Touch-Friendly**: Large tap targets for mobile users

### User Experience
- **Smooth Transitions**: 300ms transitions on all interactive elements
- **Clickable Buttons**: All CTAs with hover effects and smooth scrolling
- **Visual Feedback**: Hover states, active states, and focus indicators
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

### Performance
- **React Compiler**: Automatic optimizations
- **Vite HMR**: Fast hot module replacement
- **CSS Animations**: Hardware-accelerated transitions
- **Optimized Assets**: Compressed images and SVGs

## 🎨 Design Features

### Color Scheme
- **Brand Green**: `#B9FF66`
- **Brand Black**: `#191A23`
- **Brand Dark**: `#292A32`
- **Brand Gray**: `#F3F3F3`

### Typography
- **Font**: Space Grotesk (400, 500 weights)
- **Responsive Sizes**: Scales from mobile to desktop

### Components
- **Custom Radius**: 45px for cards, 14px for inputs
- **Shadow Effects**: Consistent card shadows
- **Smooth Animations**: All transitions use ease-in-out

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (default)
- **Desktop**: ≥ 768px (`md:` prefix)

## ✅ Code Quality & Best Practices

### Clean Code
- **Modular Components**: Single responsibility principle
- **TypeScript**: Full type safety
- **Consistent Naming**: Descriptive variable and function names
- **Code Comments**: Clear section labels

### React Best Practices
- **Functional Components**: Modern React hooks
- **State Management**: useState for local state
- **Side Effects**: useEffect with proper cleanup
- **Event Handling**: Proper onClick, onSubmit handlers
- **Conditional Rendering**: Efficient rendering patterns

### Performance Optimizations
- **React Compiler**: Enabled for automatic optimizations
- **Lazy Loading**: Optimized image loading
- **CSS Transitions**: Hardware-accelerated animations
- **Clean Intervals**: Proper cleanup in useEffect

### Accessibility
- **Semantic HTML**: Proper use of nav, section, footer tags
- **Alt Text**: All images have descriptive alt attributes
- **Keyboard Navigation**: All interactive elements accessible
- **Form Validation**: HTML5 validation for inputs

## 🔧 Configuration Files

- **Vite Config**: `vite.config.ts` - Build configuration
- **TypeScript Config**: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- **ESLint Config**: `eslint.config.js` - Code quality rules
- **PostCSS Config**: `postcss.config.js` - CSS processing
- **Tailwind Theme**: Custom theme in `index.css`

## 🌟 Key Implementations

### 1. Auto-Sliding Testimonials
- 5 unique testimonials with different authors
- 2-second auto-slide interval
- Seamless forward loop (no reverse)
- Manual navigation with arrows and dots
- White arrow icons on dark background

### 2. Infinite Logo Scroll
- Continuous horizontal scrolling animation
- 30-second loop duration
- Smooth transitions

### 3. Working Process Accordion
- Default state: All items closed (plus icon)
- Click to expand/collapse
- Smooth height transitions
- Only one item open at a time

### 4. Mobile Navigation
- Hamburger menu icon
- Slide-down menu with all links
- Auto-close on link click
- Smooth transitions

### 5. Newsletter Subscription
- Email validation
- Form submission handling
- Aligned with footer layout
- Responsive positioning

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Kurra Sai Kiran**
- GitHub: [@KurraSaiKiran](https://github.com/KurraSaiKiran)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 🎯 Project Highlights

- ✅ Clean, well-structured, and readable code
- ✅ Fully responsive and cross-device compatible
- ✅ Proper React component architecture and state management
- ✅ Modern best practices and performance optimizations
- ✅ Accessibility and user experience focus
- ✅ TypeScript for type safety
- ✅ Smooth animations and transitions
- ✅ Mobile-first responsive design
