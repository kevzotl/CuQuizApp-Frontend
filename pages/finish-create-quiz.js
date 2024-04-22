import { useCallback } from "react";
import { useRouter } from "next/router";

const FinishCreateQuiz = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative bg-white h-[1024px] overflow-hidden text-left text-9xl text-white font-inter">
      <div className="absolute top-[0px] left-[0px] bg-mistyrose-200 w-[1600px] h-[1024px]" />
      <div className="absolute top-[96px] left-[83px] rounded-55xl bg-white w-[1320px] h-[831px]" />
      <div
        className="absolute top-[279px] left-[604px] w-[300px] h-[69px] cursor-pointer"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[-20px] [backdrop-filter:blur(4px)] rounded-xl bg-lightpink box-border w-[300px] h-[69px] overflow-hidden flex flex-row items-center justify-center py-[11px] px-[42px] border-[1px] border-solid border-white">
          <div className="relative font-medium">กลับไปหน้าหลัก</div>
        </div>
      </div>
      <div className="absolute top-[163px] left-[538px] text-29xl text-black">
        สร้างควิซสำเร็จแล้ว
      </div>
    </div>
  );
};

export default FinishCreateQuiz;
