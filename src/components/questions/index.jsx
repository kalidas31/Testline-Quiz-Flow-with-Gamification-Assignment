import { useEffect, useState } from "react";
import NoOfQuestionsViewed from "../noofquestionsviewed";
import IsCorrectAnswer from "../showcorrectanswer";
export default function QuestionForm({ questions }) {
  const [count, setCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctanswers, setcorrectansers] = useState(0);
  const [wronganswers, setwronganswers] = useState(0);

  function handleCorrect(answer, index) {
    setShowAnswer(true);
    console.log(answer);
    setSelectedIndex(index);
    setIsCorrect(answer);
    if (answer) {
      setcorrectansers((prev) => prev + 1);
      setScore((prev) => prev + 4);
    } else setwronganswers((prev) => prev + 1);
    console.log(score);
  }

  useEffect(() => {
    console.log(count);
    setShowAnswer(false)
  }, [count]);
  return (
    <div className="h-[550px] w-[600px] rounded-[25px] flex flex-col justify-center bg-[#2b245a]">
      {questions && questions.length > count ? (
        <div>
          <div className="bg-white h-24 font-bold m-8 rounded-[25px] flex items-center">
            <h2 className="p-4">{questions[count].description}</h2>
          </div>
          {questions[count].options.map((option, index) => (
            <div className="p-2 ml-8 flex justify-start " key={option.id}>
              <button
                className={`w-72 h-10 flex justify-start items-center ${
                  selectedIndex === option.id
                    ? option.is_correct
                      ? "text-green-400"
                      : "text-red-400"
                    : ""
                }`}
                onClick={() => {
                  handleCorrect(option.is_correct, option.id);
                }}
              >
                {option.description}
              </button>
            </div>
          ))}
          <div className="flex justify-between p-4">
            {showAnswer ? (
              <IsCorrectAnswer iscorrect={isCorrect} />
            ) : (
              <div></div>
            )}

            <NoOfQuestionsViewed count={count} length={questions.length} />
            {count < questions.length - 1 ? (
              <div>
                <button onClick={() => setCount(count + 1)}>Next</button>
              </div>
            ) : (
              <div>
                <button onClick={() => setCount(count + 1)}>submit</button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="w-72 h-36 font-bold text-white m-auto flex flex-col justify-center items-center bg-green-600 rounded-[25px] ">
            <p>Congrats you have successfully completed your exam</p>
            <h2 className="">Total Score : {score}</h2>
          </div>
          <div className="flex justify-center items-center">
          <div className="bg-white rounded-[25px] w-36 h-24 font-bold flex flex-col justify-center items-center m-4">
            <p>Questions Attempted :</p>
            <h2>{wronganswers+correctanswers}/{count}</h2>
          </div>
          <div className="bg-white rounded-[25px] w-36 h-24 font-bold flex flex-col justify-center items-center m-4">
            <p>Correct Answers :</p>
            <h2>{correctanswers}/{count}</h2>
          </div>
          <div className="bg-white rounded-[25px] w-36 h-24 font-bold flex flex-col justify-center items-center m-4">
            <p>Wrong Answers :</p>
            <h2>{wronganswers}/{count}</h2>
          </div>
          </div>
          
        </div>
      )}
    </div>
  );
}
