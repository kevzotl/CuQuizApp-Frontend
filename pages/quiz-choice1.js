import { useRouter } from "next/router";
import { useState } from "react";

const QuizChoice1 = ({ topValue, leftValue, question, choices }) => {
  const router = useRouter();
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoiceClick = (choiceIndex) => {
    setSelectedChoice(choiceIndex);
  };

  return (
    <div
      className="absolute rounded-30xl box-border w-[1000px] h-[200px] overflow-hidden flex flex-row items-center justify-start pt-7 px-[33px] pb-[27px] gap-[34px] text-left text-6xl text-black font-inter border-[7px] border-solid border-lightpink"
      style={{ top: `${topValue}px`, left: `${leftValue}px` }}
    >
      <div className="w-[1000px] relative h-[190px] overflow-hidden shrink-0 text-xl">
        <div className="absolute top-[0px] left-[0px] font-medium">{question}</div>
        {/* Map over choices array and render each choice */}
        {choices.map((choice, index) => (
          <div
            key={index}
            className={`absolute top-[${30 + index * 30}px] left-[0px] font-medium inline-block w-[1400px] h-[30px] cursor-pointer ${
              selectedChoice === index ? 'text-blue-500' : 'text-black'
            }`}
            onClick={() => handleChoiceClick(index)}
          >
            {choice.choiceText}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizChoice1;
