import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {
  it('should render the button with the text "Load More Posts"', () => {
    const fn = jest.fn();
    render(<Button text="Load More Posts" onClick={fn} />);
    expect.assertions(1);

    const button = screen.getByRole('button', { name: /Load More Posts/i });
    expect(button).toBeInTheDocument();
  });

  it('Should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load More Posts" onClick={fn} />);

    const button = screen.getByRole('button', { name: /Load More Posts/i });
    userEvent.click(button);

    expect(fn).toHaveBeenCalled();
  });

  it('Should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load More Posts" onClick={fn} disabled={true} />);
    const button = screen.getByRole('button', { name: /Load More Posts/i });
    expect(button).toBeDisabled();
  });

  it('Should be enabled when enabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load More Posts" onClick={fn} disabled={false} />);
    const button = screen.getByRole('button', { name: /Load More Posts/i });
    expect(button).toBeEnabled();
  });

  it('Should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button onClick={fn} text="Load More Posts" disabled={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
