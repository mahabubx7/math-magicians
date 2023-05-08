import calculate from '../logic/calculate';

describe('Unit tests for calculate.js', () => {
  test('should return an object', () => {
    expect(typeof calculate({}, 'AC')).toStrictEqual('object');
  });

  test('should return object with "total: 0" by AC button', () => {
    expect(calculate({}, 'AC')).toStrictEqual({
      total: 0,
      next: null,
      operation: null,
    });
  });

  test('should return number by number buttons', () => {
    const obj = {
      total: 0,
      next: null,
      operation: null,
    };
    expect(calculate(obj, '7')).toStrictEqual({
      total: null,
      next: '7',
    });
  });

  test('should return calculated result on demand', () => {
    const obj = {
      total: 5,
      next: 7,
      operation: '+',
    };
    expect(calculate(obj, '=')).toStrictEqual({
      total: '12',
      next: null,
      operation: null,
    });
  });

  test('should return a number with fractional point', () => {
    const obj = {
      total: '3',
      next: null,
      operation: null,
    };
    expect(calculate(obj, '.')).toStrictEqual({
      total: '3',
      next: '3.',
      operation: null,
    });
  });
});
