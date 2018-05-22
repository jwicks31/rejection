import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addQuestion } from '../../../reducers/questions';
import './Form.css';

const Form = ({ onSubmit }) => (
  <form
    className="form-container"
    id="form"
    onSubmit={onSubmit}
  >
    <div className="formQuestions">
      <label htmlFor="askee">Person Asked:
        <input
          id="askee"
          type="text"
        />
      </label>
      <div>
        <label htmlFor="rejected">Reject
          <input
            id="rejected"
            type="radio"
            name="Response"
            value="Rejected"
            required="required"
          />
        </label>
        <label htmlFor="accepted">Accept
          <input
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
          label="Question:"
          id="question"
          type="text"
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

const mapDispatchToProps = dispatch => ({
  onSubmit: (e) => {
    e.preventDefault();
    console.log(e.target);
    dispatch(addQuestion());
  },
});

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const FormWrapper = connect(undefined, mapDispatchToProps)(Form);

export default FormWrapper;
