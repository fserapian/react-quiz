import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Answer from "./Answer";

const Question = () => {
  const [quizState] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex]

  return (
    <div>
      <p className="question">{currentQuestion.question}</p>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <Answer key={index} answer={answer} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Question;
