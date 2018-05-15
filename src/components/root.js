import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router';

import App from './pages/App/App';

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.string.isRequired,
};

export default Root;
