import React from 'react';
import PropTypes from 'prop-types';
// import Switch from '../../atoms/Switch/Switch';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
    this.toggle = this.toggle.bind(this);
    this.getStateAndHelpers = this.getStateAndHelpers.bind(this);
  }
  getStateAndHelpers() {
    return {
      on: this.state.on,
      toggle: this.toggle,
    };
  }
  toggle() {
    this.setState(({ on }) => ({ on: !on }));
  }
  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}

Toggle.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Toggle;
