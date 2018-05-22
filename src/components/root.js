import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import App from './pages/App/App';

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({
    person: PropTypes.string,
    score: PropTypes.number,
    question: PropTypes.string,
    response: PropTypes.string,
    timestamp: PropTypes.string,
  }).isRequired,
};

export default Root;
