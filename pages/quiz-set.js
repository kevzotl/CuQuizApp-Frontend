import { useCallback } from "react";
import { useRouter } from "next/router";

const QuizSet = () => {
  const router = useRouter();

  const onGroupContainer1Click = useCallback(() => {
    router.push("/quiz");
  }, [router]);

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
        ชื่อควิช
      </div>
      <div className="absolute top-[278px] left-[311px] font-medium">
        description
      </div>
      <div className="absolute top-[318px] left-[311px] font-medium">
        จำนวนข้อ
      </div>
      <div className="absolute top-[358px] left-[311px] font-medium">คะแนน</div>
      <div className="absolute top-[398px] left-[311px] font-medium">
        เวลาในการทำแบบทดสอบ
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
