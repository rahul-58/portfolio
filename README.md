# Rahul Reddy Gangapuram - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- 🌙 Dark/Light mode toggle
- 📱 Mobile-first responsive layout
- ✨ Smooth animations with Framer Motion
- 📧 Working contact form with EmailJS
- 🚀 Fast and optimized performance

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email**: EmailJS
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Add personal files (not included in repo for privacy)
   - Add your profile photo as `public/IMG_7851.jpg`
   - Add your resume as `public/Rahul_Reddy_Gangapuram_Resume.pdf`
   - Add favicon and logo files to `public/` folder

4. Set up EmailJS (optional - for contact form)
   - Copy `env.example` to `.env.local`
   - Add your EmailJS credentials to `.env.local`

5. Start the development server
```bash
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up/Login with GitHub
4. Click "New Project"
5. Import your repository
6. Add environment variables in Vercel dashboard:
   - `REACT_APP_EMAILJS_SERVICE_ID`
   - `REACT_APP_EMAILJS_TEMPLATE_ID`
   - `REACT_APP_EMAILJS_PUBLIC_KEY`
7. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Add environment variables in Netlify dashboard
6. Deploy!

## Environment Variables

Create a `.env.local` file in the root directory:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## License

This project is open source and available under the [MIT License](LICENSE).

## 📋 Sections

1. **Hero Section**: Introduction with animated background and call-to-action buttons
2. **About**: Professional summary and education details
3. **Skills**: Technical skills organized by categories with interactive cards
4. **Experience**: Work experience with timeline and achievements
5. **Projects**: Featured projects with detailed descriptions and links
6. **Contact**: Contact form and information with social links

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... more shades
  }
}
```

### Content

Update the content in each component file to match your information:

- **Personal Info**: Update in `Hero.tsx` and `Contact.tsx`
- **Experience**: Modify `Experience.tsx`
- **Projects**: Update `Projects.tsx`
- **Skills**: Edit `Skills.tsx`
- **Education**: Update `About.tsx`

### Styling

- Global styles are in `src/index.css`
- Component-specific styles use Tailwind classes
- Custom animations are defined in `tailwind.config.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Performance Optimization

- Lazy loading for images
- Optimized animations
- Minimal bundle size
- Efficient re-renders with React.memo where appropriate

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: rahul.reddy.gangapuram.58@gmail.com
- **LinkedIn**: [Rahul Reddy Gangapuram](https://www.linkedin.com/in/rahul-reddy-gangapuram/)
- **GitHub**: [rahul-58](https://github.com/rahul-58)

---

Built with ❤️ by Rahul Reddy Gangapuram 