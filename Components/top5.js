const Top5 = () => {
    return (
      <header className="ml-[-5px] self-stretch h-[90px] bg-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.16)] flex flex-row items-start justify-between pt-[11px] pb-2.5 pr-[35px] pl-0 box-border sticky top-[0] z-[99] max-w-full gap-[20px] text-left text-6xl text-darkslategray-400 font-secondary-text">
        <div className="h-[90px] w-[1867px] relative bg-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.16)] hidden max-w-full z-[0]" />
        <div className="self-stretch w-[278px] flex flex-row items-start justify-start py-3 px-6 box-border z-[1]">
          <div className="h-10 w-[179px] relative hidden">
            <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-full h-full whitespace-nowrap">
              AProjectO
            </div>
          </div>
          <img
            className="h-[45px] w-[50px] relative"
            loading="lazy"
            alt=""
            src="/icon.svg"
          />
        </div>
        <div className="w-[719px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full text-right text-base text-gray-800">
          <div className="self-stretch flex flex-row items-start justify-start gap-[31px] max-w-full mq900:gap-[31px_15px]">
            <div className="h-11 flex-1 flex flex-row items-start justify-start gap-[41px] max-w-full mq900:gap-[41px_20px]">
              <div className="self-stretch flex-1 rounded-md bg-white box-border flex flex-row items-start justify-start pt-2.5 px-[16.800000000000182px] pb-3 gap-[16px] max-w-full z-[1] border-[1px] border-solid border-lightslategray">
                <div className="h-11 w-[417px] relative rounded-md bg-gray-100 box-border hidden max-w-full border-[1px] border-solid border-lightslategray" />
                <img
                  className="h-[22px] w-[22px] relative min-h-[22px] z-[1]"
                  alt=""
                  src="/vuesaxtwotonesearchnormal.svg"
                />
                <input
                  className="w-[141px] [border:none] [outline:none] bg-[transparent] h-5 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-secondary-text text-sm text-slategray-100"
                  placeholder="Search for anything..."
                  type="text"
                />
              </div>
              <div className="h-[38px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <img
                  className="w-[41px] h-[35px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearnotification.svg"
                />
              </div>
            </div>
            <div className="w-[189px] flex flex-row items-start justify-start gap-[21px]">
              <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="self-stretch flex flex-col items-end justify-start gap-[3px] mq1350:hidden">
                  <div className="self-stretch relative whitespace-nowrap z-[1]">
                    user
                  </div>
                  <div className="w-[84.7px] relative text-sm text-slategray-100 inline-block box-border pl-5 z-[1]">
                    location
                  </div>
                </div>
              </div>
              <div className="h-[49px] w-[50px] relative">
                <img
                  className="absolute top-[0px] left-[0px] w-[50px] h-[49px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/ellipse-184.svg"
                />
                <div className="absolute top-[5px] left-[31.2px] w-[18.8px] h-[18px] hidden z-[2]" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute !m-[0] bottom-[27px] left-[88px] text-xl font-semibold font-manrope text-gray-700 whitespace-nowrap z-[2]">
          INTEGRATED TRACKING COORDINATION HUB
        </div>
      </header>
    );
  };
  
  export default Top5;
  