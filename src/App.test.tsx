import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('it renders Notes properly', () => {
  render(<App />);
  const notes = screen.getByText(/Notes/i);
  expect(notes).toBeInTheDocument();
});
