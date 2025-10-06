# Frontend UI

This is the React frontend for the AI Coding Assistant.

Preview ports (local defaults):
- Frontend UI: http://localhost:3000
- Backend API: http://localhost:3001

Local preview note:
- Start the backend first (port 3001) with GOOGLE_API_KEY set, then start the frontend (port 3000). The frontend uses REACT_APP_BACKEND_URL or defaults to http://localhost:3001.

## Environment

The frontend targets the backend at REACT_APP_BACKEND_URL.

- Default (if not set): http://localhost:3001
- To set via .env (recommended for local development):
  ```
  cd ai-coding-assistant-4393/frontend_ui
  cp .env.example .env
  # Edit .env and set:
  # REACT_APP_BACKEND_URL=http://localhost:3001
  ```
- When deploying or using a non-local backend, set REACT_APP_BACKEND_URL to that backend's URL.

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

The app expects the backend /ask endpoint to return JSON:
```
{ "output": "<AI response text>" }
```

## Troubleshooting (quick)

- CORS error in the browser console:
  - Backend CORS is permissive by default; if modified, allow http://localhost:3000 in backend src/api/main.py.
- 500 error when calling /ask:
  - The backend likely lacks GOOGLE_API_KEY; set/export it in ai-coding-assistant-4392/backend_api/.env and `export $(cat .env | xargs)`.
- Frontend cannot reach backend:
  - Confirm backend is running on http://localhost:3001 and frontend on http://localhost:3000.
  - If the backend uses a different host/port, set REACT_APP_BACKEND_URL in ai-coding-assistant-4393/frontend_ui/.env.
- Port conflicts:
  - Free the port or change it; if the backend port changes, update REACT_APP_BACKEND_URL.

## Notes

- Keyboard shortcut: Ctrl/Cmd + Enter submits the prompt.
- No database is used; no DB configuration is required.
