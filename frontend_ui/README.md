# Frontend UI (React)

Minimalist React UI for the AI Coding Assistant. It sends prompts to the backend `/ask` endpoint and displays the AI response.

## Setup

- Copy the example env and adjust as needed:
  cp .env.example .env

- Install dependencies:
  npm install

- Start the app:
  npm start

The app will run at http://localhost:3000 and expects the backend to be available at http://localhost:3001 by default.

## Environment

- REACT_APP_BACKEND_URL=http://localhost:3001

If not set, the app uses http://localhost:3001 by default.

## Usage

1) Type your prompt into the textarea.
2) Click "Ask AI" (or press Ctrl/Cmd + Enter).
3) View the AI output in the code-styled area below.

## API Contract

POST {REACT_APP_BACKEND_URL}/ask
- Body: { "prompt": "..." }
- Success: { "output": "<string>" }
- Error: { "detail": "<string>" } or non-200 with message.

## Theme

- Application theme: Pure White minimalist
- Colors: 
  - background: #FFFFFF
  - surface: #F9FAFB
  - text: #111827
  - primary: #374151
  - secondary: #9CA3AF
