import { render, screen } from '@testing-library/react';
import Hero from './components/Hero';

test('renders the portfolio hero', () => {
  render(<Hero />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/software engineer/i);
  expect(screen.getByText(/Seattle, WA/i)).toBeInTheDocument();
});
