import { useCallback } from "react";
import { useRouter } from "next/router";

const ScoredAnswer = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/check-in-attendant-view");
  }, [router]);

  return (
    <div className="w-full relative bg-white h-[1420px] overflow-hidden text-left text-9xl text-white font-inter">
      <div className="absolute top-[0px] left-[0px] bg-mistyrose-200 w-[1600px] h-[1420px]" />
      <div className="absolute top-[208px] left-[83px] rounded-55xl bg-white w-[1320px] h-[1151px]" />
      <div
        className="absolute top-[1221px] left-[604px] w-[231px] h-[69px] cursor-pointer"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(4px)] rounded-xl bg-lightpink box-border w-[231px] h-[69px] overflow-hidden flex flex-row items-center justify-center py-[11px] px-[42px] border-[1px] border-solid border-white">
          <div className="relative font-medium">ย้อนกลับ</div>
        </div>
      </div>
      <div className="absolute top-[294px] left-[117px] rounded-2xl bg-gray-100 box-border w-[782px] h-[279px] border-[2px] border-solid border-lightpink" />
      <div className="absolute top-[294px] left-[992px] rounded-2xl bg-gray-100 box-border w-[300px] h-[279px] border-[2px] border-solid border-lightpink" />
      <div className="absolute top-[77px] left-[653px] text-29xl font-medium text-black">
        Name
      </div>
    </div>
  );
};

export default ScoredAnswer;
