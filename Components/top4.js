const Top4 = () => {
    return (
      <div className="ml-[-5px] self-stretch bg-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.16)] flex flex-row items-start justify-between pt-[11px] pb-2.5 pr-[35px] pl-0 box-border relative max-w-full gap-[20px] text-left text-6xl text-darkslategray-400 font-secondary-text mq1350:flex-wrap mq1350:pl-5 mq1350:pr-5 mq1350:box-border">
        <header className="h-[90px] w-[1867px] relative bg-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.16)] hidden max-w-full z-[0]" />
        <div className="h-[69px] w-[278px] flex flex-row items-start justify-start py-3 px-6 box-border z-[1]">
          <div className="h-10 w-[179px] relative hidden">
            <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-full h-full mq450:text-xl">
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
        <div className="w-[720.9px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full text-right text-base text-gray-800">
          <div className="self-stretch flex flex-row items-start justify-start gap-[41.90000000000009px] max-w-full mq900:flex-wrap mq900:gap-[41.9px_21px]">
            <div className="h-11 w-[418.1px] rounded-md bg-white box-border flex flex-row items-start justify-start pt-2.5 px-[16.800000000000182px] pb-3 gap-[16px] max-w-full z-[1] border-[1px] border-solid border-lightslategray">
              <div className="h-11 w-[418.1px] relative rounded-md bg-gray-100 box-border hidden max-w-full border-[1px] border-solid border-lightslategray" />
              <img
                className="h-[22px] w-[22.1px] relative min-h-[22px] z-[1]"
                alt=""
                src="/vuesaxtwotonesearchnormal.svg"
              />
              <input
                className="w-[141.4px] [border:none] [outline:none] bg-[transparent] h-5 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-secondary-text text-sm text-slategray-100"
                placeholder="Search for anything..."
                type="text"
              />
            </div>
            <div className="h-[38px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <img
                className="w-[41.1px] h-[35px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/vuesaxlinearnotification1.svg"
              />
            </div>
            <div className="w-[177.9px] flex flex-row items-start justify-start gap-[9.800000000000182px]">
              <div className="flex-1 flex flex-col items-start justify-start pt-[17px] px-0 pb-0">
                <div className="self-stretch relative z-[1]">USER</div>
              </div>
              <div className="h-[49px] w-[50.1px] relative">
                <img
                  className="absolute top-[0px] left-[0px] w-[50.1px] h-[49px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/ellipse-183.svg"
                />
                <div className="absolute top-[5px] left-[26.4px] w-[18.8px] h-[18px] hidden z-[2]" />
              </div>
            </div>
          </div>
        </div>
        <h3 className="!m-[0] absolute bottom-[30px] left-[91px] text-xl font-semibold font-manrope text-gray-700 z-[2] mq450:text-base">
          INTEGRATED TRACKING COORDINATION HUB
        </h3>
      </div>
    );
  };
  
  export default Top4;
  