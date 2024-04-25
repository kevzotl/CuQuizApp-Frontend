import { useRouter } from "next/router";

const Quizwrite = ({ topValue, leftValue, question }) => {
  const handleChange = (event) => {
    const response = event.target.value;
    onChange(response);
  };

  return (
    <div
      className="absolute rounded-30xl box-border w-[1000px] h-[200px] overflow-hidden flex flex-row items-center justify-start pt-7 px-[33px] pb-[27px] gap-[34px] text-left text-6xl text-black font-inter border-[7px] border-solid border-lightpink"
      style={{ top: `${topValue}px`, left: `${leftValue}px` }}
    >
      <div className="w-[1000px] relative h-[190px] overflow-hidden shrink-0 text-xl">
        <div className="absolute top-[20px] left-[0px] font-medium">{question}</div>
        {/* Input field */}
        <input
          className="absolute top-[80px] left-0 font-medium w-[400px] h-[40px] border border-gray-300 rounded-md px-4"
          placeholder="Your answer..."
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Quizwrite;
