import { useEffect, useState } from "react";
import axios from "axios";
import QuestionForm from "../questions";

export default function Home() {
  const [title, setTitle] = useState();
  const [topic, setTopic] = useState();
  const [data,setData]=useState({})
  const [startQuiz, setStartQuiz] = useState(false);

  async function fetchdetails() {
    try {
      const response = await fetch("/api");
      const result = await response.json();
      console.log(result);
      if (result) {
        setData(result);
        setTitle(result.title);
        setTopic(result.topic);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchdetails();
  }, []);
  return (
    <div>
      {startQuiz ? (
        <QuestionForm questions={data.questions} />
      ) : (
        <div className="rounded-[25px] flex flex-col w-126 h-48 justify-center bg-[#2b245a]">
          <div className="text-left pl-4 pb-4  text-white">
            <h2 className="text-gray-400 pb-4">Duration 15 min</h2>
            <h2>{title}</h2>
            <h2>Topic : {topic}</h2>
          </div>
          <div className="h-6">
            <button
              onClick={()=>setStartQuiz(true)}
              className="w-40 h-8  m-auto flex items-center justify-center"
            >
              Start now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
