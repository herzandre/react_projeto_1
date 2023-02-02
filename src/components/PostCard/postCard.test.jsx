import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly"', () => {
    render(<PostCard {...props} />);

    expect(screen.getByAltText('title-test')).toBeInTheDocument();

    expect(screen.getByRole('img', { name: 'title-test' })).toHaveAttribute('src', 'img/img.png');

    expect(screen.getByRole('heading', { name: 'title-test 1' })).toBeInTheDocument();

    expect(screen.getByText('body-test')).toBeInTheDocument();
  });

  it('should match spanshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
