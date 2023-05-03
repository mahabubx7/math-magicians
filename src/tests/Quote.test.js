import { render, screen } from '@testing-library/react';
import Quote from '../components/Quote';

describe('Tests for Quote component', () => {
  test('should render the Quote component', async () => {
    render(<Quote />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(screen.queryByText(/Error! Something went wrong!/i)).not.toBeInTheDocument();
    // expect(screen.queryByTestId('quote')).toBeInTheDocument();
    // await screen.findByTestId('quote');
    // (await waitFor(() => expect(screen.queryByRole('blockquote')))).toBeInTheDocument();
  });
});
