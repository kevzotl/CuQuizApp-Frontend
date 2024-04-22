import { useCallback } from "react";
import { useRouter } from "next/router";

const CreateQuiz = () => {
  const router = useRouter();

  const onGroupButtonClick = useCallback(() => {
    router.push("/finish-create-quiz");
  }, [router]);

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
    <div className="w-full relative bg-white h-[1886px] overflow-hidden text-left text-6xl text-black font-inter">
      <div className="absolute top-[146px] left-[0px] bg-mistyrose-200 w-[1600px] h-[1740px]" />
      <div className="absolute top-[238px] left-[116px] w-[222px] h-[58px] text-29xl">
        <div className="absolute top-[0px] left-[0px] inline-block w-[222px]">
          สร้างควิซ
        </div>
      </div>
      <div className="absolute top-[145.5px] left-[-0.5px] box-border w-[1600px] h-px border-t-[1px] border-solid border-black" />
      <img
        className="absolute top-[19px] left-[580px] w-[352px] h-[100px] object-cover"
        alt=""
        src="/cuquiz-logo-2@2x.png"
      />
      <div className="absolute top-[350px] left-[83px] rounded-55xl bg-white w-[1320px] h-[1466px]" />
      <div className="absolute top-[878px] left-[153px] w-[668.4px] h-[333px]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro-100 w-[668.4px] h-[333px]" />
        <div className="absolute top-[117.3px] left-[228.9px] font-medium inline-block w-[206px] h-[60.3px]">
          upload image
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1677px] left-[674px] w-[231px] h-[69px]"
        onClick={onGroupButtonClick}
      >
        <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(4px)] rounded-xl bg-lightpink box-border w-[231px] h-[69px] overflow-hidden flex flex-row items-center justify-center py-[11px] px-[42px] border-[1px] border-solid border-white">
          <div className="relative text-9xl font-medium font-inter text-white text-left">
            สร้างควิซ
          </div>
        </div>
      </button>
      <div className="absolute top-[1559px] left-[148px] text-xl font-medium">
        +เพิ่มโจทย์แบบเลือกคำตอบ
      </div>
      <div className="absolute top-[1559px] left-[715px] text-xl font-medium">
        +เพิ่มโจทย์แบบเติมตัวเลือก
      </div>
      <div className="absolute top-[378px] left-[148px] w-[632px] flex flex-col items-start justify-start gap-[18px]">
        <div className="relative font-medium z-[0]">ชื่อควิซ</div>
        <div className="w-[632px] relative rounded-xl bg-gainsboro-200 box-border h-[71px] z-[1] border-[5px] border-solid border-lightpink" />
        <div className="w-18 absolute !m-[0] top-[71px] left-[24px] text-xl font-medium text-gray-200 inline-block z-[2]">
          ชื่อควิซ
        </div>
      </div>
      <div className="absolute top-[525px] left-[148px] w-[632px] flex flex-col items-start justify-start gap-[18px]">
        <div className="relative font-medium z-[0]">description</div>
        <div className="w-[632px] relative rounded-xl bg-gainsboro-200 box-border h-[71px] z-[1] border-[5px] border-solid border-lightpink" />
        <div className="w-[108px] absolute !m-[0] top-[71px] left-[24px] text-xl font-medium text-gray-200 inline-block z-[2]">
          description
        </div>
      </div>
      <div className="absolute top-[662px] left-[138px] h-[140px] flex flex-col items-start justify-start p-2.5 box-border text-xl text-gray-200">
        <div className="w-[632px] relative h-[119px]">
          <div className="absolute top-[0px] left-[0px] text-6xl font-medium text-black">
            เวลาสำหรับการทำ
          </div>
          <div className="absolute top-[48px] left-[0px] rounded-xl bg-gainsboro-200 box-border w-[107px] h-[71px] border-[5px] border-solid border-lightpink" />
          <div className="absolute top-[48px] left-[120px] rounded-xl bg-gainsboro-200 box-border w-[107px] h-[71px] border-[5px] border-solid border-lightpink" />
          <div className="absolute top-[71px] left-[20px] font-medium">
            ชั่วโมง
          </div>
          <div className="absolute top-[48px] left-[240px] rounded-xl bg-gainsboro-200 box-border w-[107px] h-[71px] border-[5px] border-solid border-lightpink" />
          <div className="absolute top-[71px] left-[270px] font-medium">
            วินาที
          </div>
          <div className="absolute top-[71px] left-[157px] font-medium">
            นาที
          </div>
        </div>
      </div>
      <div className="absolute top-[1252px] left-[148px] rounded-2xl bg-gray-100 box-border w-[782px] h-[279px] border-[2px] border-solid border-lightpink" />
      <div className="absolute top-[820px] left-[148px] font-medium">
        รูปภาพควิซ
      </div>
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
    </div>
  );
};

export default CreateQuiz;
