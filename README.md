# Levantate Labs v2 Website

Modern, SEO-optimized website for Levantate Labs built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## 🚀 Features

- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- **Modern Stack**: Next.js 16 with App Router, React 19, TypeScript, Tailwind CSS v4
- **Smooth Animations**: Framer Motion for fluid, performant animations
- **Responsive Design**: Mobile-first approach with beautiful UI on all devices
- **Performance**: Optimized fonts, images, and code splitting
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

## 📦 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
levantate.in-v2/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Navigation header
│   │   │   └── Footer.tsx      # Footer with links
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero section
│   │   │   ├── Services.tsx    # Services showcase
│   │   │   ├── Projects.tsx    # Projects section
│   │   │   └── Contact.tsx     # Contact form
│   │   └── StructuredData.tsx  # JSON-LD for SEO
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout with SEO
│   ├── page.tsx               # Home page
│   └── sitemap.ts             # Dynamic sitemap
├── public/
│   └── robots.txt             # SEO robots file
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb)
- **Secondary**: Black (#0a0a0a)
- **Accent**: Various gradients for service cards

### Typography
- **Font Family**: Inter
- **Headings**: Bold, large sizes (4xl-8xl)
- **Body**: Regular weight, comfortable line height

### Components
- Responsive navigation with mobile menu
- Animated hero section with gradient background
- Service cards with hover effects
- Contact form with validation
- Footer with social links

## 🔍 SEO Features

- ✅ Comprehensive meta tags
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ JSON-LD structured data
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Semantic HTML structure
- ✅ Fast page load times
- ✅ Mobile-responsive design

## 📝 Services Offered

1. **Blockchain Development** - Smart contracts, DApps, decentralized systems
2. **AI Solutions** - Machine learning, intelligent applications
3. **Web Development** - React, Next.js, Node.js applications
4. **UI/UX Design** - Modern, intuitive user experiences

## 🌐 Pages

- `/` - Home page with all sections
- `/blog` - Blog (to be implemented)
- `/careers` - Careers page (to be implemented)
- `/terms` - Terms & Conditions (to be implemented)
- `/privacy` - Privacy Policy (to be implemented)

## 📧 Contact

- **Email**: contact@levantate.in
- **Website**: https://www.levantate.in

## ✅ Design Implementation Progress

### Completed
- ✅ Section wrapper component with `#EAEAF1` background
- ✅ Header with centered logo (matching Figma)
- ✅ Hero section with exact Figma design
  - Blue border content box
  - "Become the obvious choice" heading
  - "11.29 < 5.3" CTA button
  - Bottom cards (Book a call + Explore Work)

### In Progress
- 🔄 Awaiting Figma screenshots for remaining sections

### To Do
1. **Complete Figma Design**: Implement remaining sections from Figma
2. **Add Blog**: Create blog system with CMS
3. **Add Careers Page**: Job listings and application forms
4. **Add Legal Pages**: Terms, Privacy Policy, Cookie Policy
5. **Add Analytics**: Google Analytics, GTM
6. **Add Forms Backend**: Connect contact form to backend/email service
7. **Add Images**: Add actual project images and company logo
8. **Performance Optimization**: Image optimization, lazy loading

## 🎨 Using the Section Component

The reusable `Section` component provides consistent styling across all sections:

```tsx
import Section from "@/app/components/ui/Section";

// Default background (#EAEAF1)
<Section>
  <h2>Your Content</h2>
</Section>

// Black background
<Section background="black">
  <h2>Dark Section</h2>
</Section>

// Custom options
<Section 
  background="custom" 
  customBg="#yourcolor"
  fullWidth 
  noPadding
>
  <div>Custom Section</div>
</Section>
```

See `DESIGN_GUIDE.md` for detailed usage examples.

## 📄 License

© 2024 Levantate Labs. All rights reserved.
