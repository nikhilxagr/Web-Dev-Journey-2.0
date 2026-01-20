# CSS Frameworks

CSS frameworks are pre-written styles and components that help you build responsive, consistent UIs faster. They provide grids, utilities, and pre-built elements so you don’t start from scratch.

## Why Use CSS Frameworks

- **Efficiency**: Pre-designed components and utility classes speed up development.
- **Responsive**: Built-in grid and layout utilities for all screen sizes.
- **Cross-browser**: Consistent appearance across major browsers.
- **Customizable**: Themes/configs let you tailor styles.
- **Community**: Mature ecosystems, docs, and support.

## How to Choose

- **Need speed and components**: Bootstrap, Foundation, UIkit.
- **Prefer utility-first control**: Tailwind, Tachyons, Primer.
- **Lightweight/minimal**: Pure CSS, Skeleton, Milligram, Spectre, Blaze.
- **Material Design look**: Materialize.
- **Team readability**: Semantic UI.
- **Mobile/hybrid apps**: Onsen UI.

## Popular CSS Frameworks

### 1) Bootstrap

Overview: A widely used, component-rich framework with a responsive 12-column grid and JS plugins.

- **Key Features**
  - Responsive grid system
  - Pre-designed UI components (navbars, modals, dropdowns)
  - Cross-browser compatibility
  - JavaScript plugins
- **When to Use**
  - Fast, consistent UIs where responsiveness and compatibility matter.

### 2) Tailwind CSS

Overview: Utility-first framework; compose UIs with class utilities rather than prebuilt components.

- **Key Features**
  - Utility-first approach
  - Highly configurable via tailwind.config.js
  - Excellent design control without writing much CSS
- **When to Use**
  - Custom designs with granular control and scalability.

### 3) Semantic UI

Overview: Human-readable class names with a rich component library.

- **Key Features**
  - Intuitive, semantic class names
  - Pre-built UI components
  - Theming support
- **When to Use**
  - Team projects emphasizing readability and clarity.

### 4) Materialize CSS

Overview: A framework inspired by Google’s Material Design guidelines, with responsive components.

- **Key Features**
  - Material Design components (cards, buttons, forms)
  - Responsive grid system
  - Ready-to-use styles and interactions
- **When to Use**
  - Projects following Material Design conventions.

### 5) Bulma

Overview: Modern, Flexbox-based framework focused on simplicity and responsiveness.

- **Key Features**
  - Flexbox layout system
  - Lightweight and modular
  - Clean, simple syntax
- **When to Use**
  - Modern responsive layouts without heavy JS.

### 6) Primer CSS

Overview: GitHub’s lightweight framework with utilities and minimal components for large-scale apps.

- **Key Features**
  - Utility-first approach
  - Minimalistic and scalable
  - Battle-tested for large codebases
- **When to Use**
  - Scalable, maintainable design systems for big projects.

### 7) Foundation

Overview: Powerful, flexible framework with advanced grid and components.

- **Key Features**
  - Advanced, responsive grid
  - Flexible component customization
  - Accessibility considerations
- **When to Use**
  - Large applications needing flexibility and robustness.

### 8) Pure CSS

Overview: Minimal framework from Yahoo with essential modules only.

- **Key Features**
  - Extremely lightweight
  - Modular and customizable
  - Simple responsive grid
- **When to Use**
  - Small projects requiring fast load times.

### 9) Blaze UI

Overview: Lightweight framework focused on simplicity and performance.

- **Key Features**
  - Fast and minimal
  - Basic, clean components
  - Easy to customize
- **When to Use**
  - Quick setups and minimal design needs.

### 10) Spectre CSS

Overview: Lightweight, modern framework for fast-loading sites.

- **Key Features**
  - Compact size
  - Flexbox-based grid
  - Components (buttons, forms, tables, modals)
  - Utilities for typography and spacing
- **When to Use**
  - Rapid prototyping and small/medium sites.

### 11) Onsen UI

Overview: Framework for mobile web/hybrid apps with native-like components.

- **Key Features**
  - iOS/Android-optimized UI components
  - Works with React, Angular, Vue, or vanilla JS
  - Responsive and touch-friendly
  - Theme customization
- **When to Use**
  - PWAs/hybrid apps targeting iOS and Android.

### 12) Tachyons

Overview: Functional, utility-first framework enabling rapid development with small reusable classes.

- **Key Features**
  - Tiny, composable utilities
  - Well-organized classes for spacing, typography, colors
  - Performance-focused
- **When to Use**
  - Minimalistic, highly custom UIs without components.

### 13) UIkit

Overview: Modular CSS/JS framework with responsive components and strong customization.

- **Key Features**
  - Modular architecture
  - Rich component set
  - Extensive customization
- **When to Use**
  - Dynamic web apps needing modular components.

### 14) Skeleton

Overview: Very small framework focused on basic responsive layouts.

- **Key Features**
  - Under ~400 lines
  - Simple grid
  - Ideal for quick prototypes
- **When to Use**
  - Small projects and fast prototyping.

### 15) Milligram

Overview: Ultra-light framework (~2KB gzipped) with simple, clean styles.

- **Key Features**
  - Lightweight and fast
  - Minimal default styles
  - Easy to customize
- **When to Use**
  - Tiny projects where simplicity and size matter.

## Getting Started Tips

- **Prototype first**: pick a framework and build a small page to validate fit.
- **Customize responsibly**: override via variables/config rather than deep CSS selectors.
- **Keep consistency**: use the framework’s design tokens/utilities across the app.
- **Audit size**: tree-shake or purge unused styles to minimize CSS.

## Conclusion

Choose the framework that matches your team’s workflow and project scale. Component-rich frameworks boost speed; utility-first frameworks maximize control; minimal frameworks optimize performance.
