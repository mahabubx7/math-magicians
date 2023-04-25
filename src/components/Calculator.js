import './calculator.css';
import PropTypes from 'prop-types';

function Calculator() {
  return (
    <div className="calculator">
      <div className="console">0</div>
      <div className="btn-group">
        <Button content="ac" />
        <Button content={'\u00B1'} />
        <Button content={'\u0025'} />
        <Button content={'\u00f7'} />
        <Button content="7" />
        <Button content="8" />
        <Button content="9" />
        <Button content={'\u2715'} />
        <Button content="4" />
        <Button content="5" />
        <Button content="6" />
        <Button content={'\u2212'} />
        <Button content="1" />
        <Button content="2" />
        <Button content="3" />
        <Button content={'\u002b'} />
        <Button content="0" className="zero" />
        <Button content={'\u22c5'} />
        <Button content={'\u003d'} className="equal" />
      </div>
    </div>
  );
}

function Button({ content, className }) {
  return (
    <button type="button" className={className}>{content}</button>
  );
}

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Calculator;
