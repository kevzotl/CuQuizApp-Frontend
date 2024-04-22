import { useCallback } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onTextClick = useCallback(() => {
    router.push("/register");
  }, [router]);

  return (
    <div className="w-full relative bg-white h-[1024px] overflow-hidden text-left text-6xl text-black font-inter">
      <div className="absolute top-[146px] left-[0px] bg-mistyrose-200 w-[1600px] h-[880px]" />
      <div
        className="absolute top-[552px] left-[613px] w-[213px] h-[69px] cursor-pointer text-9xl text-white"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(4px)] rounded-xl bg-lightpink box-border w-[213px] h-[69px] overflow-hidden flex flex-row items-center justify-center py-[11px] px-[42px] border-[1px] border-solid border-white">
          <div className="relative font-medium">ล็อกอิน</div>
        </div>
      </div>
      <div className="absolute top-[145.5px] left-[-0.5px] box-border w-[1600px] h-px border-t-[1px] border-solid border-black" />
      <img
        className="absolute top-[18px] left-[580px] w-[352px] h-[100px] object-cover"
        alt=""
        src="/cuquiz-logo-2@2x.png"
      />
      <div className="absolute top-[230px] left-[444px] w-[672px] flex flex-col items-start justify-start gap-[18px]">
        <div className="relative font-medium z-[0]">ชื่อผู้ใช้</div>
        <div className="w-[632px] relative rounded-xl bg-gainsboro-200 box-border h-[71px] z-[1] border-[5px] border-solid border-lightpink" />
        <div className="w-[70px] absolute !m-[0] top-[71px] left-[24px] text-xl font-medium text-gray-200 inline-block z-[2]">
          ชื่อผู้ใช้
        </div>
      </div>
      <div className="absolute top-[370px] left-[444px] w-[672px] flex flex-col items-start justify-start gap-[18px]">
        <div className="relative font-medium z-[0]">รหัสผ่าน</div>
        <div className="w-[632px] relative rounded-xl bg-gainsboro-200 box-border h-[71px] z-[1] border-[5px] border-solid border-lightpink" />
        <div className="w-[70px] absolute !m-[0] top-[71px] left-[24px] text-xl font-medium text-gray-200 inline-block z-[2]">
          รหัสผ่าน
        </div>
      </div>
      <div
        className="absolute top-[684px] left-[657px] [text-decoration:underline] font-medium cursor-pointer"
        onClick={onTextClick}
      >
        สมัครสมาชิก
      </div>
    </div>
  );
};

export default Login;
