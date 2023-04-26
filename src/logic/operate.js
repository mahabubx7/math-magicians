import Big from 'big.js';

export default function operate(num1, num2, operation) {
  const one = Big(num1);
  const two = Big(num2);

  if (operation === '-') {
    return one.minus(two).toString();
  }

  if (operation === '+') {
    return one.plus(two).toString();
  }

  if (operation === 'x') {
    return one.times(two).toString();
  }

  if (operation === '÷') {
    try {
      return one.div(two).toString();
    } catch (err) {
      return 'Can\'t divide by 0';
    }
  }

  if (operation === '%') {
    try {
      return one.mod(two).toString();
    } catch (err) {
      return 'Can\'t find modulo as can\'t divide by 0';
    }
  }

  throw Error(`Unknown operation '${operation}'`);
}
