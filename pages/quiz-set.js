import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const QuizSet = () => {
  const router = useRouter();
  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);
  const [author, setAuthor] = useState([]);
  const [amount, setAmount] = useState([]);
  const [date, setDate] = useState([]);
  const [error, setError] = useState(null);

  const onGroupContainer1Click = useCallback(
    async () => {

      try {
        router.push("/quiz");
      } catch (error) {
        setError("เกิดข้อผิดพลาดในการดึงข้อมูลชุดคำถาม");
      }
    },
    [router]
  );

  const fetchQuizSets = useCallback(async () => {
    // เอาข้อมูลที่ได้ตรงนี้ไปใช้ในหน้า QuizSet แต่ต้องเปลี่ยนเป็นใช้ useEffect หน้า /quiz-set แทน?
    try {
      await axios
        .get(
          `https://oo-cu-quiz.onrender.com/quizSet/id/${localStorage.getItem("quizsetid")}`,
          { headers: { authorization: `${localStorage.getItem("token")}` } }
        )
        .then((response) => {
          setName(response.data.title)
          setDescription(response.data.description)
          setAuthor(response.data.createdBy)
          setAmount(response.data.quizzes.length)
          setDate(response.data.endDate)
          console.log(response.data);
        });
    } catch (error) {
      setError("เกิดข้อผิดพลาดในการดึงข้อมูลชุดคำถาม");
    }
  }, [router]);

  useEffect(() => {
    fetchQuizSets();
  }, [fetchQuizSets]);

  return (
    <div className="w-full relative bg-white h-[1024px] overflow-hidden text-left text-xl text-black font-inter">
      <div className="absolute top-[146px] left-[0px] bg-mistyrose-200 w-[1600px] h-[880px]" />
      <div className="absolute top-[214px] left-[950px] w-[200px] h-[200px] text-6xl">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro-100 w-[200px] h-[200px]" />
        <div className="absolute top-[75px] left-[75px] font-medium inline-block w-[61.6px] h-[36.2px]">
          img
        </div>
      </div>
      <div className="absolute top-[145.5px] left-[-0.5px] box-border w-[1600px] h-px border-t-[1px] border-solid border-black" />
      <img
        className="absolute top-[18px] left-[580px] w-[352px] h-[100px] object-cover"
        alt=""
        src="/cuquiz-logo-2@2x.png"
      />
      <div className="absolute top-[232px] left-[311px] text-6xl font-medium">
        {name}
      </div>
      <div className="absolute top-[278px] left-[311px] font-medium">
        {description}
      </div>
      <div className="absolute top-[318px] left-[311px] font-medium">
        จำนวนข้อ {amount}
      </div>
      <div className="absolute top-[358px] left-[311px] font-medium">
        คะแนน {amount}
        </div>
      <div className="absolute top-[398px] left-[311px] font-medium">
        ผู้สร้าง {author}
      </div>
      <div className="absolute top-[438px] left-[311px] font-medium">
        เวลาในการทำ {date}
      </div>
      <div
        className="absolute top-[478px] left-[604px] w-[300px] h-[69px] cursor-pointer text-9xl text-white"
        onClick={onGroupContainer1Click}
      >
        <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(4px)] rounded-xl bg-lightpink box-border w-[300px] h-[69px] overflow-hidden flex flex-row items-center justify-center py-[11px] px-[42px] border-[1px] border-solid border-white">
          <div className="relative font-medium">เริ่มทำแบบทดสอบ</div>
        </div>
      </div>
    </div>
  );
};

export default QuizSet;