import Link from 'next/link';
const Navbar = () => {
    return (
      <header className="mt-[-90px] ml-[-1px] self-stretch h-[90px] bg-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.16)] flex flex-row items-start justify-start top-[-90] z-[99] sticky max-w-full text-left text-6xl text-darkslategray-400 font-secondary-text">
        <div className="self-stretch w-[1867px] relative bg-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.16)] hidden max-w-full" />
        <div className="self-stretch flex-1 bg-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.16)] flex flex-row items-start justify-start max-w-full z-[3]">
          <div className="h-[69px] w-[278px] relative hidden">
            <div className="absolute top-[18px] left-[93px] w-[179px] h-10 hidden">
              <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-full h-full whitespace-nowrap">
                AProjectO
              </div>
            </div>
            <img
              className="absolute top-[12px] left-[24px] w-[50px] h-[45px]"
              alt=""
              src="/icon.svg"
            />
          </div>
          <div className="h-[49px] w-[50px] relative hidden">
            <img
              className="absolute top-[0px] left-[0px] w-[50px] h-[49px]"
              alt=""
              src="/ellipse-18.svg"
            />
            <div className="absolute top-[5px] left-[31.2px] w-[18.8px] h-[18px]" />
          </div>
         <Link href="/user"><button className="bg-blue-700 w-[118px] relative text-base text-gray-800 text-right hidden shrink-0 hover caret-purple-950">
            USER
        </button> </Link>
          <img
            className="h-[35px] w-[41px] relative hidden"
            alt=""
            src="/vuesaxlinearnotification.svg"
          />
          <div className="h-11 w-[417px] relative hidden max-w-full text-sm text-slategray-100">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-gray-100 box-border border-[1px] border-solid border-lightslategray" />
            <div className="absolute top-[13px] left-[54.8px] whitespace-nowrap">
              Search for anything...
            </div>
            <img
              className="absolute top-[10px] left-[16.8px] w-[22px] h-[22px]"
              alt=""
              src="/vuesaxtwotonesearchnormal.svg"
            />
          </div>
          <div className="self-stretch w-[1867px] relative bg-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.16)] hidden max-w-full" />
          <div className="self-stretch flex-1 bg-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.16)] flex flex-row items-start justify-between pt-[11px] pb-2.5 pr-[35px] pl-0 box-border relative max-w-full gap-[20px] z-[4]">
            <div className="h-[69px] w-[278px] relative hidden z-[0]">
              <div className="absolute top-[18px] left-[93px] w-[179px] h-10 hidden">
                <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-full h-full whitespace-nowrap">
                  AProjectO
                </div>
              </div>
              <img
                className="absolute top-[12px] left-[24px] w-[50px] h-[45px]"
                alt=""
                src="/icon.svg"
              />
            </div>
            <div className="h-[49px] w-[50px] relative hidden z-[1]">
              <img
                className="absolute top-[0px] left-[0px] w-[50px] h-[49px]"
                alt=""
                src="/ellipse-18.svg"
              />
              <div className="absolute top-[5px] left-[31.2px] w-[18.8px] h-[18px]" />
            </div>
            <div className="w-[118px] relative text-base text-gray-800 text-right hidden shrink-0 z-[2]">
              USER
            </div>
            <img
              className="h-[35px] w-[41px] relative hidden z-[3]"
              alt=""
              src="/vuesaxlinearnotification.svg"
            />
            <div className="h-11 w-[417px] relative hidden max-w-full z-[4] text-sm text-slategray-100">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[1px] border-solid border-lightslategray" />
              <div className="absolute top-[13px] left-[54.8px] whitespace-nowrap">
                Search for anything...
              </div>
              <img
                className="absolute top-[10px] left-[16.8px] w-[22px] h-[22px]"
                alt=""
                src="/vuesaxtwotonesearchnormal.svg"
              />
            </div>
            <div className="h-[90px] w-[1867px] relative bg-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.16)] hidden max-w-full z-[5]" />
            <div className="self-stretch w-[278px] flex flex-row items-start justify-start py-3 px-6 box-border z-[1]">
              <div className="h-10 w-[179px] relative hidden">
                <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-full h-full whitespace-nowrap">
                  AProjectO
                </div>
              </div>
              <img
                className="h-[45px] w-[50px] relative"
                alt=""
                src="/icon.svg"
              />
            </div>
            <div className="w-[719px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full text-right text-base text-gray-800">
              <div className="self-stretch flex flex-row items-start justify-start gap-[34px] max-w-full mq925:gap-[34px_17px]">
                <div className="h-11 flex-1 flex flex-row items-end justify-start gap-[41px] max-w-full mq925:gap-[41px_20px]">
                  <div className="self-stretch flex-1 rounded-md bg-white box-border flex flex-row items-start justify-start pt-2.5 px-[16.800000000000182px] pb-3 gap-[16px] max-w-full z-[1] border-[1px] border-solid border-lightslategray">
                    <div className="h-11 w-[417px] relative rounded-md bg-gray-100 box-border hidden max-w-full border-[1px] border-solid border-lightslategray" />
                    <img
                      className="h-[22px] w-[22px] relative min-h-[22px] z-[1]"
                      alt=""
                      src="/search.png"
                    />
                    <input
                      className="w-[141px] [border:none] [outline:none] bg-[transparent] h-5 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-secondary-text text-sm text-slategray-100"
                      placeholder="Search for anything..."
                      type="text"
                    />
                  </div>
                  <div className="h-[38px] flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border">
                    <img
                      className="w-[41px] h-[35px] relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/notification.png"
                    />
                  </div>
                </div>
                <div className="w-[186px] flex flex-row items-start justify-start gap-[18px]">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[18px] px-0 pb-0">
                    <div className="self-stretch relative z-[1]">USER</div>
                  </div>
                  <div className="h-[49px] w-[50px] relative">
                   
                    <div className="absolute top-[5px] left-[31.2px] w-[18.8px] h-[18px] hidden z-[2]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute !m-[0] bottom-[27px] left-[83px] text-xl font-semibold font-manrope text-gray-700 whitespace-nowrap z-[2]">
              INTEGRATED TRACKING COORDINATION HUB
            </div>
            <div>
              
            </div>
          </div>
        </div>
        
      </header>
      
    );
  };
  
  export default Navbar;
  