import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import QuizOnHome1 from "./quiz-on-atten";

const CheckInAttendantView = () => {
  const router = useRouter();
  const [quizSets, setQuizSets] = useState([]);
  const [error, setError] = useState(null);

  const getScoredQuizzes = useCallback(async () => {
    try {
      await axios
        .get(
          "https://oo-cu-quiz.onrender.com/quizSet/scored",
          {},
          { headers: { authorization: `${localStorage.getItem("token")}` } }
        )
        .then((response) => {
          setQuizSets(response.data);
        });
    } catch (error) {
      setError("เกิดข้อผิดพลาดในการดึงข้อมูลชุดคำถาม");
    }
  }, []);

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

  useEffect(() => {
    getScoredQuizzes();
  }, [getScoredQuizzes]);

  return (
    <div className="w-full relative bg-white h-[1128px] overflow-hidden text-left text-29xl text-black font-inter">
      <div className="absolute top-[146px] left-[0px] bg-mistyrose-200 w-[1600px] h-[982px]" />
      <div className="absolute top-[248px] left-[111px] w-[483px] h-[58px]">
        <div className="absolute top-[0px] left-[0px] inline-block w-[483px]">
          ควิซที่ได้รับคะแนนแล้ว
        </div>
      </div>
      <img
        className="absolute top-[18px] left-[580px] w-[352px] h-[100px] object-cover"
        alt=""
        src="/cuquiz-logo-2@2x.png"
      />
      <div className="absolute top-[360px] left-[83px] rounded-55xl bg-white w-[1320px] h-[715px]" />
      <div className="absolute top-[435px] left-[125px] rounded-30xl bg-gray-100 box-border w-[567px] h-[166px] border-[7px] border-solid border-lightpink" />
      <div className="absolute top-[435px] left-[751px] rounded-30xl bg-gray-100 box-border w-[567px] h-[166px] border-[7px] border-solid border-lightpink" />
      <div className="absolute top-[146px] left-[0px] w-[1440px] h-[69px] flex flex-col items-center justify-start gap-[69px]">
        <div className="w-[1600px] relative box-border h-px border-t-[1px] border-solid border-black" />
        <div className="w-[1600px] relative box-border h-px border-t-[1px] border-solid border-black" />
      </div>
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
      {quizSets.map((quizSet) => (
          leftswitch = (leftswitch+1)%2,
          leftoffset = leftswitch ? 730 : 130,
          topoffset = leftswitch ? topoffset : topoffset+200,
        <div key={quizSet._id}>
          <QuizOnAtten
          name={quizSet.title}
          description="description"
          author={quizSet.createdBy}
          topValue={topoffset}
          leftValue={leftoffset}
          quizsetid={quizSet._id}
          score={quizSet.score}    
          //date
        />
          {/* Render other details of quizSet */}
        </div>
      ))}
    </div>
  );
};

export default CheckInAttendantView;