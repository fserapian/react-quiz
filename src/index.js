import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Quiz from './components/Quiz';
import { QuizProvider } from './contexts/quiz';

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
     <Quiz />
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
