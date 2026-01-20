# Grand Hotel - Hotel Management Website

A modern, responsive hotel management website built with React and Vite. Features a beautiful UI, booking inquiry system, room browsing, and comprehensive hotel information.

## 🌟 Features

- **Responsive Design** - Fully mobile-friendly and works on all devices
- **Modern UI** - Clean, professional design with smooth animations
- **Room Browsing** - Filter and sort rooms by type and price
- **Booking Inquiry System** - Contact form with validation (call-to-book approach)
- **Multiple Pages**:
  - Home page with featured rooms and testimonials
  - Rooms page with filtering options
  - Amenities showcase
  - About Us page
  - Contact page with form and map
- **Interactive Features**:
  - Room filtering by category
  - Price sorting
  - Form validation
  - Responsive navigation
  - Image galleries

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:

```bash
npm install
```

2. **Start the development server**:

```bash
npm run dev
```

The website will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
hotel-management/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── RoomCard.jsx
│   │   └── ContactForm.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Rooms.jsx
│   │   ├── Amenities.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Customization

### Update Hotel Information

1. **Hotel Name**: Edit in `src/components/Header.jsx` and `src/components/Footer.jsx`
2. **Contact Details**: Update phone numbers and emails in `src/pages/Contact.jsx` and `src/components/Footer.jsx`
3. **Room Information**: Modify room data in `src/pages/Rooms.jsx` and `src/pages/Home.jsx`
4. **Images**: Replace image URLs throughout the components with your own images
5. **Colors**: Update CSS variables in `src/index.css`:
   - `--primary-color`: Main brand color
   - `--secondary-color`: Accent color
   - `--accent-color`: Highlight color

### Add Your Own Images

Replace the Unsplash placeholder URLs with your own images:

- Hero images
- Room photos
- Hotel exterior/interior shots
- Team member photos

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (optional):

```bash
npm install -g vercel
```

2. **Deploy**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite and deploy

**Or use Vercel CLI**:

```bash
vercel
```

### Deploy to Netlify

1. **Install Netlify CLI** (optional):

```bash
npm install -g netlify-cli
```

2. **Deploy**:
   - Push code to GitHub
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your repository
   - Build command: `npm run build`
   - Publish directory: `dist`

**Or use Netlify CLI**:

```bash
netlify deploy --prod
```

### Deploy to GitHub Pages

1. **Install gh-pages**:

```bash
npm install --save-dev gh-pages
```

2. **Update package.json**:

```json
{
  "homepage": "https://yourusername.github.io/hotel-management",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.js**:

```javascript
export default defineConfig({
  plugins: [react()],
  base: "/hotel-management/",
});
```

4. **Deploy**:

```bash
npm run deploy
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **React Router v6** - Navigation
- **Vite** - Build tool and dev server
- **React Icons** - Icon library
- **CSS3** - Styling with CSS variables and modern features

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px

## 🔧 Configuration

### Environment Variables (Optional)

Create a `.env` file for any API keys or configuration:

```env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=info@grandhotel.com
```

Access in your code:

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 📞 Support

For questions or issues:

- Email: info@grandhotel.com
- Phone: +1 (234) 567-890

## 📄 License

This project is open source and available under the MIT License.

## 🎯 Future Enhancements

Potential features to add:

- [ ] Online payment integration
- [ ] Real-time availability checking
- [ ] Multi-language support
- [ ] Admin dashboard
- [ ] Customer reviews system
- [ ] Email notifications
- [ ] Booking calendar
- [ ] Social media integration
- [ ] Blog/News section
- [ ] Special offers management

## 👨‍💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

### Code Style

- Use functional components with hooks
- Follow React best practices
- Keep components small and focused
- Use meaningful variable names
- Comment complex logic

---

**Built with ❤️ for Grand Hotel**
