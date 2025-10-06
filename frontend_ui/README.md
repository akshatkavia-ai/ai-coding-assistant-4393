# Frontend UI (React)

Minimalist React UI for the AI Coding Assistant. It sends prompts to the backend `/ask` endpoint and displays the AI response.

Preview ports (local defaults):
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## Setup

- Copy the example env and adjust as needed (optional since default is localhost:3001):
  ```
  cp .env.example .env
  ```
  By default, the app uses http://localhost:3001 if REACT_APP_BACKEND_URL is not set.

- Install dependencies:
  ```
  npm install
  ```

- Start the app:
  ```
  npm start
  ```
  The app will run at http://localhost:3000.

Ensure the backend is running at the configured URL and CORS allows the frontend origin (backend is permissive for preview).

## Environment

- REACT_APP_BACKEND_URL
  - Default: http://localhost:3001
  - Example: REACT_APP_BACKEND_URL=http://localhost:3001

## Usage

1) Type your prompt into the textarea.
2) Click "Ask AI" (or press Ctrl/Cmd + Enter).
3) View the AI output in the code-styled area below.

## API Contract

POST {REACT_APP_BACKEND_URL}/ask
- Body: { "prompt": "..." }
- Success: { "output": "<string>" }
- Error: { "detail": "<string>" } or non-200 with message.

## End-to-End Test (Manual)

1) Start the backend at http://localhost:3001 (see monorepo README).
2) Start the frontend at http://localhost:3000.
3) In the app, send a prompt and verify a response appears.
4) Inspect the network tab to confirm a POST to {REACT_APP_BACKEND_URL}/ask with { "prompt": "..." } succeeds.

Troubleshooting:
- If you see CORS errors, verify the backend CORS config allows http://localhost:3000 (it is permissive by default).
- If you see 500 errors, ensure the backend has GOOGLE_API_KEY set.

## Theme

- Application theme: Pure White minimalist
- Colors: 
  - background: #FFFFFF
  - surface: #F9FAFB
  - text: #111827
  - primary: #374151
  - secondary: #9CA3AF
