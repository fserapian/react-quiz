import { createContext, useReducer } from "react";
// import questions from "../data";
import { normalizeQuestions, shuffleAnswers } from "../helpers";

const initialState = {
  currentQuestionIndex: 0,
  questions: [],
  showResults: false,
  answers: [],
  selectedAnswer: '',
  correctAnswersCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;

      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;

      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);

      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers,
        selectedAnswer: '',
      };
    }

    case "RESTART": {
      return initialState;
    }

    case "SELECT_ANSWER": {
      const correctAnswersCount = action.payload === state.questions[state.currentQuestionIndex].correctAnswer
        ? state.correctAnswersCount + 1
        : state.correctAnswersCount;
      return {
        ...state,
        selectedAnswer: action.payload,
        correctAnswersCount,
      };
    }

    case "LOADED_QUESTIONS": {
      const normalizedQuestions = normalizeQuestions(action.payload);

      return {
        ...state,
        questions: normalizedQuestions,
        answers: shuffleAnswers(normalizedQuestions[0]),
      };
    }

    default: {
      return state;
    }
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
