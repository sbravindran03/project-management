import Top4 from "../Components/top4";
import NavList3 from "../Components/nav-list3";
import Link from 'next/link';

const IssuesCreateTasks = () => {
  return (
    <div className="w-full relative bg-aliceblue-100 overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <Top4 />
      <footer className="self-stretch flex flex-row items-start justify-start py-0 pr-[35px] pl-[338px] box-border gap-[29px] max-w-full mq900:pl-[84px] mq900:box-border mq1350:pl-[169px] mq1350:box-border mq450:pl-5 mq450:box-border mq1800:flex-wrap">
        <div className="ml-[-343px] h-[1094px] w-[314px] bg-white shadow-[0px_3px_35.16px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start py-4 pr-[29px] pl-4 box-border shrink-0 [debug_commit:1cbd860] mq450:gap-[16px_32px]">
          <NavList3 />
        </div>
        <section className="w-[1494px] flex flex-col items-start justify-start pt-[41px] px-0 pb-0 box-border max-w-full text-left text-5xl text-lightslategray font-nunito mq900:pt-[27px] mq900:box-border mq450:pt-5 mq450:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[31px] shrink-0 [debug_commit:1cbd860] mq900:gap-[15px_31px]">
            <div className="flex flex-row items-start justify-start py-0 px-5">
              <h2 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi">
                TASK / Create Issues
              </h2>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start pt-[58px] pb-[29px] pr-[21px] pl-1 box-border relative gap-[186px] max-w-full text-3xl-5 text-darkslategray-500 font-open-sans mq900:gap-[46px_186px] mq900:pt-[38px] mq900:pb-5 mq900:box-border mq1350:gap-[93px_186px] mq450:gap-[23px_186px]">
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] flex items-center justify-center z-[0]">
               
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[32px] max-w-full mq900:gap-[16px_32px]">
                <div className="w-[1434px] flex flex-row items-start justify-start gap-[30px] max-w-full mq1800:flex-wrap">
                  <div className="w-[492px] flex flex-col items-start justify-start gap-[10px] max-w-full">
                    <div className="relative font-semibold inline-block min-w-[110px] z-[1] mq450:text-lg">
                      TASK Title
                    </div>
                    <input
                      className="[outline:none] bg-[transparent] self-stretch h-[52px] relative rounded-mini box-border min-w-[250px] z-[1] border-[1.5px] border-solid border-gainsboro-200"
                      type="text"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[593px] max-w-full mq1350:min-w-full">
                    <div className="w-[893px] flex flex-row items-start justify-between max-w-full gap-[20px] mq900:flex-wrap">
                      <div className="relative font-semibold inline-block min-w-[114px] z-[1] mq450:text-lg">
                        TASK Type
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[27px] max-w-full mq900:flex-wrap">
                        <div className="relative font-semibold z-[1] mq450:text-lg">
                          {" "}
                          TASK Start Date
                        </div>
                        <div className="relative font-semibold z-[1] mq450:text-lg">
                          {" "}
                          TASK End Date
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[30px] max-w-full text-xs text-darkslategray-700 font-secondary-text mq1350:flex-wrap">
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
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-[35px]">
                    <div className="relative font-semibold z-[1] mq450:text-lg">
                      TASK Details
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[1px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[35px] box-border max-w-full">
                      <input
                        className="[outline:none] bg-[transparent] h-[106px] flex-1 relative rounded-mini box-border min-w-[250px] max-w-full z-[1] border-[1.5px] border-solid border-gainsboro-200"
                        type="text"
                      />
                    </div>
                    <div className="w-[1049px] flex flex-row items-start justify-between max-w-full gap-[20px] mq900:flex-wrap">
                      <div className="w-[247px] flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[39px]">
                            <div className="flex-1 relative font-semibold z-[1] mq450:text-lg">
                              Assign to
                            </div>
                          </div>
                          <div className="self-stretch rounded-xl flex flex-row items-start justify-between py-3 pr-[17px] pl-[83px] gap-[20px] z-[2] text-lg border-[1px] border-solid border-gainsboro-400">
                            <div className="relative font-semibold inline-block min-w-[95px] z-[1]">
                              Yash Ghori
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
                      <div className="w-[396px] flex flex-row items-start justify-start gap-[47px] max-w-full mq450:flex-wrap mq450:gap-[47px_23px]">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[117px]">
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[11px]">
                            <div className="flex-1 relative font-semibold z-[1] mq450:text-lg">
                              Priority
                            </div>
                          </div>
                          <div className="w-40 rounded-mini box-border flex flex-row items-start justify-start pt-[7px] px-[7px] pb-[9px] z-[1] border-[1.5px] border-solid border-gainsboro-200">
                            <button className="cursor-pointer [border:none] py-[9px] pr-3 pl-3.5 bg-mistyrose-100 rounded-3xl flex flex-row items-start justify-start gap-[10px]">
                              <b className="relative text-sm inline-block font-montserrat text-firebrick-300 text-left min-w-[35px]">
                                High
                              </b>
                              <div className="h-[18px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                                <img
                                  className="w-4 h-4 relative"
                                  alt=""
                                  src="/group-1000004272.svg"
                                />
                              </div>
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[12px]">
                          <div className="relative font-semibold z-[3] mq450:text-lg">
                            Issue Assigning
                          </div>
                          <button className="cursor-pointer pt-4 px-[30px] pb-[19px] bg-[transparent] w-40 rounded-mini box-border flex flex-row items-start justify-start z-[3] border-[1.5px] border-solid border-gainsboro-200">
                            <div className="flex flex-row items-start justify-start relative">
                              <img
                                className="h-9 w-[130px] absolute !m-[0] right-[-44px] bottom-[-10px] rounded-3xl"
                                alt=""
                                src="/new-input-field.svg"
                              />
                              <b className="relative text-sm inline-block font-montserrat text-firebrick-300 text-left min-w-[63px] z-[1]">
                                Pending
                              </b>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-end py-0 px-[49px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="flex flex-row items-start justify-start gap-[28px]">
                  <Link href="/task"><button className="cursor-pointer [border:none] py-[18px] px-[23px] bg-blue-700  rounded-mini flex flex-row items-start justify-start z-[1] hover:bg-dodgerblue">
                    <div className="relative text-lg leading-[20px] font-medium font-secondary-text text-white text-left inline-block min-w-[58px]">
                      Create
                    </div>
                  </button></Link>
                  <button className="cursor-pointer [border:none] py-[18px] px-[33px] bg-info-secondary rounded-mini flex flex-row items-start justify-start z-[1] hover:bg-gainsboro-300">
                    <div className="relative text-lg leading-[20px] font-medium font-secondary-text text-info-main text-left inline-block min-w-[56px]">
                      Delete
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default IssuesCreateTasks;
