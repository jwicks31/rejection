import React from 'react';
import PropTypes from 'prop-types';
import './switch.styles.css';

class Switch extends React.Component {
  render() {
    const {
      on,
      className = '',
      onClick,
    } = this.props;
    const btnClassName = [
      className,
      'toggle-btn',
      on ? 'toggle-btn-on' : 'toggle-btn-off',
    ]
      .filter(Boolean)
      .join(' ');
    return (
      <div>
        <input
          className="toggle-input"
          type="checkbox"
          checked={on}
          onChange={() => {
            // changing is handled by clicking the button
          }}
        />
        <button
          className={btnClassName}
          aria-label="Toggle"
          onClick={onClick}
        />
      </div>
    );
  }
}

Switch.propTypes = {
  on: PropTypes.bool.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Switch.defaultProps = {
  className: '',
  onClick: '',
};

export default Switch;
