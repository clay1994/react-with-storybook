import { render, screen } from '@testing-library/react';
import { SectionHeader } from '../components/SectionHeader/SectionHeader';
import React from 'react';

test('renders title', () => {
  render(<SectionHeader title="T"/>);
  expect(screen.getByText('T')).toBeInTheDocument();
});