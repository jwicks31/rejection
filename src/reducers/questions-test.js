import { describe } from 'riteway';
import { addQuestion, removeQuestion, getScore, reducer } from './questions';

const createState = (state = []) => [].concat(state);
const actions = [
  addQuestion({ score: 1 }),
  addQuestion({ score: 10 }),
  addQuestion({ score: 10 }),
];

describe('reducer()', async (should) => {
  const { assert } = should('return a default state');

  assert({
    given: 'no arguments',
    should: 'return a default state',
    actual: reducer(),
    expected: createState(),
  });

  {
    const question = addQuestion().payload;
    assert({
      given: 'no state and an add question action',
      should: 'return a new state with the question',
      actual: reducer(undefined, addQuestion(question)),
      expected: createState(question),
    });
  }

  {
    const question = addQuestion().payload;
    assert({
      given: 'no state and remove question action',
      should: 'return the default state',
      actual: reducer(undefined, removeQuestion(question)),
      expected: createState(),
    });
  }

  {
    const question = addQuestion().payload;
    const initialState = createState(question);
    assert({
      given: 'state and a remove question action',
      should: 'return the new state with the question removed',
      actual: reducer(initialState, removeQuestion(question)),
      expected: createState(),
    });
  }
});


describe('getScore()', async (should) => {
  const { assert } = should('return the current score');

  assert({
    given: 'initial state',
    should: 'return score of 0',
    actual: getScore(createState()),
    expected: 0,
  });

  {
    const finalState = actions.reduce(reducer, []);
    assert({
      given: 'state',
      should: 'return correct score',
      actual: getScore(finalState),
      expected: 21,
    });
  }
});
