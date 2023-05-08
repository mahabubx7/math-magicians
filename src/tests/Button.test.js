import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('Tests for Button component', () => {
  test('should render the Button component', () => {
    const mockFn = jest.fn((x) => 7 + x);
    render(<Button content="7" handle={mockFn} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('7');
  });

  test('should be able to handle events', () => {
    let x = 0;
    const mockFn = jest.fn(() => {
      x += 1;
      return x;
    });
    render(<Button content="7" handle={mockFn} />);
    fireEvent.click(screen.getByRole('button'));
    expect(x).toBe(1);
  });

  test('should match the snapshot', () => {
    const mockFn = jest.fn((x) => 7 + x);
    render(<Button content="7" handle={mockFn} />);
    expect(screen.getByRole('button')).toMatchSnapshot('<button type="button" class="">7</button>');
  });
});
