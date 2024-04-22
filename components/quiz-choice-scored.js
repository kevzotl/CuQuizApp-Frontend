const QuizChoiceScored = () => {
  return (
    <div className="w-[782px] rounded-2xl [background:linear-gradient(#fffefe,_#fffefe),_#fff] box-border max-w-full h-[279px] overflow-hidden text-left text-xl text-black font-inter border-[2px] border-solid border-lightpink">
      <div className="absolute top-[46px] left-[76px] w-[646px] h-7 overflow-hidden flex flex-row items-start justify-start gap-[535px]">
        <div className="relative font-medium">question</div>
        <div className="relative font-medium">1/1</div>
      </div>
      <div className="absolute top-[115px] left-[0px] w-[782px] overflow-hidden flex flex-col items-center justify-start">
        <div className="w-[782px] rounded-8xs bg-gray-100 box-border h-[41px] flex flex-row items-center justify-start py-[9px] px-[18px] gap-[34px] border-[2px] border-solid border-lightpink">
          <div className="w-6 relative rounded-[50%] bg-white box-border h-6 border-[1px] border-solid border-black" />
          <div className="relative font-medium">choice 1</div>
        </div>
        <div className="w-[782px] rounded-8xs bg-gray-100 box-border h-[41px] flex flex-row items-center justify-start py-[9px] px-[18px] gap-[34px] border-[2px] border-solid border-lightpink">
          <div className="w-6 relative rounded-[50%] bg-white box-border h-6 border-[1px] border-solid border-black" />
          <div className="relative font-medium">choice 2</div>
        </div>
        <div className="w-[782px] rounded-8xs bg-gray-100 box-border h-[41px] flex flex-row items-center justify-start py-[9px] px-[18px] gap-[34px] border-[2px] border-solid border-lightpink">
          <div className="w-6 relative rounded-[50%] bg-white box-border h-6 border-[1px] border-solid border-black" />
          <div className="relative font-medium">choice 3</div>
        </div>
        <div className="w-[782px] rounded-8xs bg-gray-100 box-border h-[41px] flex flex-row items-center justify-start py-[9px] px-[18px] gap-[34px] border-[2px] border-solid border-lightpink">
          <div className="w-6 relative rounded-[50%] bg-white box-border h-6 border-[1px] border-solid border-black" />
          <div className="relative font-medium">choice 4</div>
        </div>
      </div>
    </div>
  );
};

export default QuizChoiceScored;
