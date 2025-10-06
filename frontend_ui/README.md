# Frontend UI

This is the React frontend for the AI Coding Assistant.

## Environment

Create a .env file (or use the provided .env.example) with:

REACT_APP_BACKEND_URL=http://localhost:3001

If deploying or using a non-local backend, set REACT_APP_BACKEND_URL to the backend URL. The app defaults to http://localhost:3001 if not set.

## Running locally

- Frontend runs on port 3000
- Backend expected on port 3001
- If you change ports or hostnames, update REACT_APP_BACKEND_URL accordingly.

## Notes

- CORS is configured on the backend to allow local preview.
- Keyboard shortcut: Ctrl/Cmd + Enter submits the prompt.
- No database is used; no DB configuration is required.
