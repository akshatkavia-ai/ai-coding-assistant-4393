# AI Coding Assistant

A full-stack AI coding assistant with a minimalist React frontend and a FastAPI backend. The frontend sends prompts to the backend `/ask` endpoint and renders the AI output.

## Quick Start

1) Backend
- Ensure the backend API is running and exposes POST /ask at port 3001.
- The default local URL is http://localhost:3001

2) Frontend
- Go to the frontend directory:
  cd frontend_ui
- Create an environment file from the example:
  cp .env.example .env
- Optionally edit .env to point to your backend:
  REACT_APP_BACKEND_URL=http://localhost:3001
- Install dependencies:
  npm install
- Start the development server:
  npm start
- Open http://localhost:3000 in your browser.

Note: The frontend expects the backend /ask endpoint to return JSON in the form:
{ "output": "<string AI response>" }

## Environment

- REACT_APP_BACKEND_URL: The base URL of the backend API. Defaults to http://localhost:3001 when not set.

## UI

- Theme: Pure White minimalist
- Layout: Centered vertical layout with prompt textarea, an "Ask AI" button, and a code-styled output area beneath.
- States: Loading indicator on button, error banner on failure, code block output on success.

## Development

- Frontend workspace: ai-coding-assistant-4393/frontend_ui
- Backend workspace: ai-coding-assistant-4392/backend_api

Make sure to run both services during local development.