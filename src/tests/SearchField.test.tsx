import { render, screen, fireEvent } from '@testing-library/react';
import { SearchField } from '../components/SearchField/SearchField';

test('renders and updates', () => {
  const handle = jest.fn(); render(<SearchField value="" onChange={handle}/>);
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'a' } });
  expect(handle).toHaveBeenCalledWith('a');
});