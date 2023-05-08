import operate from '../logic/operate';

describe('Unit tests for operate.js', () => {
  test('should return as string only', () => {
    expect(operate(1, 1, '-')).toStrictEqual('0');
  });

  test('should be able to operate minus', () => {
    expect(operate(3, 2, '-')).toStrictEqual('1');
  });

  test('should be able to operate plus', () => {
    expect(operate(3, 2, '+')).toStrictEqual('5');
  });

  test('should be able to operate multiply', () => {
    expect(operate(3, 2, 'x')).toStrictEqual('6');
  });

  test('should be able to operate divide', () => {
    expect(operate(6, 2, '÷')).toStrictEqual('3');
  });

  test('should be able to operate mod', () => {
    expect(operate(5, 2, '%')).toStrictEqual('1');
  });
});
