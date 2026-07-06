# Full-Stack Authentication & Dashboard Application

A full-stack web app with React/Vite frontend and Express/MongoDB backend.
The project includes user registration, login, a landing page, About page, and a dashboard UI.
Authentication is implemented on the server with password hashing via bcrypt.

## Project Overview

- Frontend: React + Vite + Tailwind CSS
- Backend: Express + Mongoose + MongoDB
- Auth: bcrypt password hashing, login endpoint, and protected dashboard UI pattern
- Dev ports: frontend on `http://localhost:5173`, backend on `http://localhost:5000`

## Workspace Structure

- `Backend/`
  - `App.js` — Express server and MongoDB connection
  - `routes/userRoute.js` — `/api/users` routes
  - `controllers/userController.js` — registration and login handlers
  - `models/users.js` — user schema and model
- `frontend/`
  - `src/App.jsx` — route definitions for `/`, `/login`, `/signup`, `/about`, `/dashboard`
  - `src/components/` — UI pages and dashboard components
  - `src/lib/api.js` — API helper library

## Backend Features

- POST `/api/users/register` — register a new user
- POST `/api/users/login` — authenticate an existing user
- GET `/api/users/me` — profile endpoint scaffolded in routes
- Password hashing with `bcrypt` before storing users
- CORS configured for `http://localhost:5173`

## Frontend Features

- Home page with navigation to About, Login, and Signup
- Signup form with client-side validation and password confirmation
- Login form with error handling and redirect to dashboard
- Dashboard layout with sidebar, stats, orders, wishlist, and recommendations

## Setup & Run

1. Backend

```bash
cd Backend
npm install
npm run dev
```

2. Frontend

```bash
cd frontend
npm install
npm run dev
```

3. Open in browser

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

## Example API Requests

Signup:

```bash
curl -X POST http://localhost:5000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{"userName":"Alice","userEmail":"alice@example.com","userPassword":"secret"}'
```

Login:

```bash
curl -X POST http://localhost:5000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"userEmail":"alice@example.com","userPassword":"secret"}'
```

## Notes

- The backend uses `PORT=5000` from `Backend/.env` or `Backend/.env.example`.
- The frontend currently posts to `http://localhost:5000/api/users/register` and `http://localhost:5000/api/users/login`.
- The dashboard route is client-side and does not yet enforce server-side authentication.

## Recommended Improvements

- Add JWT or session-based auth for protected API access
- Implement backend route protection for `/api/users/me`
- Add unit and integration tests for API endpoints
- Improve error messaging and validation feedback
- Add password reset and email verification flows

