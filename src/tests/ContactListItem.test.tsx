import { render, screen } from '@testing-library/react';
import { ContactListItem } from '../components/ContactListItem/ContactListItem';

test('renders name and email', () => {
  render(<ContactListItem name="N" email="e@e.com"/>);
  expect(screen.getByText('N')).toBeInTheDocument();
  expect(screen.getByText('e@e.com')).toBeInTheDocument();
});