# AI Coding Assistant

A full-stack AI coding assistant with a minimalist React frontend and a FastAPI backend. The frontend sends prompts to the backend `/ask` endpoint and renders the AI output.

Preview ports (local defaults):
- Frontend UI: http://localhost:3000
- Backend API: http://localhost:3001

Local preview note:
- Start the backend first on port 3001 (with GOOGLE_API_KEY set), then the frontend on port 3000. The frontend uses REACT_APP_BACKEND_URL or defaults to http://localhost:3001.

## Quick Start

1) Backend
- Ensure the backend API is running and exposes POST /ask at port 3001.
- The backend requires GOOGLE_API_KEY (see backend README).
- The default local URL is http://localhost:3001

2) Frontend
- Go to the frontend directory:
  ```
  cd ai-coding-assistant-4393/frontend_ui
  ```
- Create an environment file from the example (optional since default is localhost:3001):
  ```
  cp .env.example .env
  ```
- Optionally edit .env to point to your backend:
  ```
  REACT_APP_BACKEND_URL=http://localhost:3001
  ```
- Install dependencies:
  ```
  npm install
  ```
- Start the development server:
  ```
  npm start
  ```
- Open http://localhost:3000 in your browser.

Note: The frontend expects the backend /ask endpoint to return JSON in the form:
{ "output": "<string AI response>" }

## Environment

- Frontend: REACT_APP_BACKEND_URL (defaults to http://localhost:3001 when not set)
- Backend: GOOGLE_API_KEY (required)

## End-to-End (Manual)

- Start backend with GOOGLE_API_KEY set and reachable at http://localhost:3001
- Start frontend at http://localhost:3000
- Send a prompt and verify AI output appears
- Network tab should show POST http://localhost:3001/ask with body: { "prompt": "..." }

## Troubleshooting (quick)

- CORS error in console:
  - Backend CORS is permissive by default; if changed, ensure http://localhost:3000 is allowed in src/api/main.py.
- 500 error from backend:
  - Ensure GOOGLE_API_KEY is set and exported when running the backend.
- Frontend cannot reach backend:
  - Verify both ports are running. If the backend is not on port 3001, set REACT_APP_BACKEND_URL in ai-coding-assistant-4393/frontend_ui/.env.
- Port conflicts:
  - Free the port or change it; update REACT_APP_BACKEND_URL accordingly if backend port changes.

## UI

- Theme: Pure White minimalist
- Layout: Centered vertical layout with prompt textarea, an "Ask AI" button, and a code-styled output area beneath.
- States: Loading indicator on button, error banner on failure, code block output on success.

## Development

- Frontend workspace: ai-coding-assistant-4393/frontend_ui
- Backend workspace: ai-coding-assistant-4392/backend_api

Make sure to run both services during local development.

## No Database

This project does not use any database. No DB setup or credentials are required.