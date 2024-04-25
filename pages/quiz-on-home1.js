import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const QuizOnHome1 = ({ name, description, author, topValue, leftValue, quizsetid }) => {
  const router = useRouter();

  const onFrameClick = useCallback(() => {
    localStorage.setItem("quizsetid", quizsetid);
    router.push("/quiz-set");
  }, [router]);

  // ใช้ตอนกดเลือก QuizSet ที่ต้องการดูรายละเอียด
  // ไม่แน่ใจว่าใช้หน้านี้ หรือใช้หน้า /quiz-set
  // ตอนทำ quiz ทีละข้อก็ใช้ข้อมูลอันนี้เหมือนกัน
  const onQuizSetClick = useCallback(
    async () => {

      try {
        localStorage.setItem("quizsetid", quizsetid);
        router.push("/quiz-set");
      } catch (error) {
        setError("เกิดข้อผิดพลาดในการดึงข้อมูลชุดคำถาม");
      }
    },
    [router]
  );

  let testtoken = localStorage.getItem("token");

  return (
    <button
      className="cursor-pointer absolute rounded-30xl box-border w-[567px] h-[184px] overflow-hidden flex flex-row items-center justify-start pt-7 px-[33px] pb-[27px] gap-[34px] text-left text-6xl text-black font-inter border-[7px] border-solid border-lightpink"
      style={{ top: `${topValue}px`, left: `${leftValue}px` }}
      onClick={onQuizSetClick}
    >
      <div className="w-[146px] bg-gainsboro-100 h-[105px] flex flex-col items-end justify-start py-[37px] px-[18px] box-border">
        <div className="w-[45px] relative font-medium inline-block h-[19px] shrink-0">
          img
        </div>
      </div>
      <div className="w-[108px] relative h-[129px] overflow-hidden shrink-0 text-xl">
      <div className="absolute top-[0px] left-[0px] font-medium">{name}</div>
        <div className="absolute top-[30px] left-[0px] font-medium inline-block w-[1400px] h-[75px]">
          {description}
        </div>
        <div className="absolute top-[105px] left-[0px] font-medium">
          {author}
        </div>
      </div>
    </button>
  );
};

export default QuizOnHome1;
