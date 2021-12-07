import Answer from "./Answer";

const Question = ({ questions }) => {
  return (
    <div>
      <p className="question">The text of the question</p>
      <div className="answers">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </div>
  );
};

export default Question;
