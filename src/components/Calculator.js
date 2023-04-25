import './calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className="console">0</div>
      <div className="btn-group">
        <button type="button" id="ac">ac</button>
        <button type="button" id="plusMinus">{'\u00B1'}</button>
        <button type="button" id="percentage">{'\u0025'}</button>
        <button type="button" id="divide">{'\u00f7'}</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" id="multiply">{'\u2715'}</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" id="minus">{'\u2212'}</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" id="plus">{'\u002b'}</button>
        <button type="button" id="zero">0</button>
        <button type="button" id="dot">{'\u22c5'}</button>
        <button type="button" id="equal">{'\u003d'}</button>
      </div>
    </div>
  );
}

export default Calculator;
