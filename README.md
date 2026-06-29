# 💬 ChatApp - Full Stack Real-Time Chat Application

<h3 align="center">
A modern real-time chat application built with the MERN Stack, featuring secure authentication, instant messaging, image sharing, email integration, and responsive design.
</h3>

<p align="center">

🚀 **Live Demo:** https://chatapp-gk6q.onrender.com/

</p>

---

## 📸 Preview

![ChatSphere Preview](/frontend/public/screenshot-for-readme.png)

---

# ✨ Features

### 🔐 Authentication

* JWT Authentication
* Secure HTTP-only Cookies
* User Registration & Login
* Protected Routes
* Logout Functionality

### 💬 Real-Time Chat

* Instant messaging using Socket.IO
* Live online/offline status
* Real-time message updates
* Chat history persistence
* Auto-scroll to latest messages

### 🖼️ Media Sharing

* Image uploads via Cloudinary
* Profile picture upload
* Image preview before sending

### 📧 Email Integration

* Welcome email after successful signup
* Powered by Resend API

### 🔔 User Experience

* Keyboard typing sounds
* Notification sounds
* Toggle sound effects
* Responsive UI
* Animated components
* Loading indicators
* Beautiful modern interface

### 🛡️ Security

* JWT Authentication
* Password hashing using bcrypt
* Arcjet API protection
* Cookie-based authentication
* Environment variable configuration

---

# 🛠 Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* DaisyUI
* Zustand
* Axios
* React Router
* Socket.IO Client
* Lucide React
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* JWT
* bcryptjs
* Cloudinary
* Resend
* Arcjet

### Deployment

* Render
* MongoDB Atlas
* Cloudinary

---

# 📁 Project Structure

```text
ChatApp
│
├── backend
│   ├── src
│   ├── routes
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── lib
│   └── emails
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── store
│   ├── hooks
│   └── assets
│
└── README.md
```

---

# ⚙️ Environment Variables

## Backend (.env)

```env
PORT=3000

MONGODB_URI=your_mongodb_uri

NODE_ENV=development

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173

RESEND_API_KEY=your_resend_api_key

EMAIL_FROM=your_email

EMAIL_FROM_NAME=your_name

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

ARCJET_KEY=your_arcjet_key

ARCJET_ENV=development
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/chatapp.git

cd chatapp
```

---

## Install Backend

```bash
cd backend

npm install

npm run dev
```

---

## Install Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🌐 Live Demo

https://chatapp-gk6q.onrender.com/

---

# 📚 Learning Highlights

This project demonstrates:

* Full Stack MERN Development
* REST API Development
* Authentication & Authorization
* Real-Time Communication
* State Management with Zustand
* MongoDB Data Modeling
* Image Uploads with Cloudinary
* Email Integration using Resend
* Secure Cookie Authentication
* API Protection with Arcjet
* Deployment on Render

---

# 📌 Future Improvements

* ✅ Read Receipts
* ✅ Typing Indicator
* ✅ Group Chats
* ✅ Emoji Support
* ✅ Message Reactions
* ✅ Voice Messages
* ✅ Video Calling
* ✅ Push Notifications
* ✅ Message Search

---

# 👨‍💻 Author

**Biswajit Sahoo**

If you enjoyed this project, consider giving it a ⭐ on GitHub.
