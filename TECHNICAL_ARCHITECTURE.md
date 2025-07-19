# 🧭 Jobs Parlour – Technical Architecture Overview

## 🧱 1. Architecture Style
- **Type:** Modular, Monorepo-friendly MERN Stack (MongoDB, Express.js, React.js, Node.js)
- **Design:** RESTful API + Component-based Frontend
- **Authentication:** JWT-based token system
- **Deployment Strategy:** CI/CD with GitHub Actions, Vercel (Frontend), and Render (Backend)

---

## 🔧 2. System Components

### A. 🧑‍💻 Frontend (Client)
- **Framework:** React.js
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **State Management:** useState + Context API
- **API Calls:** Axios
- **Role-Based UI:** Conditional rendering based on JWT role (employer / jobseeker)

**Key Features:**
- Registration & Login forms
- Role-based dashboards
- Job listing & application forms
- Employer applicant viewer
- CSV/Excel Exporter
- Logout functionality

### B. 🔌 Backend (Server)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose ODM)

**Security:**
- Password hashing with bcrypt
- JWT for login/session management
- Protected routes via authMiddleware

**Routes:**
- `/api/auth/` → Register/Login
- `/api/jobs/` → Create/List/Delete/Edit Jobs/Applications


**Validation:**
- Express middleware + Mongoose schema validation

### C. 🗂️ Database (MongoDB Atlas)
- **Collections:**
  - `users` → Contains name, email, password, role
  - `jobs` → Contains title, description, employerId, createdAt
  - `applications` → Contains jobId, userId, note, timestamp

---

## 🔐 3. Authentication & Authorization

**JWT Authentication Flow:**
- On login, backend issues JWT with userId and role.
- Stored in localStorage and sent in Authorization headers.

**Protected Routes Middleware:**
- Verifies token and extracts user identity.
- Role-based access (e.g., only employers can post jobs).

**Frontend Guards:**
- React Router conditional redirect if not authenticated or unauthorized role.

---

## 🚀 4. Deployment
- **Frontend:** Deployed on Vercel
- **Backend:** Deployed on Render (Node service)
- **Database:** MongoDB Atlas (cloud cluster)

**Environment Variables:**
- Stored securely using `.env` and platform secrets (e.g., `JWT_SECRET`, `MONGO_URI`, `CLIENT_URL`)

---

## 🔁 5. CI/CD & Automation
- **GitHub Actions CI/CD Pipeline:**
  - Auto-run tests/lints on pull requests
  - Deploy frontend on merge to main via Vercel
  - Auto-deploy backend on Render
- **Scripts:**
  - `test`, `lint`, `build`, `deploy`
- 

---

## 📈 6. Monitoring & Logging
- **Frontend Monitoring:** Sentry 
- **Backend Logging:** Winston logger
- **Error Tracking:** Try/catch in controllers 
- **Uptime Monitoring:**  Cron-job status endpoint(`Will be Implemented`)

---

## 🧪 7. Testing Strategy
- **Frontend Testing:**
  - Jest + React Testing Library
  - Form validation tests and route guards
- **Backend Testing:**
  - Jest  + Supertest
  - Tests for auth, job CRUD, applications

---

## 🗺️ 8. Future-Proofing Suggestions
- Move to microservices with Docker
- Implement GraphQL or tRPC
- Add AI/ML-based job matching or resume screening
- WebSocket notifications
- Admin Panel for analytics 