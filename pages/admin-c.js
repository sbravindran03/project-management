import { useCallback } from "react";
import NavList2 from "../Components/nav-list2";
import { useRouter } from "next/router";
import GroupComponent3 from "../Components/group-component3";
import GroupComponent2 from "../Components/group-component2";
import Link from 'next/link';
const AdminCreateIssues = () => {
  const router = useRouter();

  const onFrameContainer1Click = useCallback(() => {
    router.push("/admin-create-project");
  }, [router]);

  return (
    <div className="w-full relative bg-aliceblue-100 overflow-hidden flex flex-col items-start justify-start gap-[1px] tracking-[normal]">
      <header className="ml-[-5px] self-stretch h-[90px] bg-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.16)] flex flex-row items-start justify-between pt-[11px] pb-2.5 pr-[35px] pl-0 box-border sticky top-[0] z-[99] gap-[20px] max-w-full text-left text-6xl text-darkslategray-400 font-secondary-text">
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
          <div className="self-stretch flex flex-row items-start justify-start gap-[42px] max-w-full mq750:gap-[42px_21px]">
            <div className="h-11 w-[417px] rounded-md bg-white box-border flex flex-row items-start justify-start pt-2.5 px-[16.799999999999955px] pb-3 gap-[16px] max-w-full z-[1] border-[1px] border-solid border-lightslategray">
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
            <div className="w-[177px] flex flex-row items-start justify-start gap-[9px]">
              <div className="flex-1 flex flex-col items-start justify-start pt-[17px] px-0 pb-0">
                <div className="self-stretch relative z-[1]">USER</div>
              </div>
              <div className="h-[49px] w-[50px] relative">
                <img
                  className="absolute top-[0px] left-[0px] w-[50px] h-[49px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/ellipse-181.svg"
                />
                <div className="absolute top-[5px] left-[31.2px] w-[18.8px] h-[18px] hidden z-[2]" />
              </div>
            </div>
          </div>
        </div>
        <h3 className="!m-[0] absolute bottom-[25px] left-[91px] text-xl font-semibold font-manrope text-gray-700 whitespace-nowrap z-[2]">
          INTEGRATED TRACKING COORDINATION HUB
        </h3>
      </header>
      <main className="self-stretch h-[1069px] flex flex-row items-start justify-start pt-0 pb-[157px] pr-[15px] pl-[363px] box-border gap-[54px] max-w-full lg:pl-[181px] lg:box-border mq450:pl-5 mq450:box-border mq750:h-auto mq750:gap-[54px_27px] mq750:pl-[90px] mq750:pb-[66px] mq750:box-border mq1050:pb-[102px] mq1050:box-border">
        <div className="ml-[-368px] h-[1071px] w-[314px] bg-white shadow-[0px_3px_35.16px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start py-4 pr-[29px] pl-4 box-border shrink-0 [debug_commit:1cbd860] mq450:gap-[16px_32px]">
          <NavList2 />
        </div>
        <section className="w-[1489.1px] flex flex-col items-start justify-start pt-[43px] px-0 pb-0 box-border max-w-full shrink-0 mq450:pt-5 mq450:box-border mq1050:pt-7 mq1050:box-border">
          <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[33px] shrink-0 [debug_commit:1cbd860] mq750:gap-[16px_33px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[7px] pl-0.5 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
                <div className="w-[161.1px] flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border">
                  <h1 className="m-0 self-stretch relative text-11xl font-semibold font-nunito text-gray-600 text-left mq450:text-lg mq1050:text-5xl">
                    Issues
                  </h1>
                </div>
                <div
                  className="w-[179px] flex flex-row items-start justify-start pt-[13px] pb-[7px] pr-5 pl-0 box-border cursor-pointer"
                  onClick={onFrameContainer1Click}
                >
                 <Link href="/issues"> <button className="ml-[-12px] cursor-pointer [border:none] py-[18px] px-[50.5px] bg-blue-700 flex-1 rounded-mini flex flex-row items-start justify-start hover:bg-dodgerblue">
                    <div className="relative text-lg leading-[20px] font-medium font-secondary-text text-white text-left inline-block min-w-[58px]">
                      Create
                    </div>
                  </button></Link>
                </div>
              </div>
            </div>
            <div className="w-[1441.1px] flex flex-row items-start justify-start pt-0 pb-[22.5px] pr-5 pl-0 box-border max-w-full">
              <div className="flex-1 overflow-x-auto flex flex-row items-start justify-start gap-[12px] max-w-full">
                <div className="w-[465.7px] shrink-0 flex flex-row items-start justify-start max-w-full">
                  <div className="flex-1 rounded-2xl bg-white flex flex-col items-start justify-start pt-[26px] px-[17.5px] pb-[8.300000000000011px] box-border gap-[86.19999999999999px] max-w-full mq450:gap-[43px_86.2px]">
                    <div className="w-[465.7px] h-[316.5px] relative rounded-2xl bg-white hidden max-w-full" />
                    <div className="w-[420.5px] flex flex-col items-end justify-start gap-[29.600000000000023px] max-w-full">
                      <div className="self-stretch h-[44.4px] flex flex-col items-start justify-start gap-[13.099999999999966px]">
                        <div className="w-[141.5px] flex-1 flex flex-row items-start justify-between gap-[20px]">
                          <input
                            className="w-20 [border:none] [outline:none] inline-block font-secondary-text text-6xl bg-[transparent] h-[30px] relative font-bold text-black text-left p-0 z-[1] mq450:text-xl"
                            placeholder="Issues"
                            type="text"
                          />
                          <input
                            className="m-0 h-[24.3px] w-[25px] relative z-[1]"
                            type="checkbox"
                          />
                        </div>
                        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-black" />
                      </div>
                      <div className="self-stretch relative text-smi leading-[21px] font-medium font-secondary-text text-darkslategray-100 text-justify z-[1]">
                        <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do `}</p>
                        <p className="m-0 whitespace-pre-wrap">
                          eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                        </p>
                      </div>
                    </div>
                    <div className="w-[153.3px] flex flex-row items-start justify-start py-0 pr-[5px] pl-[4.899999999999999px] box-border">
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[10.5px] pl-0">
                          <div className="w-[41.3px] h-[38px] relative rounded-[50%] box-border shrink-0 [debug_commit:1cbd860] z-[1] border-[0px] border-solid border-white" />
                        </div>
                        <div className="h-[38px] w-[41.3px] relative rounded-[50%] box-border shrink-0 [debug_commit:1cbd860] z-[2] ml-[-19.3px] border-[0px] border-solid border-white" />
                        <div className="w-[46.6px] flex flex-col items-start justify-start py-0 pr-[12.099999999999994px] pl-0 box-border ml-[-19.3px]">
                          <div className="w-[34.5px] h-[35.5px] relative rounded-[50%] box-border shrink-0 [debug_commit:1cbd860] z-[3] border-[0px] border-solid border-white" />
                        </div>
                        <div className="w-[46.5px] flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border ml-[-19.3px]">
                          <div className="w-[34.5px] h-[35.5px] relative rounded-[50%] box-border shrink-0 [debug_commit:1cbd860] z-[4] border-[0px] border-solid border-white" />
                        </div>
                        <div className="h-[35.5px] w-[34.5px] relative shrink-0 [debug_commit:1cbd860] ml-[-19.3px]">
                          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-mistyrose box-border w-full h-full z-[5] border-[0px] border-solid border-white" />
                          <div className="absolute top-[9.3px] left-[8.2px] text-mini capitalize font-medium font-secondary-text text-indianred text-left inline-block w-[19px] h-[18.7px] min-w-[19px] z-[6]">
                            +2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <GroupComponent3 />
                <GroupComponent3 />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[40.5px] max-w-full mq750:gap-[20px_40.5px]">
              <div className="w-[1489.1px] overflow-x-auto flex flex-row items-start justify-start gap-[11.950000000000044px] max-w-full">
                <GroupComponent2 />
                <GroupComponent2
                  propPadding="unset"
                  propDebugCommit="unset"
                  propDebugCommit1="unset"
                  propDebugCommit2="unset"
                  propDebugCommit3="unset"
                  propFlexWrap="unset"
                  propDebugCommit4="unset"
                  propDebugCommit5="unset"
                />
                <GroupComponent2
                  propPadding="0"
                  propDebugCommit="unset"
                  propDebugCommit1="unset"
                  propDebugCommit2="unset"
                  propDebugCommit3="unset"
                  propFlexWrap="unset"
                  propDebugCommit4="unset"
                  propDebugCommit5="unset"
                />
              </div>
              <div className="w-[1457px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                    <div className="relative text-xs font-medium font-montserrat text-darkgray-100 text-left inline-block min-w-[53px]">
                      Previous
                    </div>
                  </div>
                  <div className="w-[31px] rounded-lg bg-darkslateblue flex flex-row items-start justify-start py-2 px-[9px] box-border">
                    <div className="flex-1 relative text-xs font-medium font-montserrat text-white text-center">
                      1
                    </div>
                  </div>
                  <div className="w-[31px] rounded-lg bg-gainsboro-100 flex flex-row items-start justify-start py-2 px-[9px] box-border">
                    <div className="flex-1 relative text-xs font-medium font-montserrat text-black text-center">
                      2
                    </div>
                  </div>
                  <div className="w-[31px] rounded-lg bg-gainsboro-100 flex flex-row items-start justify-start py-2 px-[9px] box-border">
                    <div className="flex-1 relative text-xs font-medium font-montserrat text-black text-center">
                      3
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                    <div className="relative text-xs font-medium font-montserrat text-darkgray-100 text-left inline-block min-w-[29px]">
                      Next
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default AdminCreateIssues;
