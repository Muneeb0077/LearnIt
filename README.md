# LearnIt - Learning Management System (LMS)

**LearnIt** is a modern and fully-featured Learning Management System designed to bridge the gap between students and instructors. Built with the MERN stack, it ensures a seamless and secure experience for buying, managing, and watching courses. The application adheres to best practices, including proper JSON Web Token (JWT) authentication and implementation of coding and MERN development standards.

---

## Features

### **For Students**
- **Course Marketplace**: Explore and purchase a variety of courses tailored to your interests.
- **Lecture Access**: Watch lectures and track your progress.
- **User Dashboard**: View purchased courses, completed lectures, and progress stats.
- **Secure Access**: Account access is secured with JWT authentication.

### **For Instructors**
- **Add Courses**: Easily create and manage new courses with titles, descriptions, and categories.
- **Lecture Management**: Upload and organize lectures for courses.
- **Revenue Tracking**: Monitor your earnings and student enrollment metrics.

### **General Features**
- **Authentication & Authorization**: Secure user and instructor login using JWT and role-based access control.
- **Scalability**: Built with the MERN stack to handle large-scale data and user bases efficiently.
- **Responsiveness**: Fully responsive design to ensure a great experience on both desktop and mobile devices.
- **Real-Time Updates**: Real-time notifications for purchases, updates, and announcements.

---

## Technologies Used

### **Frontend**
- **React.js**: For a responsive and interactive user interface.
- **Redux/Context API**: State management for seamless user experiences.
- **Tailwind CSS**: Stylish and customizable design.
- **shadcn**: Great ui components

### **Backend**
- **Node.js**: Server-side logic with Express.js for routing and middleware.
- **MongoDB**: Robust database for storing user data, courses, and lectures.
- **JWT**: Secure authentication for users and instructors.

### **Other Tools**
- **Multer**: For managing file uploads (e.g., course lectures).
- **AWS S3/Cloudinary**: For storing course and lecture media securely.
- **Bcrypt.js**: For password encryption.

---

## Installation

### **Clone the Repository**
```bash
git clone https://github.com/your-username/learnit.git
cd learnit
```

### **Backend Setup**
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and configure the following variables:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   CLOUDINARY_NAME=<your-cloudinary-name>
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### **Frontend Setup**
1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

---

## Project Structure

### **Backend**
- `controllers`: Handles logic for courses, users, and authentication.
- `models`: MongoDB schemas for users, courses, and lectures.
- `routes`: API endpoints for various features.
- `middlewares`: Authentication and validation logic.

### **Frontend**
- `components`: Reusable UI components.
- `pages`: Pages for the web application (e.g., Home, Login, Dashboard).
- `redux`: State management logic.
- `styles`: Custom styling with Tailwind CSS.

---

## Standards & Best Practices
- **Coding Standards**: Follows industry best practices, with clear, modular, and maintainable code.
- **Authentication**: Secure JWT-based authentication for all user actions.
- **API Design**: RESTful API structure for efficient communication between frontend and backend.
- **Error Handling**: Comprehensive error handling for smooth user experience.

---

## Contributions

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -m "Add new feature"`).
4. Push your branch (`git push origin feature-name`).
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

**Start your learning journey with LearnIt today!** 🎓
