import './calculator.css';
import { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

function Calculator() {
  const [ans, setAns] = useState(0);
  const updateAns = (result) => setAns(result);

  return (
    <div className="calculator">
      <div className="console">{ans}</div>
      <div className="btn-group">
        <Button content="ac" handle={() => updateAns(0)} />
        <Button content={'\u00B1'} handle={() => calculate({}, 'AC')} />
        <Button content={'\u0025'} handle={() => calculate({}, 'AC')} />
        <Button content={'\u00f7'} handle={() => calculate({}, 'AC')} />
        <Button content="7" handle={() => calculate({}, 'AC')} />
        <Button content="8" handle={() => calculate({}, 'AC')} />
        <Button content="9" handle={() => calculate({}, 'AC')} />
        <Button content={'\u2715'} handle={() => calculate({}, 'AC')} />
        <Button content="4" handle={() => calculate({}, 'AC')} />
        <Button content="5" handle={() => calculate({}, 'AC')} />
        <Button content="6" handle={() => calculate({}, 'AC')} />
        <Button content={'\u2212'} handle={() => calculate({}, 'AC')} />
        <Button content="1" handle={() => calculate({}, 'AC')} />
        <Button content="2" handle={() => calculate({}, 'AC')} />
        <Button content="3" handle={() => calculate({}, 'AC')} />
        <Button content={'\u002b'} handle={() => calculate({}, 'AC')} />
        <Button content="0" className="zero" handle={() => calculate({}, 'AC')} />
        <Button content={'\u22c5'} handle={() => calculate({}, 'AC')} />
        <Button content={'\u003d'} className="equal" handle={() => calculate({}, 'AC')} />
      </div>
    </div>
  );
}

export default Calculator;
