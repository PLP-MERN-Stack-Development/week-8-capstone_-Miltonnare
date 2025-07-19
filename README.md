# 💼 Jobs Parlour — MERN Stack Job Application Platform

Jobs Parlour is a real-world job marketplace MVP built with the **MERN stack (MongoDB, Express.js, React, Node.js)**. It allows **employers** to post jobs and manage applications, while **job seekers** can browse jobs and apply — all within a secure, role-based system.

---

## 📸 Screenshots

Coming soon... 

---

## 🚀 Features

### 👥 Authentication & Roles
- User Registration & Login with JWT
- Role-based access: `employer` vs `jobseeker`
- Protected dashboard routes

### 🧑‍💼 Employer Features
- Post, edit, and delete jobs
- View applicants per job
- Export applicants as **CSV**
- Manage dashboard

### 🔍 Job Seeker Features
- Browse all available jobs
- Apply to jobs (only once)
- Dashboard view of applied jobs 
- View Jobs Apllied 

### 💻 Tech Stack

| Layer      | Technology           |
|------------|----------------------|
| Frontend   | React, Tailwind CSS  |
| State/Auth | Context API, JWT     |
| Backend    | Express.js, Node.js  |
| Database   | MongoDB + Mongoose   |
| API Test   | Postman              |
| Deployment | Render (backend), Vercel (frontend) |

---

## 🏗️ Project Structure

```bash
jobs-parlour/
├── client/            # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/   # AuthContext
│       └── App.jsx
├── server/      # Express backen
|   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js

```
🛡️ Security Notes

Passwords are hashed with bcrypt

JWT is used for authentication

Routes are protected based on roles

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the Repository
```bash
 git clonehttps://github.com/PLP-MERN-Stack-Development/week-8-capstone_-Miltonnare.git
 cd week-8-capstone_-Miltonnare
```

### 2. Environment Variables
Create `.env` files in both `client/` and `server/` directories. Example for `server/.env`:
```
MONGO_URI=mongodb://localhost:27017/dbname
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```
Example for `client/.env`:
```
VITE_REACT_APP_REGISTER_URL=http://localhost:3000/api/auth/register

VITE_REACT_APP_LOGIN_URL=http://localhost:3000/api/auth/login
VITE_REACT_APP_LOGIN_URL=http://localhost:3000/api/auth/login
VITE_REACT_APP_JOBS_URL=http://localhost:3000/api/jobs
VITE_REACT_APP_CREATEJOBS_URL=http://localhost:3000/api/jobs/create
VITE_REACT_APP_CREATEJOBS_URL=http://localhost:3000/api/jobs
VITE_REACT_APP_MY_APPLICATIONS_URL=http://localhost:3000/api/jobs/my-applications
VITE_REACT_APP_MY_APPLICANTS_URL=http://localhost:3000/api/jobs/applicants
```

### 3. Install Dependencies
```bash
cd client
npm install
cd ../server
npm install
```

### 4. Run the Application
- **Start Backend:**
  ```bash
  cd server
  npm run dev
  # or: npm start
  ```
- **Start Frontend:**
  ```bash
  cd client
  npm run dev
  ```

- The frontend will run on `http://localhost:5173` and backend on `http://localhost:3000` by default.

## Deployment

 The project was deployed on Render for Backend, Vercel for the Frontend and MongoAtlas for the Database.
 Ensures it meets the MERN STACK requirements.

Link: https://jobs-parlour-mern.vercel.app/

👨‍💻 Author
Milton

Built as part of a practical full-stack developer journey focused on real-world systems.



## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [GitHub Classroom Guide](https://docs.github.com/en/education/manage-coursework-with-github-classroom) 