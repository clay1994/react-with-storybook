import { render, screen } from '@testing-library/react';
import { Section } from '../components/Section/Section';

test('renders children', () => {
  render(<Section>Hi</Section>);
  expect(screen.getByText('Hi')).toBeInTheDocument();
});