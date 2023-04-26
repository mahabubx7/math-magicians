import PropTypes from 'prop-types';

function Button({ content, className, handle }) {
  return (
    <button
      type="button"
      onClick={handle}
      className={className}
    >
      { content }
    </button>
  );
}

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
