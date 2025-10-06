# Frontend UI

React frontend for the AI Coding Assistant. Sends prompts to the backend POST /ask and renders the AI output.

Ports:
- Frontend UI (local): http://localhost:3000
- Backend API (local):  http://localhost:3001

Preview note: Start the backend first on port 3001 with GOOGLE_API_KEY set, then start this frontend on port 3000.

## Quickstart

1) Ensure backend is running on http://localhost:3001 with GOOGLE_API_KEY set
   - See backend README at ai-coding-assistant-4392/backend_api/README.md
   - Quick checks:
     - `curl -s http://localhost:3001/ | jq .`
     - `curl -s -X POST http://localhost:3001/ask -H "Content-Type: application/json" -d '{"prompt":"hello"}' | jq .`

2) Start frontend on port 3000
```
cd ai-coding-assistant-4393/frontend_ui
cp .env.example .env   # optional; defaults to http://localhost:3001 if unset
# If needed, edit .env:
# REACT_APP_BACKEND_URL=http://localhost:3001
npm install
npm start
# open http://localhost:3000
```

3) Use the app
- Type a prompt and click "Ask AI" (or press Ctrl/Cmd + Enter).
- The UI calls POST {REACT_APP_BACKEND_URL}/ask with { "prompt": "..." }.
- Expected response: { "output": "<AI response text>" }.

## Environment variables

- REACT_APP_BACKEND_URL
  - Default when not set: http://localhost:3001
  - Set in .env:
    ```
    REACT_APP_BACKEND_URL=http://localhost:3001
    ```
  - After changing .env, stop and restart `npm start`.

Backend environment for reference:
- GOOGLE_API_KEY (required for the FastAPI backend)

## End-to-end checklist

- Backend running at http://localhost:3001
- GOOGLE_API_KEY is exported in backend shell
- Frontend running at http://localhost:3000
- Browser Network tab shows:
  - POST http://localhost:3001/ask returns 200 with { "output": "..." }
- UI displays the AI output without errors

Cross-link: See ai-coding-assistant-4392/backend_api/README.md for backend Quickstart, environment, and curl examples.

## Troubleshooting

- 400 on /ask:
  - Likely empty prompt. Enter text before submitting.
- 500 on /ask (Server configuration error):
  - Backend missing GOOGLE_API_KEY or not exported. Fix in backend environment.
- 502 on /ask (Upstream/timeouts):
  - Typically invalid/expired key or network issues. Check the error message.
- CORS error in console:
  - Backend is permissive by default. If changed, ensure http://localhost:3000 is allowed in backend src/api/main.py (CORSMiddleware).
- Network error / Failed to fetch:
  - Confirm backend is running at http://localhost:3001 and reachable.
  - If using a custom URL/port, set REACT_APP_BACKEND_URL in .env and restart the dev server.
- Port conflicts:
  - Free port 3000 or change the port. If backend port changes, update REACT_APP_BACKEND_URL in .env.

## Notes

- Keyboard shortcut: Ctrl/Cmd + Enter submits the prompt.
- No database is used; no DB configuration is required.
