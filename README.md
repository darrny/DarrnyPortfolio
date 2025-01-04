# Darrny Portfolio

A modern, responsive portfolio website showcasing my projects and experience. Built with React, Tailwind CSS, and Framer Motion for smooth animations.


## 🚀 Features

- Responsive design that works on all devices
- Smooth scroll animations using Framer Motion
- Dark theme with blue accents
- Project showcase with live demos
- Skills section with categorized technologies
- Interactive UI elements with hover effects

## 🛠️ Built With

- React
- Tailwind CSS
- Framer Motion
- Vite

## 🏗️ Project Structure

```
Darrny/
├── src/
│   ├── components/
│   │   └── Portfolio.jsx
│   ├── assets/
│   │   ├── profile.jpg
│   │   └── projects/
│   │       ├── jobu.png
│   │       ├── spotifyou.png
│   │       └── ...
│   ├── App.jsx
│   └── index.css
├── tailwind.config.js
└── package.json
```

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/darrny/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 🎨 Customization

### Modifying Content

- Update personal information in `Portfolio.jsx`
- Add project images to `src/assets/projects/`
- Modify color scheme in `tailwind.config.js`

### Adding Projects

Add new projects to the projects array in `Portfolio.jsx`:
```javascript
{
  name: "Project Name",
  url: "https://project-url.com",
  description: "Project description",
  tech: ["React", "Node.js", "etc"],
  image: "/src/assets/projects/image.png"
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Dependencies

- React 18
- Tailwind CSS 3
- Framer Motion 10
- Vite 5

## 📄 License

This project is open source and available under the MIT License.

## 🙋‍♂️ Author

Darren Lim - [@darrny](https://github.com/darrny)

## 🙏 Acknowledgments

- Built using React and Vite
- Styled with Tailwind CSS
- Animations powered by Framer Motion

Feel free to fork this project and make it your own! If you find it helpful, don't forget to give it a star ⭐️