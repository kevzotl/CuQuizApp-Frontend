import { useRouter } from "next/router";
import QuizChoice1 from "./quiz-choice1.js";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Quizwrite from "./quiz-write";
import Modal from "./modal";

const Quiz = () => {
  const router = useRouter();
  const [quizzes, setQuizzes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchQuizSets = useCallback(async () => {
    try {
      const response = await axios.get(`https://oo-cu-quiz.onrender.com/quizSet/id/${localStorage.getItem("quizsetid")}`, {
        headers: { authorization: localStorage.getItem("token") }
      });
      setQuizzes(response.data.quizzes);
    } catch (error) {
      console.error("Error fetching quiz sets:", error);
    }
  }, []);

  useEffect(() => {
    fetchQuizSets();
  }, [fetchQuizSets]);

  const handleSubmitAnswers = async () => {
    try {
      const response = await axios.put(`https://oo-cu-quiz.onrender.com/answer/calculate/${localStorage.getItem("quizsetid")}`, {}, {
        headers: { authorization: localStorage.getItem("token") }
      });
      console.log("Answers submitted successfully:", response.data);
      // Redirect or perform other actions after submitting answers
      setIsModalOpen(false);
      router.push("/received-answer");
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  const handleUserResponseChange = async (questionId, quizSetId, response) => {
    try {
      const data = {
        questionId,
        quizSetId,
        answer: response
      };
      await axios.post("https://oo-cu-quiz.onrender.com/answer", data, { headers: { authorization: localStorage.getItem("token") } });
      console.log("Answer submitted successfully");
    } catch (error) {
      console.error("Error submitting answer:", error);
    }
  };

  return (
    <div className="w-full relative bg-white h-[1420px] overflow-hidden text-left text-9xl text-white font-inter">
      {/* Render quizzes */}
      {quizzes.map((quiz, index) => (
        quiz.choices.length === 0 ? (
          <Quizwrite
            key={quiz._id}
            question={quiz.title}
            topValue={305 + index * 250} // Adjust this value based on your layout
            leftValue={117}
            onChange={response => handleUserResponseChange(quiz._id, localStorage.getItem("quizsetid"), response)}
          />
        ) : (
          <QuizChoice1
            key={quiz._id}
            question={quiz.title}
            choices={quiz.choices}
            topValue={305 + index * 250} // Adjust this value based on your layout
            leftValue={117}
            onChange={response => handleUserResponseChange(quiz._id, localStorage.getItem("quizsetid"), response)}
          />
        )
      ))}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitAnswers}
      />
      {/* Button to submit answers */}
      <div
        className="absolute top-[1161px] left-[604px] w-[231px] h-[69px] cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(4px)] rounded-xl bg-lightpink box-border w-[231px] h-[69px] overflow-hidden flex flex-row items-center justify-center py-[11px] px-[42px] border-[1px] border-solid border-white">
          <div className="relative font-medium">ส่งคำตอบ</div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
