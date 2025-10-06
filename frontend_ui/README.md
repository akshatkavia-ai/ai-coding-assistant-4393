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
- Override for non-local or custom deployments:
  - Set REACT_APP_BACKEND_URL to your backend URL (e.g., https://api.example.com)
  - Using a .env (recommended for local development):
    ```
    cd ai-coding-assistant-4393/frontend_ui
    cp .env.example .env
    # Edit .env and set:
    # REACT_APP_BACKEND_URL=http://localhost:3001
    ```
  - You must restart the dev server after changing .env for changes to take effect.

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

## Quick troubleshooting

Use the browser Network tab to inspect requests to /ask.

- Request fails with 400:
  - Likely input issue (e.g., empty prompt). The UI shows "Please enter a prompt."
- Request fails with 500:
  - Backend configuration issue; most commonly GOOGLE_API_KEY missing. See backend README to set/export the key.
- Request fails with 502:
  - Upstream Gemini error or network/timeouts. The app shows the backend-provided message when available.
- Request blocked by CORS:
  - Backend is permissive by default; if modified, ensure http://localhost:3000 is allowed in backend src/api/main.py.
- Frontend cannot reach backend (Network error/Failed to fetch):
  - Confirm backend is running on http://localhost:3001 and frontend on http://localhost:3000.
  - If using a custom backend, set REACT_APP_BACKEND_URL in ai-coding-assistant-4393/frontend_ui/.env and restart `npm start`.
- Port conflicts:
  - Free the port or change it; if backend port changes, update REACT_APP_BACKEND_URL.

## End-to-end check (cross-link)

- Backend: Follow ai-coding-assistant-4392/backend_api/README.md to set GOOGLE_API_KEY and run the server. Verify:
  - `curl http://localhost:3001/` returns `{ "message": "Healthy" }`
  - `curl -X POST http://localhost:3001/ask ...` returns `{ "output": "..." }`
- Frontend: Start this app, optionally set REACT_APP_BACKEND_URL, then:
  - Open http://localhost:3000
  - Submit a prompt; the output should render below
  - In the Network tab, POST http://localhost:3001/ask should return 200 with `{ "output": "..." }`

## Notes

- Keyboard shortcut: Ctrl/Cmd + Enter submits the prompt.
- No database is used; no DB configuration is required.
