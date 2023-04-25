import PropTypes from 'prop-types';

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

export default Button;
