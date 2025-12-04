# 📝 Todo List App - MERN Stack

A **modern, professional, and fully responsive** Todo List application built with the MERN stack (MongoDB, Express.js, React, Node.js). Features a stunning UI with glassmorphism effects, smooth animations, and an intuitive user experience.

![Todo List App](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

## ✨ Features

### 🎨 Modern Design
- **Glassmorphism UI** with backdrop blur effects
- **Gradient accents** and vibrant color palette
- **Dark theme** with animated background
- **Smooth animations** and micro-interactions
- **Custom checkboxes** with visual feedback

### 📱 Fully Responsive
- **Desktop** - Optimized for large screens
- **Tablet** - Adaptive layout for medium screens (768px)
- **Mobile** - Touch-friendly interface for small screens (480px)

### 🚀 Functionality
- ✅ **Add tasks** with Enter key support
- ✏️ **Edit tasks** inline
- 🗑️ **Delete tasks** with confirmation
- ☑️ **Mark as complete** with animated checkboxes
- 📊 **Task statistics** (Total, Completed, Pending)
- 💾 **Persistent storage** with MongoDB

### 🎯 User Experience
- **Empty state** with helpful messaging
- **Loading states** and transitions
- **Visual feedback** on all interactions
- **Keyboard shortcuts** for productivity
- **Staggered animations** for list items

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **Vite 6.0.5** - Build tool & dev server
- **Axios** - HTTP client
- **CSS3** - Custom styling with CSS variables
- **Google Fonts (Inter)** - Modern typography
- **Material Symbols** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

## 📁 Project Structure

```
Todo List App-MERN STACK/
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx          # App header with branding
│   │   │   ├── Create.jsx          # Task input component
│   │   │   └── Data.jsx            # Task list & stats
│   │   ├── Style/
│   │   │   ├── Navbar.css          # Navbar styles
│   │   │   ├── Create.css          # Input section styles
│   │   │   └── Data.css            # Todo list styles
│   │   ├── App.jsx                 # Main app component
│   │   ├── App.css                 # App layout styles
│   │   ├── index.css               # Global styles & design system
│   │   └── main.jsx                # React entry point
│   ├── index.html                  # HTML template
│   ├── package.json                # Frontend dependencies
│   └── vite.config.js              # Vite configuration
│
└── Backend/
    ├── server.js                   # Express server
    ├── models/                     # MongoDB models
    ├── routes/                     # API routes
    └── package.json                # Backend dependencies
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** (local or Atlas)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Khwajazeeshan/Todo-List-App.git
   cd "Todo List App"
   ```

2. **Install Backend Dependencies**
   ```bash
   cd Backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../Frontend
   npm install
   ```

4. **Configure MongoDB**
   - Update the MongoDB connection string in `Backend/server.js`
   - Or set up environment variables

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd Backend
   npm start
   ```
   Server runs on `http://localhost:3000`

2. **Start the Frontend Dev Server**
   ```bash
   cd Frontend
   npm run dev
   ```
   App runs on `http://localhost:5173`

3. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎨 Design System

### Color Palette
- **Primary Gradient**: Purple to Violet (#667eea → #764ba2)
- **Secondary Gradient**: Pink to Red (#f093fb → #f5576c)
- **Success Gradient**: Blue to Cyan (#4facfe → #00f2fe)
- **Background**: Dark navy (#0f0f1e, #1a1a2e)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Spacing & Borders
- **Border Radius**: 8px, 12px, 16px, 24px
- **Shadows**: Multiple levels with glow effects
- **Transitions**: 0.2s, 0.3s, 0.5s

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px
- **Mobile Large**: 600px
- **Mobile Small**: 480px

## 🔧 API Endpoints

- `GET /get` - Fetch all todos
- `POST /add` - Create a new todo
- `PUT /update/:id` - Toggle todo completion
- `PUT /edit` - Edit todo text
- `DELETE /delete/:id` - Delete a todo

## 🎯 Key Features Explained

### Glassmorphism Effect
Uses `backdrop-filter: blur()` with semi-transparent backgrounds for a modern, frosted glass appearance.

### Custom Checkboxes
Styled with CSS to replace default browser checkboxes with animated, gradient-filled versions.

### Staggered Animations
Each todo item animates in with a slight delay for a polished entrance effect.

### Task Statistics
Real-time calculation of total, completed, and pending tasks displayed in a stats card.

## 🌟 Future Enhancements

- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] Search and filter functionality
- [ ] User authentication
- [ ] Dark/Light theme toggle
- [ ] Drag and drop reordering
- [ ] Task notes and descriptions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ using modern web technologies

---

**Enjoy organizing your tasks with style! ✨**
