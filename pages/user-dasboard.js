import { useState, useCallback } from "react";
import Navbar from "../Components/navvbar";
import Link from "next/link";

const UserDasboard = () => {
  const [editSquareIconChecked, setEditSquareIconChecked] = useState(true);

 

  return (
    <div className="w-full relative bg-aliceblue-100 overflow-hidden flex flex-col items-start justify-start pt-[85px] px-0 pb-[7px] box-border tracking-[normal]">
      <Navbar />
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-[55px] pl-[1783px] box-border gap-[617.5px] max-w-full shrink-0 mq450:gap-[617.5px_77px] mq450:pl-5 mq450:box-border mq925:gap-[617.5px_154px] mq925:pl-[445px] mq925:box-border mq1400:gap-[617.5px_309px] mq1400:pl-[891px] mq1400:pr-[27px] mq1400:box-border">
        <section className="ml-[-1791px] w-[1173.5px] flex flex-row items-start justify-start gap-[26px] shrink-0 [debug_commit:1cbd860] text-left text-mini-6 text-slategray-200 font-poppins mq450:flex-wrap mq1875:flex-wrap mq925:flex-wrap mq1400:flex-wrap">
          <div className="h-[1071px] w-[314px] flex flex-row items-start justify-start relative min-w-[314px] mq450:flex-1 mq1875:flex-1 mq925:flex-1 mq1400:flex-1">
            <div className="h-[487px] w-[355px] absolute !m-[0] right-[-21px] bottom-[58px] flex items-center justify-center z-[0]">
              <img
                className="h-full w-full object-contain absolute left-[0px] top-[2px] [transform:scale(1.056)]"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="self-stretch flex-1 bg-white shadow-[0px_3px_35.16px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start py-4 pr-[29px] pl-4 z-[1] mq450:gap-[16px_32px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[14.635799407958984px]">
                <div className="w-[246.1px] rounded-[3.66px] bg-white flex flex-row items-center justify-start py-0 pr-[7px] pl-[7.300000000000182px] box-border">
                  <div className="flex flex-row items-center justify-center py-0 pr-[4.547473508864641e-13px] pl-0">
                    <div className="h-[43.9px] flex flex-row items-center justify-center pt-[7.299999999999955px] pb-[7.300000000000068px] pr-[7.300000000000182px] pl-[7.299999999999727px] box-border">
                      
                    </div>
                    <div className="flex flex-row items-center justify-center pt-[7.399999999999977px] pb-[7.2000000000000455px] pr-[7.299999999999727px] pl-[7.300000000000182px] z-[1]">
                      <div className="relative tracking-[0.01em] leading-[22px] font-semibold inline-block min-w-[45px]">
                        Home
                      </div>
                    </div>
                  </div>
                  <div className="hidden flex-row items-start justify-start text-xs-9 text-cornflowerblue">
                    <div className="flex flex-row items-start justify-start">
                      <div className="h-[22px] w-[22px] relative rounded-[3.66px] bg-white overflow-hidden shrink-0">
                        <div className="absolute top-[-1.8px] left-[8.2px] leading-[26.53px]">
                          1
                        </div>
                      </div>
                    </div>
                    <div className="h-[22px] flex flex-row items-start justify-start">
                      <img
                        className="h-[22px] w-[22px] relative overflow-hidden shrink-0 object-contain"
                        alt=""
                        src="/arrow--right-2@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="self-stretch rounded-[3.66px] bg-white flex flex-row items-center justify-start py-0 pr-[7px] pl-[7.300000000000182px] cursor-pointer text-xs-9 text-cornflowerblue"
                 
                >
                  <div className="w-[110.5px] flex flex-row items-center justify-center py-0 pr-[4.547473508864641e-13px] pl-0 box-border">
                    <div className="h-[43.9px] flex flex-row items-center justify-center pt-[7.399999999999977px] pb-[7.2000000000000455px] pr-[7.300000000000182px] pl-[7.299999999999727px] box-border">
                      <img
                        className="h-[29.3px] w-[29.3px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/Leading Icon.png"
                      />
                    </div>
                  <Link href="/Admin">
      <div className="w-[calc(100%_-_29.300000000000455px)] [border:none] [outline:none] bg-[transparent] h-[36.6px] flex-1 flex flex-row items-center justify-center pt-[7.299999999999955px] px-[7.300000000000182px] pb-[7.300000000000068px] box-border font-poppins text-mini-6 text-slategray-200 min-w-[40px] z-[1]">
        <div className="relative tracking-[0.01em] leading-[22px] inline-block min-w-[42px]">
          Project
        </div>
      </div>
    </Link>
                      
                     
                   
                  </div>
                  <div className="hidden flex-row items-start justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <div className="h-[22px] w-[22px] relative rounded-[3.66px] bg-white overflow-hidden shrink-0">
                        <div className="absolute top-[-1.8px] left-[8.2px] leading-[26.53px]">
                          1
                        </div>
                      </div>
                    </div>
                    <div className="h-[22px] flex flex-row items-start justify-start">
                      <img
                        className="h-[22px] w-[22px] relative overflow-hidden shrink-0 object-contain"
                        alt=""
                        src="/task.png"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="w-[253.4px] rounded-[3.66px] flex flex-row items-center justify-start py-0 pr-[7px] pl-[7.300000000000182px] box-border cursor-pointer"
                 
                >
                  <div className="flex flex-row items-center justify-center py-0 pr-[4.547473508864641e-13px] pl-0">
                    <div className="h-[43.9px] flex flex-row items-center justify-center pt-[7.299999999999955px] pb-[7.300000000000068px] pr-[7.300000000000182px] pl-[7.299999999999727px] box-border">
                      <img
                        className="h-[29.3px] w-[29.3px] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/task.png"
                      />
                    </div>
                    <Link href="/task"><div className="flex flex-row items-center justify-center pt-[7.299999999999955px] pb-[7.300000000000068px] pr-[7.299999999999727px] pl-[7.300000000000182px] z-[1]">
                      <div className="relative tracking-[0.01em] leading-[22px] inline-block min-w-[42px]">
                        Tasks
                      </div>
                    </div></Link>
                  </div>
                  <div className="hidden flex-row items-start justify-start text-xs-9 text-gray-400">
                    <div className="flex flex-row items-start justify-start">
                      <div className="h-[22px] w-[22px] relative rounded-[3.66px] bg-aliceblue-200 overflow-hidden shrink-0">
                        <div className="absolute top-[-1.8px] left-[8.2px] leading-[26.53px]">
                          1
                        </div>
                      </div>
                    </div>
                    <div className="h-[22px] flex flex-row items-start justify-start">
                      <img
                        className="h-[22px] w-[22px] relative overflow-hidden shrink-0 object-contain"
                        alt=""
                        src="/arrow--right-2-2@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[253.4px] rounded-[3.66px] flex flex-row items-center justify-start py-0 pr-[7px] pl-[7.300000000000182px] box-border">
                  <div className="flex flex-row items-center justify-center py-0 pr-[4.547473508864641e-13px] pl-0">
                    <div className="h-[43.9px] flex flex-row items-center justify-center pt-[7.299999999999955px] pb-[7.300000000000068px] pr-[7.300000000000182px] pl-[7.299999999999727px] box-border">
                      <img
                        className="h-[29.3px] w-[29.3px] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/Issue.png"
                      />
                    </div>
                    <Link href="/admin-c">
  <div className="flex flex-row items-center justify-center pt-[7.300000000000068px] pb-[7.299999999999955px] pr-[7.299999999999727px] pl-[7.300000000000182px] z-[1]">
    <div className="relative tracking-[0.01em] leading-[22px] inline-block min-w-[46px]">
      Issues
    </div>
  </div>
</Link>
 
                  </div>
                  <div className="hidden flex-row items-start justify-start text-xs-9 text-gray-400">
                    <div className="flex flex-row items-start justify-start">
                      <div className="h-[22px] w-[22px] relative rounded-[3.66px] bg-aliceblue-200 overflow-hidden shrink-0">
                        <div className="absolute top-[-1.8px] left-[8.2px] leading-[26.53px]">
                          1
                        </div>
                      </div>
                    </div>
                    <div className="h-[22px] flex flex-row items-start justify-start">
                      <img
                        className="h-[22px] w-[22px] relative overflow-hidden shrink-0 object-contain"
                        alt=""
                        src="/arrow--right-2-3@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[253.4px] rounded-[3.66px] flex flex-row items-center justify-between py-0 px-[7.300000000000182px] box-border gap-[20px]">
                  <div className="flex flex-row items-center justify-center py-0 pr-[4.547473508864641e-13px] pl-0">
                    <div className="h-[43.9px] flex flex-row items-center justify-center pt-[7.299999999999955px] pb-[7.300000000000068px] pr-[7.300000000000182px] pl-[7.299999999999727px] box-border">
                      <img
                        className="h-[29.3px] w-[29.3px] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/perfor.png"
                      />
                    </div>
                   <Link href="/admin-create-project"><div className="flex flex-row items-center justify-center pt-[7.300000000000068px] pb-[7.299999999999955px] pr-[7.299999999999727px] pl-[7.300000000000182px] z-[1]">
                      <div className="relative tracking-[0.01em] leading-[22px] inline-block min-w-[97px]">
                        Performance
                      </div>
                    </div></Link> 
                  </div>
                  <div className="h-[22px] w-[22px] flex flex-row items-start justify-start text-xs-9 text-gray-400">
                    <div className="hidden flex-row items-start justify-start">
                      <div className="h-[22px] w-[22px] relative rounded-[3.66px] bg-aliceblue-200 overflow-hidden shrink-0">
                        <div className="absolute top-[-1.8px] left-[8.2px] leading-[26.53px]">
                          1
                        </div>
                      </div>
                    </div>
                    <div className="h-[22px] hidden flex-row items-start justify-start">
                      <img
                        className="h-[22px] w-[22px] relative overflow-hidden shrink-0 object-contain"
                        alt=""
                        src="/arrow--right-2-4@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[253.4px] rounded-[3.66px] flex flex-row items-center justify-start py-0 pr-[7px] pl-[7.300000000000182px] box-border">
                  <div className="flex flex-row items-center justify-center py-0 pr-[4.547473508864641e-13px] pl-0">
                    <div className="h-[43.9px] flex flex-row items-center justify-center pt-[7.299999999999955px] pb-[7.300000000000011px] pr-[7.300000000000182px] pl-[7.299999999999727px] box-border">
                      <img
                        className="h-[29.3px] w-[29.3px] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/setting.png"
                      />
                    </div>
                   <Link href="/user"><div className="flex flex-row items-center justify-center pt-[7.300000000000068px] pb-[7.299999999999955px] pr-[7.299999999999727px] pl-[7.300000000000182px] z-[1]">
                      <div className="relative tracking-[0.01em] leading-[22px] inline-block min-w-[60px]">
                        Settings
                      </div>
                    </div></Link> 
                  </div>
                  <div className="hidden flex-row items-start justify-start text-xs-9 text-gray-400">
                    <div className="flex flex-row items-start justify-start">
                      <div className="h-[22px] w-[22px] relative rounded-[3.66px] bg-aliceblue-200 overflow-hidden shrink-0">
                        <div className="absolute top-[-1.8px] left-[8.2px] leading-[26.53px]">
                          1
                        </div>
                      </div>
                    </div>
                    <div className="h-[22px] flex flex-row items-start justify-start">
                      <img
                        className="h-[22px] w-[22px] relative overflow-hidden shrink-0 object-contain"
                        alt=""
                        src="/arrow--right-2-5@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[541px] max-w-full text-[30px] text-gray-600 font-nunito mq450:min-w-full mq1875:min-w-full mq925:min-w-full mq1400:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[34px] max-w-full mq450:gap-[17px_34px]">
              <div className="flex flex-row items-start justify-start py-0 px-[39px]">
                <h3 className="m-0 relative text-inherit font-bold font-inherit mq450:text-[18px] mq925:text-[24px]">
                  Dashboard
                </h3>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start max-w-full text-7xl">
                <div className="self-stretch rounded-lg bg-white shadow-[0px_0px_12px_rgba(0,_0,_0,_0.16)] flex flex-row items-start justify-between pt-[17.399999999999977px] pb-[84.99999999999994px] pr-[22px] pl-[45.69999999999982px] box-border max-w-full gap-[20px] mq1875:flex-wrap mq925:pl-[23px] mq925:pt-5 mq925:pb-[55px] mq925:box-border">
                  <div className="h-[473.9px] w-[833.5px] relative rounded-lg bg-white shadow-[0px_0px_12px_rgba(0,_0,_0,_0.16)] hidden max-w-full" />
                  <div className="w-[348.6px] flex flex-col items-start justify-start gap-[1.1000000000000227px] min-w-[348.60000000000036px] max-w-full mq450:min-w-full mq1875:flex-1 mq1875:min-w-full mq925:min-w-full mq1400:min-w-full">
                    <div className="relative font-semibold inline-block min-w-[67px] z-[1] mq450:text-2xl">
                      Tasks
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[11.700000000000273px] box-border max-w-full text-xl text-aliceblue-100">
                      <div className="h-[335.2px] flex-1 relative max-w-full z-[1]">
                        <div className="absolute top-[0px] left-[0px] w-[336.9px] h-[335.2px] flex items-center justify-center">
                          <img
                            className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.048)]"
                            alt=""
                            src="/Group 654.png"
                          />
                        </div>
                        <div className="absolute top-[98.1px] left-[83.5px] font-semibold inline-block w-[43px] h-[31.2px] min-w-[43px] z-[1] mq450:text-base">
                          32%
                        </div>
                        <div className="absolute top-[0px] left-[168.4px] w-[168.4px] flex flex-col items-start justify-start pt-[98.19999999999992px] px-0 pb-[5.684341886080803e-14px] box-border gap-[38.19999999999993px]">
                          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[2] flex items-center justify-center">
                           
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 px-[46px]">
                            <div className="h-[31.2px] relative font-semibold inline-block min-w-[43px] z-[3] mq450:text-base">
                              25%
                            </div>
                          </div>
                          <div className="self-stretch h-[167.6px] relative">
                            <div className="absolute top-[0px] left-[0px] w-[168.4px] h-[167.6px] z-[3] flex items-center justify-center">
                             
                            </div>
                            <div className="absolute top-[47.3px] left-[48.8px] font-semibold inline-block w-[49.9px] h-[31.2px] z-[4] mq450:text-base">
                              25%
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-[0px] left-[0px] w-full h-full">
                          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-firebrick shadow-[0px_0px_8px_rgba(0,_0,_0,_0.16)] w-full h-full z-[1]" />
                          <div className="absolute top-[251px] left-[109px] font-semibold inline-block w-[49.9px] h-[31.2px] z-[2] mq450:text-base">
                            18%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[310.3px] flex flex-col items-start justify-start pt-[6.7000000000000455px] px-0 pb-0 box-border min-w-[310.3000000000002px] text-xl text-darkslategray-300 mq1875:flex-1">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start pt-[120.10000000000002px] px-0 pb-0">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[20.65000000000003px]">
                          <div className="self-stretch flex flex-row items-start justify-start gap-[11px]">
                            <div className="flex flex-col items-start justify-start pt-[7.199999999999932px] px-0 pb-0">
                              <div className="w-[14.4px] h-[13.4px] relative bg-teal-100 z-[1]" />
                            </div>
                            <div className="flex-1 relative font-semibold z-[1] mq450:text-base">
                              Completed
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[11px]">
                            <div className="flex flex-col items-start justify-start pt-[7.199999999999932px] px-0 pb-0">
                              <div className="w-[14.4px] h-[13.4px] relative bg-slateblue z-[1]" />
                            </div>
                            <div className="flex-1 relative font-semibold z-[1] mq450:text-base">
                              On Hold
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-[14.099999999999966px]">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[11px]">
                              <div className="flex flex-col items-start justify-start pt-[7.199999999999989px] px-0 pb-0">
                                <div className="w-[14.4px] h-[13.4px] relative bg-deepskyblue z-[1]" />
                              </div>
                              <div className="flex-1 relative font-semibold z-[1] mq450:text-base">
                                <p className="m-0">On Progress</p>
                                <p className="m-0">&nbsp;</p>
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start gap-[13.999999999999543px]">
                              <div className="flex flex-col items-start justify-start pt-[8.699999999999989px] px-0 pb-0">
                                <div className="w-[14.4px] h-[13.4px] relative bg-firebrick z-[1]" />
                              </div>
                              <div className="h-[31.2px] flex-1 relative font-semibold inline-block z-[1] mq450:text-base">
                                Pending
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[51.6px] flex flex-row items-start justify-start pt-[13.799999999999956px] pb-[12.600000000000025px] pr-2 pl-3 box-border relative gap-[6.199999999999818px] ml-[-51.7px] text-mini text-teal-100">
                        <div className="h-[25.4px] w-[24.3px] relative bg-gray-1000 overflow-hidden shrink-0 hidden z-[0]" />
                        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-md bg-teal-200 z-[2]" />
                        <div className="flex flex-col items-start justify-start pt-[2.6000000000000227px] px-0 pb-0">
                          <div className="relative inline-block min-w-[72px] z-[3]">
                            This Week
                          </div>
                        </div>
                        <img
                          className="h-[25.2px] w-[17.7px] relative overflow-hidden shrink-0 min-h-[25px] z-[3]"
                          alt=""
                          src="/arrow--down-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[608.4px] rounded-lg bg-white shadow-[0px_0px_12px_rgba(0,_0,_0,_0.16)] flex flex-col items-end justify-start pt-[93px] px-[20.40000000000009px] pb-[160.89999999999998px] box-border gap-[117.4px] max-w-full z-[4] mt-[-13.9px] mq450:gap-[29px_117.4px] mq925:gap-[59px_117.4px] mq925:pb-[105px] mq925:box-border">
                  <div className="w-[608.4px] h-[469.9px] relative rounded-lg bg-white shadow-[0px_0px_12px_rgba(0,_0,_0,_0.16)] hidden max-w-full" />
                  <div className="w-[533px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
                    <div className="h-[40.1px] w-[161.2px] relative font-semibold inline-block shrink-0 [debug_commit:1cbd860] z-[1] mq450:text-2xl">
                      Work Log
                    </div>
                    <div className="h-[56.6px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border text-mini text-teal-100">
                      <div className="flex-1 flex flex-row items-start justify-start pt-[15px] px-2.5 pb-[11.400000000000006px] relative gap-[6.199999999999818px] shrink-0 [debug_commit:1cbd860]">
                        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-md bg-teal-200 z-[1]" />
                        <div className="flex flex-col items-start justify-start pt-[2.5999999999999943px] px-0 pb-0">
                          <div className="relative inline-block min-w-[72px] z-[2]">
                            This Week
                          </div>
                        </div>
                        <img
                          className="h-[25.2px] w-[17.7px] relative overflow-hidden shrink-0 min-h-[25px] z-[2]"
                          alt=""
                          src="/arrow--down-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[263px] flex flex-row items-start justify-end py-0 px-[58px] box-border text-xs text-black font-secondary-text mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                        <div className="flex-1 relative z-[6]">Project 1</div>
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <div className="w-[9px] h-[9px] relative rounded-[50%] bg-color-2 z-[5]" />
                        </div>
                        <div className="flex-1 relative z-[5]">Project 2</div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                        <div className="flex-1 relative z-[6]">Project 4</div>
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <div className="w-[9px] h-[9px] relative rounded-[50%] bg-color-5 z-[5]" />
                        </div>
                        <div className="flex-1 relative z-[5]">Project 5</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-[60.1px] flex flex-col items-start justify-start pt-[29px] px-0 pb-0 box-border">
          <img
            className="w-[29px] h-[31.1px] relative shrink-0 [debug_commit:1cbd860]"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </main>
      <div className="w-[390.2px] h-[390.2px] absolute !m-[0] bottom-[35.8px] left-[327px]">
        <img
          className="absolute top-[0px] left-[0px] w-[390.2px] h-[390.2px] z-[5]"
          loading="lazy"
          alt=""
          src="/Group 655.png"
        />
        <div className="absolute top-[203px] left-[374px] rounded-[50%] bg-color-1 w-[9px] h-[9px] z-[6]" />
        <div className="absolute top-[177px] left-[374px] rounded-[50%] bg-color-4 w-[9px] h-[9px] z-[6]" />
      </div>
    </div>
  );
};

export default UserDasboard;
