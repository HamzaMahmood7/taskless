# 🚀 Taskless 

Taskless is a collaborative task management platform designed to streamline productivity for individuals and teams. Whether you're managing personal to-dos or coordinating complex tasks within a group, 
Taskless provides a clean, distraction-free environment to get things done.

## ✨ Features 
- Individual Task Management: Complete CRUD (Create, Read, Update, Delete) functionality for personal tasks.
- Collaborative Groups: Create groups, invite other users, and share tasks seamlessly.
- Secure Authentication: JWT-based authentication with protected routes and personalized user profiles.
- Dynamic Dashboard: A centralized hub to view your upcoming tasks and group activities.
- Real-time Feedback: Interactive UI with react-hot-toast notifications and react-confetti for task completions.
- Responsive UI: Fully optimized for desktop and mobile using modern React 19.

## 🛠️ Tech Stack 
Frontend (Client)
 - Framework: React 19 (Vite)
 - Routing: React Router Dom v7
 - Icons: Lucide React
 - State Management: Context API
 - Styling: CSS3 & React Select

Backend (Server)
 - Runtime: Node.js
 - Framework: Express.js
 - Database: MongoDB via Mongoose
 - Security: JWT (JSON Web Tokens) & BcryptJS for password hashing
 - Middleware: CORS, Morgan (logging), and custom Error Handling

## 📂 Project Structure

### 💻 Client (Frontend)
```text
client/
├── public/              # Static assets & _redirects for hosting
├── src/
│   ├── assets/          # Images, SVGs, and global styles
│   ├── components/      # UI components (Navbar, ProtectedRoute, Footer)
│   ├── contexts/        # AuthContext and Global state providers
│   ├── pages/           # Page views (Dashboard, TaskList, GroupDetails)
│   ├── App.jsx          # Routes, Toaster, and Main Layout
│   └── main.jsx         # React DOM entry point
├── config/              # Frontend environment/API configs
├── vite.config.js       # Vite build & plugin configuration
└── package.json         # Frontend dependencies & scripts
```

### 💻 Server (Backend)
```text
server/
├── config/              # Express and Middleware configurations
├── db/                  # MongoDB connection setup via Mongoose
├── error-handling/      # Centralized error & 404 middleware
├── middlewares/         # JWT Validation & route guards
├── models/              # Mongoose Schemas (User, Task, Group)
├── routes/              # Express Router (Auth, Task, Group, User)
├── app.js               # Express application initialization
└── server.js            # Entry point - starts the Node server
```

## 🚀 How to Run the Project
Prerequisites
  - Node.js (v18+)
  - MongoDB (Atlas or Local)

Installation
Clone the Repository:
  Bash
  - git clone https://github.com/HamzaMahmood7/taskless.git
  - cd taskless
    
Setup the Server:
  Bash
  - cd server
  - npm install

Create a .env file in the server folder:
  - PORT=5005
  - MONGODB_URI=your_mongodb_connection_string
  - TOKEN_SECRET=your_jwt_secret

Start the server:
  Bash
  - npm run dev

Setup the Client:
  Bash
  - cd ../client
  - npm install

Start the frontend:
  Bash
  - npm run dev

## 🗺️ API Endpoints (Brief)
- Method  Endpoint        Description
- POST    /auth/signup    Register a new user
- POST    /auth/login     Authenticate user & get token
- GET     /api/tasks      Get all tasks for logged-in user
- POST    /api/groups     Create a new collaboration group
- PUT     /api/tasks/:id  Update a specific task

## 🤝 Contributing
1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

Developed by Hamza Mahmood
