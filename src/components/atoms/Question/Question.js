import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeQuestion } from '../../../reducers/questions';
import './Question.css';

const Question = ({
  id, questionCounter, person, score, question, response, timestamp, onClick,
}) => (
  <li className="question">
    <h2> Question #{questionCounter} </h2>
    <h4> Person Asked: {person}<br />
    Question: {question}<br />
    Response: {response}<br />
    Score: {score}<br />
      <span style={{ fontSize: '8px' }}> Timestamp: {timestamp}</span>
    </h4>
    <button id={id} onClick={onClick}>delete</button>
  </li>
);

Question.propTypes = {
  id: PropTypes.string.isRequired,
  questionCounter: PropTypes.number.isRequired,
  person: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onClick: (e) => {
    const { id } = e.target;
    dispatch(removeQuestion({ id }));
  },
});

export default connect(undefined, mapDispatchToProps)(Question);
