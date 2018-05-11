import React from 'react';
import PropTypes from 'prop-types';
import Input from 'muicss/lib/react/input';
import TextArea from 'muicss/lib/react/textarea';
import { connect } from 'react-redux';
import { addQuestion } from '../../../reducers/questions';
import './Form.css';


const Form = ({ dispatch }) => {
  let askee;
  let question;
  let reject;
  let accept;
  const REJECTED = 10;
  const ACCEPTED = 1;
  const UNANSWERED = 0;

  return (
    <form
      className="form-container"
      id="form"
      onSubmit={(e) => {
        e.preventDefault();
        if (!askee.value.trim()) {
          return;
        }
        const obj = {
          person: askee.value,
          question: question.value,
          score: reject.checked ? REJECTED : accept.checked ? ACCEPTED : UNANSWERED,
          response: reject.checked ? reject.value : accept.checked ? accept.value : 'UNANSWERED',
        };
        dispatch(addQuestion(obj));
        askee.value = '';
        question.value = '';
        reject.checked = false;
        accept.checked = false;
      }}
    >
      <div className="formQuestions">
        <Input
          className="questoin-person"
          label="Person Asked:"
          id="askee"
          type="text"
          name="Askee"
          floatingLabel
          ref={(node) => {
            askee = node.controlEl;
          }}
        />
        <div>
          <label htmlFor="rejected">Reject
            <input
              id="rejected"
              type="radio"
              name="Response"
              value="Rejected"
              required="required"
              ref={(node) => {
                    reject = node;
                  }}
            />
          </label>
          <label htmlFor="accepted">Accept
            <input
              id="accepted"
              type="radio"
              name="Response"
              value="Accepted"
              required="required"
              ref={(node) => {
                      accept = node;
                    }}
            />
          </label>
        </div>
        <TextArea
          className="questoin-question"
          label="Question:"
          floatingLabel
          id="question"
          type="text"
          name="Question"
          rows="10"
          ref={(node) => {
            question = node.controlEl;
          }}
        />
      </div>
      <div className="formButton">
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const connectForm = connect()(Form);
export default connectForm;
