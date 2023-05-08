import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Tests for Calculator component', () => {
  test('should render calculator component', () => {
    render(<Calculator />);

    const calculator = document.querySelector('.calculator');
    const p = screen.getByTestId('output');

    expect(calculator).toBeInTheDocument();
    expect(p).toBeInTheDocument();
    expect(p).toHaveTextContent('0');
  });

  test('should render all required buttons', () => {
    render(<Calculator />);

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(19);
  });

  test('should be able to calculate on clicks', async () => {
    render(<Calculator />);

    const p = screen.getByTestId('output');
    const operator = screen.getByText(/%/i);
    const number0 = screen.getByText(/1/i);
    const number1 = screen.getByText(/5/i);
    const number2 = screen.getByText(/7/i);
    const equal = screen.getByText(/=/i);

    expect(p).toBeInTheDocument();
    expect(operator).toBeInTheDocument();
    expect(number0).toBeInTheDocument();
    expect(number1).toBeInTheDocument();
    expect(number2).toBeInTheDocument();
    expect(equal).toBeInTheDocument();
    // 15 % 7
    fireEvent.click(number0);
    fireEvent.click(number1);
    fireEvent.click(operator);
    fireEvent.click(number2);
    fireEvent.click(equal);
    expect(p).toHaveTextContent('1');
  });
});
