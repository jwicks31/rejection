import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addQuestion } from '../../../reducers/questions';
import './Form.css';

const Form = ({ onSubmit, onChange }) => (
  <form
    className="form-container"
    id="form"
    onSubmit={onSubmit}
  >
    <div className="formQuestions">
      <label htmlFor="askee">Person Asked:
        <input
          onChange={onChange}
          id="askee"
          type="text"
          required
        />
      </label>
      <div>
        <label htmlFor="rejected">Reject
          <input
            onChange={onChange}
            id="rejected"
            type="radio"
            name="Response"
            value="Rejected"
            required="required"
          />
        </label>
        <label htmlFor="accepted">Accept
          <input
            onChange={onChange}
            id="accepted"
            type="radio"
            name="Response"
            value="Accepted"
            required="required"
          />
        </label>
      </div>
      <label htmlFor="question">Question:
        <input
          onChange={onChange}
          label="Question:"
          id="question"
          type="text"
          required
        />
      </label>
    </div>
    <div className="formButton">
      <button type="submit">
    Submit
      </button>
    </div>
  </form>
);

const obj = {
  person: 'Anonymous',
  question: 'No Question',
  score: 0,
};

const onChange = (e) => {
  switch (e.target.id) {
    case 'askee': obj.person = e.target.value;
      break;
    case 'question': obj.question = e.target.value;
      break;
    case 'rejected': obj.score = 10;
      break;
    case 'accepted': obj.score = 1;
      break;
    default:
  }
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (e) => {
    e.preventDefault();
    dispatch(addQuestion(obj));
    e.target.reset();
  },
  onChange,
});

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

const FormWrapper = connect(undefined, mapDispatchToProps)(Form);

export default FormWrapper;
