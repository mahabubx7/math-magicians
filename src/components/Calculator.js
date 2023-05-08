import './calculator.css';
import { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

const buttonKeys = [
  'AC', '+/-', '%', '÷',
  '7', '8', '9', 'x',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '=',
];

function Calculator() {
  const [obj, setObj] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleBtn = (btn) => setObj(calculate(obj, btn));

  const handleClassName = (btn) => {
    if (btn === '0') return 'zero';
    if (btn === '=') return 'equal';
    return '';
  };

  return (
    <div className="calculator">
      <div className="console">
        <p data-testid="output">
          {obj?.total}
          {' '}
          {obj?.operation}
          {' '}
          {obj?.next}
        </p>
      </div>
      <div className="btn-group">
        {buttonKeys.map((btn) => (
          <Button
            key={btn}
            className={handleClassName(btn)}
            content={btn}
            handle={() => handleBtn(btn)}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
