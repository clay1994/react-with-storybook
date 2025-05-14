import { render, screen } from '@testing-library/react';
import { SectionHeader } from '../components/SectionHeader/SectionHeader';

test('renders title', () => {
  render(<SectionHeader title="T"/>);
  expect(screen.getByText('T')).toBeInTheDocument();
});