const QuizOnHome4 = () => {
  return (
    <div className="absolute top-[414px] left-[130px] rounded-30xl [background:linear-gradient(#fffefe,_#fffefe),_#fff] box-border w-[567px] h-[184px] overflow-hidden flex flex-row items-center justify-start pt-7 px-[33px] pb-[27px] gap-[34px] text-left text-6xl text-black font-inter border-[7px] border-solid border-lightpink">
      <div className="w-[146px] bg-gainsboro-100 h-[105px] flex flex-col items-end justify-start py-[37px] px-[18px] box-border">
        <div className="w-[45px] relative font-medium inline-block h-[19px] shrink-0">
          img
        </div>
      </div>
      <div className="w-[108px] relative h-[129px] overflow-hidden shrink-0 text-xl">
        <div className="absolute top-[0px] left-[0px] font-medium">name</div>
        <div className="absolute top-[30px] left-[0px] font-medium inline-block w-[305px] h-[75px]">
          description
        </div>
        <div className="absolute top-[105px] left-[0px] font-medium">
          author
        </div>
      </div>
    </div>
  );
};

export default QuizOnHome4;
