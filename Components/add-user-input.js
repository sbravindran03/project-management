const AddUserInput = () => {
    return (
      <div className="self-stretch flex flex-col items-start justify-start gap-[22px] shrink-0 [debug_commit:1cbd860] max-w-full text-left text-5xl text-lightslategray font-nunito">
        <div className="flex flex-row items-start justify-start py-0 px-[18px]">
          <div className="relative font-semibold inline-block min-w-[104px] mq450:text-lgi">
            Add User
          </div>
        </div>
        <div className="self-stretch rounded-mini bg-white shadow-[0px_3.4px_35px_rgba(0,_0,_0,_0.08)] flex flex-row items-start justify-start pt-[67px] px-[37px] pb-[327px] box-border gap-[157px] max-w-full text-lg text-black font-secondary-text mq450:gap-[157px_20px] mq900:gap-[157px_39px] mq900:pt-11 mq900:pb-[213px] mq900:box-border mq1350:gap-[157px_78px] mq1800:flex-wrap">
          <img
            className="h-[726px] w-[1494px] relative rounded-mini hidden max-w-full"
            alt=""
            src="/rectangle-1060.svg"
          />
          <form className="m-0 w-[1014px] flex flex-row items-start justify-start gap-[18px] max-w-full mq1350:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[17px] min-w-[328px] max-w-full">
              <div className="w-[492px] flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[10px] max-w-full">
                <div className="relative text-3xl-5 font-semibold font-open-sans text-darkslategray-500 text-left inline-block min-w-[116px] z-[3] mq450:text-lg">
                  First name
                </div>
                <input
                  className="[outline:none] bg-[transparent] self-stretch h-[52px] relative rounded-mini box-border min-w-[250px] z-[3] border-[1.5px] border-solid border-gainsboro-200"
                  type="text"
                />
              </div>
              <div className="w-[492px] h-[93px] flex flex-col items-start justify-start gap-[10px] max-w-full">
                <div className="relative text-3xl-5 font-semibold font-open-sans text-darkslategray-500 text-left inline-block min-w-[113px] z-[3] mq450:text-lg">
                  Phone No.
                </div>
                <div className="self-stretch flex-1 relative rounded-mini z-[3] border-[1.5px] border-solid border-gainsboro-200" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                <div className="w-[430px] flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq900:flex-wrap">
                    <div className="w-[169px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
                      <div className="self-stretch relative text-3xl-5 font-open-sans text-darkslategray-500 text-left z-[3] mq450:text-lg">
                        Designation
                      </div>
                    </div>
                    <div className="w-[169px] relative text-3xl-5 font-open-sans text-darkslategray-500 text-left inline-block shrink-0 z-[1] mq450:text-lg">
                      Department
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[10px] mq900:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[161px]">
                    <div className="self-stretch rounded-xl flex flex-row items-start justify-between pt-3.5 pb-2.5 pr-[51px] pl-[49px] gap-[20px] z-[4] border-[1px] border-solid border-gainsboro-400">
                      <div className="relative text-lg font-semibold font-open-sans text-darkslategray-500 text-left inline-block min-w-[78px] z-[3]">
                        UI Intern
                      </div>
                      <div className="h-5 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                        <img
                          className="w-[12.6px] h-[13px] relative z-[3]"
                          alt=""
                          src="/vector-21.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-[0.587] rounded-xl box-border flex flex-row items-start justify-between pt-3.5 pb-2.5 pr-[51px] pl-[49px] min-w-[161px] gap-[20px] z-[2] border-[1px] border-solid border-gainsboro-400 mq450:flex-1">
                    <div className="relative text-lg font-semibold font-open-sans text-darkslategray-500 text-left inline-block min-w-[35px] z-[1]">
                      PDT
                    </div>
                    <div className="h-5 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                      <img
                        className="w-[12.6px] h-[13px] relative z-[1]"
                        alt=""
                        src="/vector-21.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[492px] flex flex-col items-start justify-start gap-[19px] min-w-[492px] max-w-full mq1350:flex-1 mq1350:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] gap-[10px]">
                <div className="relative text-3xl-5 font-semibold font-open-sans text-darkslategray-500 text-left inline-block min-w-[117px] z-[3] mq450:text-lg">
                  Last Name
                </div>
                <input
                  className="[outline:none] bg-[transparent] self-stretch h-[52px] relative rounded-mini box-border min-w-[250px] z-[3] border-[1.5px] border-solid border-gainsboro-200"
                  type="text"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <div className="relative text-3xl-5 font-semibold font-open-sans text-darkslategray-500 text-left z-[3] mq450:text-lg">
                  Created Date
                </div>
                <div className="self-stretch rounded-mini flex flex-row items-start justify-between py-[11px] pr-[42px] pl-[29px] gap-[20px] z-[3] border-[1.5px] border-solid border-gainsboro-200 mq900:pr-[21px] mq900:box-border">
                  <input
                    className="w-[154px] [border:none] [outline:none] font-semibold font-open-sans text-3xl-5 bg-[transparent] h-[30px] relative text-slategray-100 text-left inline-block p-0 mq450:text-lg"
                    placeholder="20/04/2023"
                    type="text"
                  />
                  <div className="h-[29px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <img
                      className="w-[29px] h-7 relative overflow-hidden shrink-0"
                      alt=""
                      src="/uilcalender.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <div className="relative text-3xl-5 font-semibold font-open-sans text-darkslategray-500 text-left inline-block min-w-[119px] z-[3] mq450:text-lg">
                  Created By
                </div>
                <div className="self-stretch rounded-mini flex flex-row items-start justify-between pt-[13px] pb-3.5 pr-[57px] pl-[35px] gap-[20px] z-[3] border-[1.5px] border-solid border-gainsboro-200 mq900:pr-7 mq900:box-border">
                  <div className="relative text-lg font-semibold font-open-sans text-darkslategray-500 text-left inline-block min-w-[39px]">
                    user
                  </div>
                  <div className="h-[21px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
                    <img
                      className="w-[12.6px] h-[13px] relative"
                      alt=""
                      src="/vector-21.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="h-[22.5px] w-6 relative overflow-hidden shrink-0 hidden" />
          <div className="h-[213px] w-[203px] flex flex-col items-start justify-start pt-[17.5px] px-0 pb-0 box-border">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[7.900000000000091px]">
              <img
                className="w-[184px] h-[172.6px] relative shrink-0 [debug_commit:1cbd860] z-[3]"
                loading="lazy"
                alt=""
                src="/avatar.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-end">
                <div className="w-[162px] relative leading-[15px] font-medium inline-block shrink-0 [debug_commit:1cbd860] z-[3]">
                  Upload Photo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AddUserInput;
  