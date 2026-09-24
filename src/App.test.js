import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio identity', () => {
  render(<App />);
  expect(screen.getByText(/Software Engineer @ Amazon/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
});
