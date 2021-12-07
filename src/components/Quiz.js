
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Question from "./Question";



const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log('quizState', quizState);

  return (
    <div className="quiz">
      <div>
        <div className="score">Question 1/8</div>
        <Question />
        <div className="next-button" onClick={() => dispatch({ type: 'NEXT_QUESTION' })}>Next</div>
      </div>
    </div>
  );
};

export default Quiz;
