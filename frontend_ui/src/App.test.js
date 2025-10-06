import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title and button', () => {
  render(<App />);
  expect(screen.getByText(/AI Coding Assistant/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Ask AI/i })).toBeInTheDocument();
});
