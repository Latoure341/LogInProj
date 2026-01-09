#Full-Stack Authentication & Dashboard Application
===================================================

A full-stack web app showcasing a real-world user flow from landing page to authenticated dashboard.
Includes secure sign-up and sign-in with backend validation and database persistence.
Features protected routes, RESTful APIs, and token- or session-based authentication.
Built with modern frontend tools and a structured backend architecture.
Deployed and designed to reflect practical production patterns, not a demo project.

## Project Status & Notes

- Backend: Express + Mongoose (MongoDB). Running on `http://localhost:3000` by default.
- Frontend: Vite + React + Tailwind CSS. Runs on `http://localhost:5173` in dev.

Recent fixes applied:
- Fixed field-name mismatch in `Backend/controllers/userController.js` (normalized incoming password keys).
- Corrected CORS middleware usage in `Backend/server.js` to use the configured `corsOptions`.
- Updated `frontend/src/components/signup.jsx` to POST to `/api/users/signup` and send `{ userName, userEmail, userPassword }`.
- Fixed `frontend/src/components/login.jsx` to correctly manage form state, validation, and submit to `/api/users/login`.
- Enhanced `frontend/src/components/home.jsx` footer and added a full `frontend/src/components/about.jsx` page.
- Implemented password hashing with bcrypt (10 salt rounds) in signup and bcrypt.compare in login.

## Quickstart (development)

1. Start the backend

```bash
cd Backend
npm install
npm run dev
```

2. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

3. Test endpoints

Signup (example):
```bash
curl -X POST http://localhost:3000/api/users/signup \
	-H "Content-Type: application/json" \
	-d '{"userName":"Alice","userEmail":"alice@example.com","userPassword":"secret"}'
```

Login (example):
```bash
curl -X POST http://localhost:3000/api/users/login \
	-H "Content-Type: application/json" \
	-d '{"userEmail":"alice@example.com","userPassword":"secret"}'
```

## API Endpoints

- POST `/api/users/signup` — register new user. Body: `{ userName, userEmail, userPassword }`.
- POST `/api/users/login` — login. Body: `{ userEmail, userPassword }`.

## Security Features Implemented

- ✅ Password hashing with bcrypt (rounds: 10)
- ✅ CORS enabled with allowlist (localhost:5173)
- ✅ Input validation on signup/login endpoints

## Next recommended improvements

- Add proper authentication tokens (JWT) or session handling.
- Improve validation and error messages on both client and server.
- Add tests and CI for endpoints.
- Protected dashboard route (only accessible after login)
- Email verification before account activation
- Password reset flow

