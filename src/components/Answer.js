const Answer = ({ answer, index }) => {
  const letterMapping = ['A', 'B', 'C', 'D'];

  return (
    <div className="answer">
      <div className="answer-letter">{letterMapping[index]}</div>
      <div className="answer-text">{answer}</div>
    </div>
  );
};

export default Answer;
