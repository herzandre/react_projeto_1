import { render, screen } from '@testing-library/react';
import { Posts } from '.';
import { postsPropsMock } from './mock';

describe('<Posts />', () => {
  it('should render Posts correctly"', () => {
    render(<Posts {...postsPropsMock} />);

    expect(screen.getAllByRole('heading', { name: /title-test/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /title-test/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);

    expect(screen.getByRole('img', { name: /title-test 3/i })).toHaveAttribute('src', 'img/img3.jpg');
    expect(screen.getByRole('img', { name: /title-test 2/i })).toHaveAttribute('src', 'img/img2.jpg');
    expect(screen.getByRole('img', { name: /title-test 2/i })).toHaveAttribute('src', 'img/img2.jpg');
  });

  it('should not render posts', () => {
    render(<Posts />);

    expect(screen.queryByRole('heading', { name: /title/i })).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<Posts {...postsPropsMock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
