const AboutPopup = ({ showAboutPopup }) => {
  return (
    showAboutPopup && (
      <div className="absolute top-[65px] right-[50px] rounded-2xl bg-slate-700 text-white h-auto max-w-[325px] break-all flex flex-col">
        <div className="ml-[15px] mt-[15px] mr-[15px] ">
          MoneyMate is a simple yet powerful expense tracker application
          designed to help users manage their finances efficiently. With
          real-time expense tracking, intuitive UI, and insightful analytics.
        </div>
        <div className="flex text-slate-950 font-bold ml-[15px] mt-[5px] mr-[15px] mb-[15px]">
          <div className="mr-2 font-mono text-sm">Author: </div>
          <div className="text-sm font-mono underline">Mukul Joshi</div>
        </div>
      </div>
    )
  );
};

export default AboutPopup;
