import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Answer from "./Answer";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  return (
    <div>
      <p className="question">{currentQuestion.question}</p>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <Answer
            key={index}
            answerText={answer}
            index={index}
            selectedAnswer={quizState.selectedAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            onSelectAnswer={() =>
              dispatch({ type: "SELECT_ANSWER", payload: answer })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
