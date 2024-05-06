import { useState, useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const CreateQuiz = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [endDate, setEndDate] = useState("");
  const [quizzes, setQuizzes] = useState([]);
  const [error, setError] = useState(null);

  const onGroupButtonClick = useCallback(async () => {
    try {
      const title = "Today English";
      const description = "description";
      const endDate = new Date();
      const quizzes = [
        {
          title: "Cat คืออะไร",
          textAnswer: "แมว",
          score: 1,
        },
        {
          title: "Dog คืออะไร",
          choices: [
            { choiceText: "หมา", isCorrect: true },
            { choiceText: "แมว", isCorrect: false },
            { choiceText: "นก", isCorrect: false },
            { choiceText: "ไก้", isCorrect: false },
          ],
          score: 1,
        },
      ];

      await axios.post(
        "https://oo-cu-quiz.onrender.com/quizSet/",
        {
          title,
          description,
          endDate,
          quizzes,
        },
        { headers: { authorization: `${localStorage.getItem("token")}`} }
      );
      router.push("/finish-create-quiz");
    } catch (error) {
      setError("เกิดข้อผิดพลาดในการสร้างควิซ");
    }
  });

  const onFrameClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFrame1Click = useCallback(() => {
    router.push("/create-quiz");
  }, [router]);

  const onFrame2Click = useCallback(() => {
    router.push("/check-in-attendant-view");
  }, [router]);

  const onFrame3Click = useCallback(() => {
    router.push("/check-in-quiz-for-scoring");
  }, [router]);

  return (
    <div className="w-full relative bg-mistyrose-200 h-[1500px] overflow-hidden text-left text-6xl text-black font-inter">
      <div className="bg-white h-[146px]">
        <img
        className="absolute top-[19px] left-[580px] w-[352px] h-[100px] object-cover"
        alt=""
        src="/cuquiz-logo-2@2x.png"
        />
      </div>

      <banner className="absolute top-[146px] left-[0px] w-auto h-[69px] flex flex-col items-center justify-start gap-[69px]">
        <div className="w-[1600px] relative box-border h-px border-t-[1px] border-solid border-black" />
        <div className="w-[1600px] relative box-border h-px border-t-[1px] border-solid border-black" />
      </banner>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[166px] left-[108px] w-[106px] h-[29px] overflow-hidden flex flex-col items-center justify-end"
        onClick={onFrameClick}
      >
        <div className="relative text-5xl [text-decoration:underline] font-inter text-black text-left">
          หน้าหลัก
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[166px] left-[447px] w-[105px] h-[29px] overflow-hidden flex flex-col items-center justify-end"
        onClick={onFrame1Click}
      >
        <div className="relative text-5xl [text-decoration:underline] font-inter text-black text-left">
          สร้างควิซ
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[166px] left-[1199px] w-[182px] h-[29px] overflow-hidden flex flex-col items-center justify-end"
        onClick={onFrame2Click}
      >
        <div className="relative text-5xl [text-decoration:underline] font-inter text-black text-left">
          ตรวจสอบคะแนน
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[166px] left-[827px] w-[145px] h-[29px] overflow-hidden flex flex-col items-center justify-end"
        onClick={onFrame3Click}
      >
        <div className="relative text-5xl [text-decoration:underline] font-inter text-black text-left">
          ตรวจคำตอบ
        </div>
      </button>

      <div className="absolute top-[238px] left-[116px] w-[222px] h-[58px] text-29xl">
        <div className="absolute top-[0px] left-[0px] inline-block w-[222px]">
          สร้างควิซ
        </div>
      </div>

      <div className="absolute top-[350px] left-[83px] rounded-55xl bg-white w-[1320px] h-[1100px]" >
        
        <div className="absolute top-[40px] left-[60px] w-[632px] flex flex-col items-start justify-start gap-[18px]">
          <div className="relative font-medium z-[0]">ชื่อควิซ</div>
          <div className="w-[632px] relative rounded-xl bg-gainsboro-200 box-border h-[71px] z-[1] border-[5px] border-solid border-lightpink" />
          <div className="w-18 absolute !m-[0] top-[58px] left-[12px] text-xl font-medium text-gray-200 inline-block z-[2]">
            <input 
              type="text" placeholder="ชื่อควิซ" id="input"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="absolute top-[180px] left-[60px] w-[632px] flex flex-col items-start justify-start gap-[18px]">
          <div className="relative font-medium z-[0]">description</div>
            <div className="w-[632px] relative rounded-xl bg-gainsboro-200 box-border h-[71px] z-[1] border-[5px] border-solid border-lightpink" />
            <div className="w-[108px] absolute !m-[0] top-[58px] left-[12px] text-xl font-medium text-gray-200 inline-block z-[2]">
              <input 
                type="text" placeholder="description" id="input"
                onChange={(e) => setDescription(e.target.value)}
              />
          </div>
        </div>

        <div className="absolute top-[320px] left-[60px] w-[632px] flex flex-col items-start justify-start gap-[18px]">
          <div className="relative font-medium z-[0]">วันที่ปิด</div>
            <div className="w-[632px] relative rounded-xl bg-gainsboro-200 box-border h-[71px] z-[1] border-[5px] border-solid border-lightpink" />
            <div className="w-[108px] absolute !m-[0] top-[58px] left-[12px] text-xl font-medium text-gray-200 inline-block z-[2]">
              <input 
                type="text" placeholder="date" id="input"
                onChange={(e) => setEndDate(e.target.value)}
              />
          </div>
        </div>

        <div className="absolute top-[460px] left-[60px] font-medium">
          รูปภาพควิซ
          <div className="absolute top-[40px] left-[0px] bg-gainsboro-100 w-[668.4px] h-[333px] grid place-items-center" >
            upload image
          </div>
        </div>

        <button className="absolute top-[900px] left-[60px] text-xl font-medium" id="add">
          +เพิ่มโจทย์แบบเลือกคำตอบ
        </button>
        <button className="absolute top-[900px] left-[640px] text-xl font-medium" id="add">
          +เพิ่มโจทย์แบบเติมตัวเลือก
        </button>

        <div id="form-container">
          {/* Render the form questions */}
          {quizzes.map(({ question, id }) => (
            <div className="question" key={id}>
              <label className="question-label">{question}</label>
              <input type="text" className="answer" name="answer[]" />
            </div>
          ))}
        </div>




        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1000px] left-[535px] w-[231px] h-[69px]"
          onClick={onGroupButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(4px)] rounded-xl bg-lightpink box-border w-[231px] h-[69px] overflow-hidden flex flex-row items-center justify-center py-[11px] px-[42px] border-[1px] border-solid border-white">
            <div className="relative text-9xl font-medium font-inter text-white text-left">
              สร้างควิซ
            </div>
          </div>
        </button>

      </div>
      
      
      
      
      
      
      
      
      
    </div>
  );
};

export default CreateQuiz;