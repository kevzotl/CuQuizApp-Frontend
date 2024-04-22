const QuizOnAtten = () => {
  return (
    <div className="w-[567px] rounded-30xl [background:linear-gradient(#fffefe,_#fffefe),_#fff] box-border max-w-full h-[184px] overflow-hidden text-left text-xl text-black font-inter border-[7px] border-solid border-lightpink">
      <div className="absolute top-[40px] left-[33px] bg-gainsboro-100 w-[146px] h-[105px] flex flex-col items-start justify-start py-[34px] px-[50px] box-border text-6xl">
        <div className="w-[45px] relative font-medium inline-block h-[19px] shrink-0">
          img
        </div>
      </div>
      <div className="absolute top-[28px] left-[213px] w-[108px] h-[129px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] font-medium">name</div>
        <div className="absolute top-[105px] left-[0px] font-medium">
          author
        </div>
        <div className="absolute top-[30px] left-[0px] font-medium">
          description
        </div>
      </div>
      <div className="absolute top-[28px] left-[479px] w-[54px] h-[54px] overflow-hidden flex flex-col items-start justify-start gap-[6px]">
        <div className="relative font-medium">date</div>
        <div className="relative font-medium">score</div>
      </div>
    </div>
  );
};

export default QuizOnAtten;
