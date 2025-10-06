# Frontend UI

This is the React frontend for the AI Coding Assistant.

Preview ports (local defaults):
- Frontend UI: http://localhost:3000
- Backend API: http://localhost:3001

Local preview note:
- Start the backend first (port 3001) with GOOGLE_API_KEY set, then start the frontend (port 3000). The frontend uses REACT_APP_BACKEND_URL or defaults to http://localhost:3001.

## Environment

Create a .env file (or use the provided .env.example) with:

REACT_APP_BACKEND_URL=http://localhost:3001

- If deploying or using a non-local backend, set REACT_APP_BACKEND_URL to the backend URL.
- If not set, the app defaults to http://localhost:3001.

## Running locally

- Frontend runs on port 3000
- Backend expected on port 3001
- If you change ports or hostnames, update REACT_APP_BACKEND_URL accordingly.

Steps:
```
cd ai-coding-assistant-4393/frontend_ui
cp .env.example .env    # optional; default is http://localhost:3001
npm install
npm start
# then visit http://localhost:3000
```

## Troubleshooting (quick)

- CORS error in the browser console:
  - Backend CORS is permissive by default; if modified, allow http://localhost:3000 in src/api/main.py.
- 500 error when calling /ask:
  - The backend likely lacks GOOGLE_API_KEY; set/export it in ai-coding-assistant-4392/backend_api/.env and export with `export $(cat .env | xargs)`.
- Frontend cannot reach backend:
  - Confirm backend is running on port 3001, or set REACT_APP_BACKEND_URL to the actual backend URL.

## Notes

- Keyboard shortcut: Ctrl/Cmd + Enter submits the prompt.
- No database is used; no DB configuration is required.
