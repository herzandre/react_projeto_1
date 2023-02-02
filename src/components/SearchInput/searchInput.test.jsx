import { render, screen } from '@testing-library/react';
import { SearchInput } from '.';
const { default: userEvent } = require('@testing-library/user-event');

describe('<SearchInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<SearchInput searchValue={'testando'} handleChange={fn} />);
    const input = screen.getByPlaceholderText(/Type your search/i);

    expect(input).toBeInTheDocument();
    expect(input.value).toBe('testando');
  });
  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<SearchInput handleChange={fn} />);

    const input = screen.getByPlaceholderText(/Type your search/i);
    const value = 'the value typed';

    userEvent.type(input, value);
    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<SearchInput searchValue={'testando'} handleChange={fn} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
