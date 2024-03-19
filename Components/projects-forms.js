import { useCallback } from "react";
import Link from 'next/link';

const ProjectsForms = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Admin_Create-Projects" to the project
  }, []);

  return (
    <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[971px] max-w-full text-left text-5xl text-lightslategray font-nunito mq1050:min-w-full">
      <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full">
        <div className="flex flex-row items-start justify-start py-0 px-[35px] box-border max-w-full">
          <div className="relative font-semibold mq450:text-lgi">
            Projects / Create Project
          </div>
        </div>
        <div className="self-stretch rounded-mini bg-white shadow-[0px_3.4px_35px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start pt-[47px] px-[30px] pb-[37px] box-border gap-[32.5px] max-w-full text-3xl-5 text-darkslategray-500 font-open-sans mq750:gap-[16px_32.5px] mq750:pt-[31px] mq750:pb-6 mq750:box-border">
          <div className="w-[1494px] h-[726px] relative rounded-mini bg-white hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-start gap-[30px] max-w-full mq1225:flex-wrap">
            <div className="h-[93px] w-[492px] flex flex-col items-start justify-start gap-[10px] max-w-full">
              <div className="relative font-semibold z-[1] mq450:text-lg">
                Project Title
              </div>
              <div className="self-stretch flex-1 relative rounded-mini z-[1] border-[1.5px] border-solid border-gainsboro-200" />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[593px] max-w-full mq750:min-w-full">
              <div className="w-[826px] flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
                <div className="relative font-semibold z-[1] mq450:text-lg">
                  Project Type
                </div>
                <div className="flex flex-row items-start justify-start gap-[94px] mq450:flex-wrap mq450:gap-[94px_47px]">
                  <div className="relative font-semibold inline-block min-w-[111px] z-[1] mq450:text-lg">
                    Start Date
                  </div>
                  <div className="relative font-semibold inline-block min-w-[99px] z-[1] mq450:text-lg">
                    End Date
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[30px] max-w-full text-xs text-darkslategray-700 font-secondary-text mq1050:flex-wrap">
                <div className="h-[52px] flex-1 relative rounded-mini box-border min-w-[320px] max-w-full z-[1] border-[1.5px] border-solid border-gainsboro-200" />
                <div className="w-[390px] flex flex-row items-start justify-start gap-[20px] max-w-full mq450:flex-wrap">
                  <div className="flex-1 rounded-mini box-border flex flex-row items-start justify-between py-3.5 pr-4 pl-3 min-w-[120px] gap-[20px] z-[1] border-[1.5px] border-solid border-gainsboro-200">
                    <div className="relative leading-[24px] inline-block min-w-[79px]">
                      DD/MM/YYYY
                    </div>
                    <div className="h-5 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                      <img
                        className="w-[15px] h-[15px] relative"
                        alt=""
                        src="/button.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 rounded-mini box-border flex flex-row items-start justify-between py-3.5 pr-4 pl-3 min-w-[120px] gap-[20px] z-[1] border-[1.5px] border-solid border-gainsboro-200">
                    <div className="relative leading-[24px] inline-block min-w-[79px]">
                      DD/MM/YYYY
                    </div>
                    <div className="h-5 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                      <img
                        className="w-[15px] h-[15px] relative"
                        alt=""
                        src="/button.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[147px] flex flex-col items-start justify-start gap-[10px]">
            <div className="relative font-semibold z-[1] mq450:text-lg">
              Project Description
            </div>
            <div className="self-stretch flex-1 relative rounded-mini z-[1] border-[1.5px] border-solid border-gainsboro-200" />
          </div>
          <div className="w-[1389px] flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start max-w-full">
              <div className="w-[169px] h-10 relative font-semibold inline-block shrink-0 z-[1] mq450:text-lg">
                Project Roles
              </div>
              <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] text-lg mq1050:flex-wrap">
                <div className="w-[492px] rounded-xl box-border flex flex-col items-start justify-start pt-[17px] px-3.5 pb-[9px] gap-[6.5px] max-w-full z-[2] border-[1px] border-solid border-gainsboro-400">
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-1 pr-[11px] pl-[9px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
                      <div className="relative font-semibold inline-block min-w-[95px] z-[1]">
                        Team Lead
                      </div>
                      <div className="h-[18px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
                        <img
                          className="w-2.5 h-[5px] relative z-[1]"
                          alt=""
                          src="/vector-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[9px] flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
                    <img
                      className="h-px flex-1 relative max-w-full overflow-hidden z-[1]"
                      loading="lazy"
                      alt=""
                      src="/vector-31.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[5px] box-border gap-[2.5px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pr-2 pl-[9px] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[27px] max-w-full mq750:flex-wrap">
                        <div className="relative inline-block min-w-[40px] z-[1]">
                          Yash
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start min-w-[219px] max-w-full text-darkslategray-800">
                          <i className="relative inline-block min-w-[83px] z-[1]">
                            Team lead
                          </i>
                        </div>
                        <div className="h-[19px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                          <img
                            className="w-[13px] h-[13px] relative z-[1]"
                            loading="lazy"
                            alt=""
                            src="/vector-3.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="self-stretch h-px relative max-w-full overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src="/vector-31.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[5px] box-border gap-[2.5px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pr-2 pl-[9px] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[27px] max-w-full mq750:flex-wrap">
                        <div className="relative inline-block min-w-[40px] z-[1]">
                          Yash
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start min-w-[219px] max-w-full text-darkslategray-800">
                          <i className="relative inline-block min-w-[83px] z-[1]">
                            Team lead
                          </i>
                        </div>
                        <input
                          className="m-0 h-[19px] w-[13px]"
                          type="checkbox"
                        />
                      </div>
                    </div>
                    <img
                      className="self-stretch h-px relative max-w-full overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src="/vector-31.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[5px] box-border gap-[2.5px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pr-2 pl-[9px] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[27px] max-w-full mq750:flex-wrap">
                        <div className="relative inline-block min-w-[40px] z-[1]">
                          Yash
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start min-w-[219px] max-w-full text-darkslategray-800">
                          <i className="relative inline-block min-w-[83px] z-[1]">
                            Team lead
                          </i>
                        </div>
                        <input
                          className="m-0 h-[19px] w-[13px]"
                          type="checkbox"
                        />
                      </div>
                    </div>
                    <img
                      className="self-stretch h-px relative max-w-full overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src="/vector-31.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[5px] box-border gap-[2.5px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pr-2 pl-[9px] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[27px] max-w-full mq750:flex-wrap">
                        <div className="relative inline-block min-w-[40px] z-[1]">
                          Yash
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start min-w-[219px] max-w-full text-darkslategray-800">
                          <i className="relative inline-block min-w-[83px] z-[1]">
                            Team lead
                          </i>
                        </div>
                        <input
                          className="m-0 h-[19px] w-[13px]"
                          type="checkbox"
                        />
                      </div>
                    </div>
                    <img
                      className="self-stretch h-px relative max-w-full overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/vector-31.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-end justify-start gap-[2.5px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pr-2 pl-[9px] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[27px] max-w-full mq750:flex-wrap">
                        <div className="relative inline-block min-w-[40px] z-[1]">
                          Yash
                        </div>
                        <input
                          className="w-[calc(100%_-_0px)] [border:none] [outline:none] bg-[transparent] h-[25px] flex-1 flex flex-col items-start justify-start font-open-sans italic text-lg text-darkslategray-800 min-w-[219px] max-w-full"
                          placeholder="Team lead"
                          type="text"
                        />
                        <input
                          className="m-0 h-[19px] w-[13px]"
                          type="checkbox"
                        />
                      </div>
                    </div>
                    <img
                      className="self-stretch h-px relative max-w-full overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/vector-31.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[9px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[27px] max-w-full mq750:flex-wrap">
                      <div className="relative inline-block min-w-[40px] z-[1]">
                        Yash
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start min-w-[219px] max-w-full text-darkslategray-800">
                        <i className="relative inline-block min-w-[83px] z-[1]">
                          Team lead
                        </i>
                      </div>
                      <input
                        className="m-0 h-[19px] w-[13px]"
                        type="checkbox"
                      />
                    </div>
                  </div>
                  <div className="w-[492px] h-[297px] relative rounded-xl box-border hidden max-w-full border-[1px] border-solid border-gainsboro-400" />
                </div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
                  <div
                    className="flex flex-row items-start justify-start gap-[28px] cursor-pointer z-[1]"
                    onClick={onGroupContainerClick}
                  >
                   <Link href="/Admin"><button className="cursor-pointer [border:none] py-[18px] px-[23px] bg-info-main rounded-mini flex flex-row items-start justify-start  bg-blue-600 hover:bg-dodgerblue">
                      <div className="relative text-lg leading-[20px] font-medium font-secondary-text text-white text-left inline-block min-w-[58px]">
                        Create
                      </div>
                    </button></Link> 
                    <button className="cursor-pointer [border:none] py-[18px] px-[33px] bg-info-secondary rounded-mini flex flex-row items-start justify-start hover:bg-gainsboro-300">
                      <div className="relative text-lg leading-[20px] font-medium font-secondary-text text-info-main text-left inline-block min-w-[56px]">
                        Delete
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsForms;
