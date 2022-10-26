import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const div = screen.getByText(/Hi there/i);
  expect(div).toBeInTheDocument();
});
