const Answer = ({
  answerText,
  index,
  onSelectAnswer,
  correctAnswer,
  selectedAnswer,
}) => {
  const letterMapping = ["A", "B", "C", "D"];

  const isCorrectAnswer = selectedAnswer && answerText === correctAnswer;
  const isWrongAnswer = selectedAnswer === answerText && answerText !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
  const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
  const disabledClass = selectedAnswer ? "disabled-answer" : "";

  return (
    <div
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => onSelectAnswer()}
    >
      <div className="answer-letter">{letterMapping[index]}</div>
      <div className="answer-text">{answerText}</div>
    </div>
  );
};

export default Answer;
