import React, { useState } from 'react';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * App
 * A minimalist interface to send a prompt to the backend /ask endpoint and render AI output.
 * - Uses REACT_APP_BACKEND_URL env var (defaults to http://localhost:3001)
 * - Handles loading, error, and output states
 */
function App() {
  // UI state
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // PUBLIC_INTERFACE
  async function handleAsk() {
    /**
     * Sends the prompt to the backend /ask endpoint and updates output/error state.
     */
    const baseUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';
    const url = `${baseUrl}/ask`;

    if (!prompt.trim()) {
      setError('Please enter a prompt.');
      return;
    }

    setLoading(true);
    setError('');
    setOutput('');

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
      });

      if (!res.ok) {
        // Use a cloned response to avoid consuming the original body
        const maybeJson = await safeParseJson(res);
        const message =
          (maybeJson && (maybeJson.detail || maybeJson.error || maybeJson.message)) ||
          `Request failed: ${res.status} ${res.statusText}`;
        throw new Error(message);
      }

      const data = await res.json().catch(() => ({}));
      // Expecting { output: string }
      const text =
        typeof data?.output === 'string'
          ? data.output
          : (typeof data === 'string' ? data : JSON.stringify(data, null, 2));
      setOutput(text || '');
    } catch (e) {
      const fallback =
        e && typeof e.message === 'string'
          ? e.message
          : 'Something went wrong while contacting the AI service.';
      setError(fallback);
    } finally {
      setLoading(false);
    }
  }

  // Helper to safely parse JSON without throwing
  async function safeParseJson(res) {
    try {
      // Clone the response so the original body can still be consumed later if needed
      const cloned = res.clone();
      return await cloned.json();
    } catch {
      return null;
    }
  }

  // Basic keyboard accessibility: Ctrl+Enter to submit
  function onKeyDown(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      if (!loading && prompt.trim()) {
        handleAsk();
      }
    }
  }

  return (
    <div className="app-wrap">
      <div className="container">
        <header className="header">
          <h1 className="title">AI Coding Assistant</h1>
          <p className="subtitle">Ask anything about code. Get helpful output below.</p>
        </header>

        <div className="card">
          <label htmlFor="prompt" className="label">Your prompt</label>
          <textarea
            id="prompt"
            className="textarea"
            placeholder="Describe what you want the AI to generate or explain..."
            rows={8}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={onKeyDown}
          />

          <div className="actions">
            <button
              className="btn"
              onClick={handleAsk}
              disabled={loading || !prompt.trim()}
              aria-busy={loading ? 'true' : 'false'}
            >
              {loading ? 'Thinking…' : 'Ask AI'}
            </button>
          </div>
        </div>

        {(error || output) && (
          <div className="card">
            <div className="label-row">
              <span className="label">{error ? 'Error' : 'AI Output'}</span>
            </div>

            {error ? (
              <div className="error">{error}</div>
            ) : (
              <pre className="code">
                <code>{output}</code>
              </pre>
            )}
          </div>
        )}

        <footer className="footer">
          <span className="hint">
            {/* Uses REACT_APP_BACKEND_URL, defaulting to localhost:3001 for local preview */}
            Backend: {process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001'}
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;
