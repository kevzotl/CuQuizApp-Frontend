import { useCallback, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onGroupContainerClick = useCallback(async () => {
    try {
      // เอาออกด้วย
      //const username = "username2";
      //const password = "password2";
      //const repassword = "password2";
      //const firstName = "firstName";
      //const lastName = "lastName";

      await axios.post("https://oo-cu-quiz.onrender.com/user/signup", {
        username,
        password,
        repassword,
        firstName,
        lastName,
      }
    ).then((response) => {
        if (response.data === "มีชื่อผู้ใช้นี้แล้ว") {
          alert("มีชื่อผู้ใช้นี้แล้ว");
          return;
        }
        localStorage.setItem("token", response.data.access_token);
        router.push("/");
      });
    } catch (error) {
      setError("เกิดข้อผิดพลาดในการสมัครสมาชิก");
    }
  });

  const onTextClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  return (
    <div className="w-full relative bg-white h-[1024px] overflow-hidden text-left text-6xl text-black font-inter">
      <div className="absolute top-[146px] left-[0px] bg-mistyrose-200 w-[1600px] h-[880px]" />
      <div className="absolute top-[145.5px] left-[-0.5px] box-border w-[1600px] h-px border-t-[1px] border-solid border-black" />
      <img
        className="absolute top-[18px] left-[580px] w-[352px] h-[100px] object-cover"
        alt=""
        src="/cuquiz-logo-2@2x.png"
      />

      <div className="absolute top-[170px] left-[294px] w-[452px] flex flex-col items-start justify-start gap-[18px]">
        <div className="relative font-medium z-[0]">ชื่อ</div>
        <div className="w-[452px] relative rounded-xl bg-gainsboro-200 box-border h-[71px] z-[1] border-[5px] border-solid border-lightpink" />
        <div className="w-[70px] absolute !m-[0] top-[58px] left-[12px] text-xl font-medium text-gray-200 inline-block z-[2]">
          <input type="text" placeholder="ชื่อ" id="Ninput"
          onChange={(e)=>setFirstName(e.target.value)}
          />
        </div>
      </div>
      <div className="absolute top-[170px] left-[804px] w-[452px] flex flex-col items-start justify-start gap-[18px]">
        <div className="relative font-medium z-[0]">นามสกุล</div>
        <div className="w-[452px] relative rounded-xl bg-gainsboro-200 box-border h-[71px] z-[1] border-[5px] border-solid border-lightpink" />
        <div className="w-[70px] absolute !m-[0] top-[58px] left-[12px] text-xl font-medium text-gray-200 inline-block z-[2]">
          <input type="text" placeholder="นามสกุล" id="Ninput"
          onChange={(e)=>setLastName(e.target.value)}
          />
        </div>
      </div>

      <div className="absolute top-[310px] left-[444px] w-[632px] flex flex-col items-start justify-start gap-[18px]">
        <div className="relative font-medium z-[0]">ชื่อผู้ใช้</div>
        <div className="w-[632px] relative rounded-xl bg-gainsboro-200 box-border h-[71px] z-[1] border-[5px] border-solid border-lightpink" />
        <div className="w-[70px] absolute !m-[0] top-[58px] left-[12px] text-xl font-medium text-gray-200 inline-block z-[2]">
          <input type="text" placeholder="ชื่อผู้ใช้" id="input"
          onChange={(e)=>setUsername(e.target.value)}
          />
        </div>
      </div>
      <div className="absolute top-[450px] left-[444px] w-[632px] flex flex-col items-start justify-start gap-[18px]">
        <div className="relative font-medium z-[0]">รหัสผ่าน</div>
        <div className="w-[632px] relative rounded-xl bg-gainsboro-200 box-border h-[71px] z-[1] border-[5px] border-solid border-lightpink" />
        <div className="input-box w-[70px] absolute !m-[0] top-[58px] left-[12px] text-xl font-medium text-gray-200 inline-block z-[2]">
          <input type="password" placeholder="รหัสผ่าน" id="input"
          onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="absolute top-[590px] left-[444px] w-[632px] flex flex-col items-start justify-start gap-[18px]">
        <div className="relative font-medium z-[0]">ยืนยันรหัสผ่าน</div>
        <div className="w-[632px] relative rounded-xl bg-gainsboro-200 box-border h-[71px] z-[1] border-[5px] border-solid border-lightpink" />
        <div className="w-[70px] absolute !m-[0] top-[58px] left-[12px] text-xl font-medium text-gray-200 inline-block z-[2]">
          <input type="password" placeholder="รหัสผ่าน" id="input"
            onChange={(e)=>setRepassword(e.target.value)}
          />
        </div>
      </div>
      <div
        className="absolute top-[773px] left-[613px] w-[213px] h-[69px] cursor-pointer text-9xl text-white"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(4px)] rounded-xl bg-lightpink box-border w-[300px] h-[69px] overflow-hidden flex flex-row items-center justify-center py-[11px] px-[42px] border-[1px] border-solid border-white">
          <div className="relative font-medium">สมัครสมาชิก</div>
        </div>
      </div>
      <div
        className="absolute top-[906px] left-[725px] [text-decoration:underline] font-medium cursor-pointer"
        onClick={onTextClick}
      >
        ยกเลิก
      </div>
    </div>
  );
};

export default Register;  