# JobsParlour API Documentation

## Base URL

- **Backend (Render):** `https:https://jobsparlourmern.onrender.com/api/`
  

---

## Authentication

### Register

- **POST** `/api/auth/register`
- **Body:**
  ```json
  {
    "name": "Milton Mark",
    "email": "miltonnareblessed.com",
    "password": "password",
    "role": "employer" // or "jobseeker"
  }
  ```
- **Response:**
  - 201 Created: `{ "user": { ... }, "token": "..." }`
  - 400/409: Error message

---

### Login

- **POST** `/api/auth/login`
- **Body:**
  ```json
  {
    "email": "miltonnareblessed@gmail.com",
    "password": "password"
  }
  ```
- **Response:**
  - 200 OK: `{ "user": { ... }, "token": "..." }`
  - 401: Error message

---

## Jobs

### Get All Jobs

- **GET** `/api/jobs`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Response:**
  - 200 OK: `[ { job }, ... ]`

---

### Create Job

- **POST** `/api/jobs`
- **Headers:**
  - `Authorization: Bearer <employer-token>`
- **Body:**
  ```json
  {
    "title": "Software Engineer",
    "description": "MERN experienced...",
    "salary": 100000,
    "Type": "Full-time",
    "location": "Nairobi"
  }
  ```
- **Response:**
  - 201 Created: `{ job }`
  - 400/401: Error message

---

### Update Job

- **PUT** `/api/jobs/:id`
- **Headers:**
  - `Authorization: Bearer <employer-token>`
- **Body:** (same as Create)
- **Response:**
  - 200 OK: `{ job }`
  - 404/401: Error message

---

### Delete Job

- **DELETE** `/api/jobs/:id`
- **Headers:**
  - `Authorization: Bearer <employer-token>`
- **Response:**
  - 200 OK: `{ message: "Job deleted" }`
  - 404/401: Error message

---

### Apply to Job

- **POST** `/api/jobs/:id/apply`
- **Headers:**
  - `Authorization: Bearer <jobseeker-token>`
- **Response:**
  - 200 OK: `{ message: "Application submitted" }`
  - 400/401: Error message

---

## Applicants (Employer Only)

### Get Applicants for a Job

- **GET** `/api/jobs/:id/applicants`
- **Headers:**
  - `Authorization: Bearer <employer-token>`
- **Response:**
  - 200 OK: `[ { applicant }, ... ]`
  - 404/401: Error message

---

## Users

### Get Current User Profile

- **GET** `/api/auth/me`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Response:**
  - 200 OK: `{ user }`
  - 401: Error message

---

## Error Responses

All error responses are in the form:
```json
{ "error": "Error message here" }
```

---

## Notes

- All endpoints requiring authentication expect a JWT token in the `Authorization` header.
- Roles: `"employer"` and `"jobseeker"` have different permissions.
- For more details, see the  backend code in `server/routes/`, `server/controllers/`, and `server/middleware/`. 