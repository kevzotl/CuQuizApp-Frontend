import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import QuizOnHome1 from "./quiz-on-home1";
import { useRouter } from "next/router";

const Homepage = () => {
  const router = useRouter();
  const [quizSets, setQuizSets] = useState([]);
  const [error, setError] = useState(null);

  const fetchQuizSets = useCallback(async () => {
    try {
      await axios.get("https://oo-cu-quiz.onrender.com/quizSet/").then((response) => {
        setQuizSets(response.data);
      });
    } catch (error) {
      setError("เกิดข้อผิดพลาดในการดึงข้อมูลชุดคำถาม");
    }
  }, []);
  
  const onFrameClick = useCallback(() => {
    router.push("/login");
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

  let topoffset = 214;
  let leftoffset = 130;
  let leftswitch = 1;


  let loginshow = "โปรดเข้าสู่ระบบ"
    // Check if token exists in local storage
    if (typeof localStorage !== 'undefined') {
      // Check if token exists in local storage
      const token = localStorage.getItem("token");
      if (token) {

          loginshow = "เข้าสู่ระบบแล้ว"
      }
  } else {
      console.warn("localStorage is not available.");
  }


  useEffect(() => {
    fetchQuizSets();
  }, [fetchQuizSets]);

  return (
    <div className="w-full relative bg-white h-[1263px] overflow-hidden text-left text-xl text-black font-inter">
      <img
        className="absolute top-[19px] left-[580px] w-[352px] h-[100px] object-cover"
        alt=""
        src="/cuquiz-logo-2@2x.png"
      />
      <div className="absolute top-[145px] left-[0px] bg-mistyrose-200 w-[1600px] h-[1118px]" />
      <div className="absolute top-[19px] left-[0px] w-[1440px] h-[1167px] overflow-hidden">
        <div className="absolute top-[350px] left-[83px] rounded-55xl bg-white w-[1320px] h-[836px]" />
        <div className="absolute top-[1079px] left-[557px] rounded-10xs bg-lightpink box-border w-[47px] h-[47px] flex flex-col items-end justify-center py-0 px-[18px] border-[1px] border-solid border-black">
          <div className="relative font-medium">1</div>
        </div>
        <img
          className="absolute top-[1079px] left-[492px] rounded-10xs w-[47px] h-[47px]"
          alt=""
          src="/frame-16.svg"
        />
        <img
          className="absolute top-[1079px] left-[900px] rounded-10xs w-[47px] h-[47px]"
          alt=""
          src="/frame-17.svg"
        />
        <div className="absolute top-[1079px] left-[628px] rounded-10xs bg-gainsboro-200 box-border w-[47px] h-[47px] flex flex-col items-center justify-center border-[1px] border-solid border-black">
          <div className="relative font-medium">2</div>
        </div>
        <div className="absolute top-[1079px] left-[696px] rounded-10xs bg-gainsboro-200 box-border w-[47px] h-[47px] flex flex-col items-center justify-center border-[1px] border-solid border-black">
          <div className="relative font-medium">3</div>
        </div>
        <div className="absolute top-[1079px] left-[764px] rounded-10xs bg-gainsboro-200 box-border w-[47px] h-[47px] flex flex-col items-center justify-center border-[1px] border-solid border-black">
          <div className="relative font-medium">...</div>
        </div>
        <div className="absolute top-[1079px] left-[832px] rounded-10xs bg-gainsboro-200 box-border w-[47px] h-[47px] flex flex-col items-center justify-center border-[1px] border-solid border-black">
          <div className="relative font-medium">13</div>
        </div>
        {quizSets.map((quizSet) => (
          leftswitch = (leftswitch+1)%2,
          leftoffset = leftswitch ? 730 : 130,
          topoffset = leftswitch ? topoffset : topoffset+200,
        <div key={quizSet._id}>
          <QuizOnHome1
          name={quizSet.title}
          description="description"
          author={quizSet.createdBy}
          topValue={topoffset}
          leftValue={leftoffset}
          quizsetid={quizSet._id}
        />
          {/* Render other details of quizSet */}
        </div>
      ))}


      </div>
      <div className="absolute top-[276px] left-[41px] w-[321px] h-[58px] flex flex-row items-center justify-start gap-[62px] text-29xl">
        <img className="w-[33px] relative h-[33px]" alt="" src="/star-1.svg" />
        <div className="relative">ควิซแนะนำ</div>
      </div>
      <div className="absolute top-[292px] left-[1100px] rounded-30xl bg-gray-100 box-border w-[297px] h-10 flex flex-row items-center justify-start py-0 px-[18px] gap-[13px] border-[1px] border-solid border-black">
        <div className="w-[21px] relative h-[21px]">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-100 box-border w-[13.6px] h-[13.5px] border-[1px] border-solid border-black" />
          <div className="absolute top-[11.3px] left-[9.6px] rounded-10xs bg-black w-[2.7px] h-[13.6px] [transform:_rotate(-43.6deg)] [transform-origin:0_0]" />
        </div>
        <div className="w-32 relative inline-block h-6 shrink-0">ค้นหา</div>
      </div>
      <div className="absolute top-[103px] left-[1350px] w-[151px] h-[33px] overflow-hidden flex flex-row items-start justify-end">
        <div className="w-[139px] relative h-12">
          <button
            className="cursor-pointer [border:none] py-0 pr-0 pl-[30px] bg-[transparent] absolute top-[0px] left-[0px] w-[139px] h-12 overflow-hidden flex flex-col items-center justify-start box-border"
            onClick={onFrameClick}
          >
            <button className="cursor-pointer [border:none] p-0 bg-mistyrose-100 w-[109px] relative rounded-2xl h-[33px]" />
            <div className="w-[103px] relative text-15xl font-inter text-black text-left inline-block mt-[-33px]">
              {loginshow}
            </div>
          </button>
          <img
            className="absolute top-[2px] left-[-4px] w-[34px] h-[46px]"
            alt=""
            src="/person-icon.svg"
          />
        </div>
      </div>
      <div className="absolute top-[146px] left-[0px] w-[1440px] h-[69px] flex flex-col items-center justify-start gap-[69px]">
        <div className="w-[1600px] relative box-border h-px border-t-[1px] border-solid border-black" />
        <div className="w-[1600px] relative box-border h-px border-t-[1px] border-solid border-black" />
      </div>
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
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[166px] left-[108px] w-[106px] h-[29px] overflow-hidden flex flex-col items-center justify-end">
        <div className="relative text-5xl [text-decoration:underline] font-inter text-black text-left">
          หน้าหลัก
        </div>
      </button>
    </div>
  );
};

export default Homepage;