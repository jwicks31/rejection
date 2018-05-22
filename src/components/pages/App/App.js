import React from 'react';
import { connect } from 'react-redux';
import QuestonList from '../../molecules/QuestionList/QuestionList';
import Form from '../../molecules/Form/Form';
import Score from '../../molecules/Score/Score';
import './App.css';

const App = () => (
  <div className="App">
    <h1 className="App-title">Rejection App</h1>
    <Score />
    <Form />
    <QuestonList />
  </div>
);


export default connect()(App);
