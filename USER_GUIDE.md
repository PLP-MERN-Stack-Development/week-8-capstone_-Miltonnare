# 🧭 Jobs Parlour – User Guide (MVP Version)

## 👤 General Features

### 1. Account Registration
- Visit the Homepage.
- Choose:
  - **“I’m an Employer”** to post jobs.
  - **“I’m a Job Seeker”** to find jobs.
- Fill in the registration form:
  - Name, email, password, and role.
- Submit the form to create your account.

### 2. Login
- Navigate to the Login page.
- Enter your email and password.
- Click **Login** to access your dashboard.

### 3. Logout
- Click the **Logout** button on the top/right navigation bar.
- You’ll be securely logged out and redirected to the homepage/login page.

---

## 🧑‍💼 Employer Guide

### 🔹 Dashboard Features
Once logged in as an Employer, you'll access the **Employer Dashboard**.

#### 1. Post a Job
- Click **“Post Job”** on the dashboard.
- Fill in job details:
  - Title, description, requirements, location, salary range, etc.
- Click **“Submit”** to publish the job.

#### 2. Manage Jobs
- See a list of all jobs you've posted.
- For each job, you can:
  - **Edit** job details.
  - **Delete** the job.
  - **View Applicants** for that specific job.

#### 3. View Applicants
- Click the **"View Applicants"** button on any posted job.
- A list of applicants for that job will be shown.
- For each applicant, you’ll see:
  - Name
  - Email
  - description
  - Application date
- Optionally, you can **Export** the list to CSV or Excel.

---

## 👨‍💻 Job Seeker Guide

### 🔹 Dashboard Features
Once logged in as a Job Seeker, you'll access the **Job Seeker Dashboard**.

#### 1. View Jobs
- Browse all available job listings posted by employers.
- Each listing shows:
  - Title, employer name, location, job type, and description.

#### 2. Search & Filter Jobs
- Use the search bar to filter jobs by:
  - Title, location, company name, etc.

#### 3. Apply for a Job
- Click **“Apply”** on the job listing.

- Click **Submit** to apply.

#### 4. Track Applications *(Will be implemented fully)*
- View your applied jobs and their statuses.

---

## 🔒 Security & Privacy
- All routes are protected.
- Employers cannot access Job Seeker dashboards and vice versa.
- Your account data and applications are secure.

---

## 🛠️ Tech Stack (for developer users)
- **Frontend:** React, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express.js, MongoDB
- **Auth:** JWT (JSON Web Token)
- **Deployment:** Vercel (Frontend), Render (Backend)
- **CI/CD:** GitHub Actions
- **Monitoring:** Sentry 