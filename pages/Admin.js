import { useCallback } from "react";
import Top2 from "../Components/top2";
import NavList from "../Components/nav-list";
import GroupComponent1 from "../Components/group-component1";
import GroupComponent from "../Components/group-component";
import Link from 'next/link';

const AdminCreateProjects = () => {
  const onFrameContainer1Click = useCallback(() => {
    // Please sync "Admin_Create Project" to the project
  }, []);

  return (
    <div className="w-full relative bg-aliceblue-100 overflow-hidden flex flex-col items-start justify-start gap-[1px] tracking-[normal]">
      <Top2 />
      <main className="self-stretch h-[1069px] flex flex-row items-start justify-start pt-0 pb-[157px] pr-[15px] pl-[363px] box-border gap-[54px] max-w-full lg:pl-[181px] lg:box-border mq450:pl-5 mq450:box-border mq750:h-auto mq750:gap-[54px_27px] mq750:pl-[90px] mq750:pb-[66px] mq750:box-border mq1050:pb-[102px] mq1050:box-border">
        <div className="ml-[-368px] h-[1071px] w-[314px] bg-white shadow-[0px_3px_35.16px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start py-4 pr-[29px] pl-4 box-border shrink-0 [debug_commit:1cbd860] mq450:gap-[16px_32px]">
          <NavList />
        </div>
        <section className="w-[1489.1px] flex flex-col items-start justify-start pt-[43px] px-0 pb-0 box-border max-w-full shrink-0 text-left text-11xl text-gray-600 font-nunito mq450:pt-5 mq450:box-border mq1050:pt-7 mq1050:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[33px] shrink-0 [debug_commit:1cbd860] mq750:gap-[16px_33px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[7px] pl-0.5 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
                <div className="w-[161.1px] flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border">
                  <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-lg mq1050:text-5xl">
                    Projects
                  </h1>
                </div>
                <div
                  className="w-[179px] flex flex-row items-start justify-start pt-[13px] pb-[7px] pr-5 pl-0 box-border cursor-pointer"
                  onClick={onFrameContainer1Click}
                >
                 <Link href="/admin-create-project"> <button className="ml-[-12px] cursor-pointer [border:none] py-[18px] px-[50.5px] bg-blue-700 flex-1 rounded-[15px] flex flex-row items-start justify-start hover:bg-dodgerblue">
                    <div className="relative text-lg leading-[20px]  font-medium font-secondary-text text-white text-left inline-block min-w-[58px]">
                      Create
                    </div>
                  </button></Link>
                </div>
              </div>
            </div>
            <div className="w-[1489.1px] overflow-x-auto flex flex-col items-start justify-start gap-[55.5px] max-w-full text-6xl text-black font-secondary-text mq750:gap-[28px_55.5px]">
              <div className="w-[1489.1px] flex flex-row items-start justify-start gap-[11.950000000000273px]">
                <GroupComponent1
                  aIPoweredPersonalizedFitn="AI-Powered Personalized Fitness Coach:"
                  createAFitnessAppWithAIPr="Create a fitness app with AI providing tailored workout plans and nutrition advice. Features include personalized plans, machine learning for adaptation, workout tracking, meal planning, and integration with wearables for monitoring"
                  ellipse12="/ellipse-12@2x.png"
                  ellipse13="/ellipse-13@2x.png"
                  ellipse15="/ellipse-15@2x.png"
                  ellipse14="/ellipse-14@2x.png"
                />
                <div className="flex flex-row items-start justify-start py-0 pr-[23px] pl-0 box-border max-w-full">
                  <div className="w-[465.7px] rounded-2xl bg-white flex flex-col items-start justify-start pt-[21px] pb-[8.300000000000011px] pr-[10.300000000000182px] pl-[17.400000000000546px] box-border gap-[29.600000000000023px] max-w-full">
                    <div className="w-[465.7px] h-[316.5px] relative rounded-2xl bg-white hidden max-w-full" />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12.799999999999956px] max-w-full">
                      <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
                        <div className="h-[30.3px] flex flex-row items-start justify-start gap-[28.599999999999454px]">
                          <h2 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[88px] z-[1] mq450:text-xl">
                            Project
                          </h2>
                          <input
                            className="m-0 h-[24.3px] w-[25px] relative z-[1]"
                            type="checkbox"
                          />
                        </div>
                        <div className="h-[35.6px] w-[108.4px] relative text-xs text-firebrick-200">
                          <div className="absolute top-[0px] left-[0px] rounded bg-rosybrown w-20 h-[35px] z-[1]" />
                          <div className="absolute top-[10.4px] left-[19px] font-medium inline-block w-[89.4px] h-[25.2px] z-[2]">
                            Offtrack
                          </div>
                        </div>
                      </div>
                      <div className="w-[421.4px] h-px relative box-border max-w-full z-[1] border-t-[1px] border-solid border-black" />
                    </div>
                    <div className="w-[420px] flex flex-row items-start justify-start pt-0 px-0 pb-[17.399999999999977px] box-border max-w-full text-smi text-darkslategray-100">
                      <div className="flex-1 relative leading-[21px] font-medium inline-block max-w-full z-[1]">
                        <p className="m-0">AI Language Learning Platform:</p>
                        <p className="m-0">
                          An app with an AI tutor for personalized language
                          lessons, pronunciation correction, interactive
                          exercises, and progress tracking.
                        </p>
                      </div>
                    </div>
                    <div className="w-[470.3px] flex flex-col items-start justify-start gap-[22.19999999999999px] max-w-[107%] shrink-0 text-sm text-crimson">
                      <div className="h-[17px] flex flex-row items-start justify-start gap-[8.199999999999818px]">
                        <img
                          className="h-[17px] w-[10.8px] relative min-h-[17px] z-[1]"
                          alt=""
                          src="/-icon-hourglass-end.svg"
                        />
                        <div className="relative font-medium inline-block min-w-[100px] z-[1]">
                          05 APRIL 2024
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[4.300000000000182px] box-border max-w-full text-mini text-indianred">
                        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                          <div className="h-[38px] w-[143.6px] flex flex-row items-start justify-start">
                            <div className="h-[38px] flex-1 flex flex-col items-start justify-start py-0 pr-[10.600000000000364px] pl-0 box-border">
                              <img
                                className="w-[41.3px] h-[38px] relative rounded-[50%] object-cover shrink-0 [debug_commit:1cbd860] z-[1]"
                                alt=""
                                src="/ellipse-12-1@2x.png"
                              />
                            </div>
                            <img
                              className="h-[38px] w-[41.3px] relative rounded-[50%] object-cover min-h-[38px] shrink-0 [debug_commit:1cbd860] z-[2] ml-[-19.3px]"
                              alt=""
                              src="/ellipse-13-1@2x.png"
                            />
                            <div className="h-[35.5px] w-[46.5px] flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border ml-[-19.3px]">
                              <img
                                className="w-[34.5px] h-[35.5px] relative rounded-[50%] object-cover shrink-0 [debug_commit:1cbd860] z-[3]"
                                alt=""
                                src="/ellipse-15-1@2x.png"
                              />
                            </div>
                            <div className="h-[35.5px] w-[46.6px] flex flex-col items-start justify-start py-0 pr-[12.100000000000364px] pl-0 box-border ml-[-19.3px]">
                              <img
                                className="w-[34.5px] h-[35.5px] relative rounded-[50%] object-cover shrink-0 [debug_commit:1cbd860] z-[4]"
                                alt=""
                                src="/ellipse-14-1@2x.png"
                              />
                            </div>
                            <div className="h-[35.5px] w-[34.5px] relative shrink-0 [debug_commit:1cbd860] ml-[-19.3px]">
                              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-mistyrose box-border w-full h-full z-[5] border-[0px] border-solid border-white" />
                              <div className="absolute top-[9.3px] left-[8.2px] capitalize font-medium inline-block w-[19px] h-[18.7px] min-w-[19px] z-[6]">
                                +2
                              </div>
                            </div>
                          </div>
                          <div className="h-[29px] w-[119.4px] flex flex-col items-start justify-start pt-[8.100000000000023px] px-0 pb-0 box-border text-sm text-dimgray-200">
                            <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[3.800000000000182px]">
                              <img
                                className="h-[20.3px] w-[19.9px] relative shrink-0 [debug_commit:1cbd860] z-[1]"
                                alt=""
                                src="/group-628.svg"
                              />
                              <div className="flex-1 flex flex-col items-start justify-start pt-[1.8999999999999773px] px-0 pb-0">
                                <div className="self-stretch relative font-medium shrink-0 [debug_commit:1cbd860] z-[1]">
                                  14 issues
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <GroupComponent
                  virtualRealityHistoricalT="Virtual Reality Historical Tour:"
                  designAVRExperienceForExp="Design a VR experience for exploring historical landmarks and civilizations. Users immerse in accurate environments, interact with artifacts, and learn through narration, quizzes, and interactive elements.."
                  ellipse12="/ellipse-12-2@2x.png"
                  ellipse13="/ellipse-13-2@2x.png"
                  ellipse15="/ellipse-15-2@2x.png"
                  ellipse14="/ellipse-14-2@2x.png"
                />
              </div>
              <div className="w-[1489.1px] flex flex-col items-start justify-start gap-[40.5px] text-center text-xs text-darkgray-100 font-montserrat">
                <div className="flex flex-row items-start justify-start gap-[11.950000000000273px] max-w-full">
                  <GroupComponent
                    virtualRealityHistoricalT="AI-Powered Mental Health Companion:"
                    designAVRExperienceForExp="Develop a mobile app using AI for mental health support. Features include conversational interactions, mood tracking, personalized coping strategies based on CBT principles, and resources like meditation exercises"
                    ellipse12="/ellipse-12@2x.png"
                    ellipse13="/ellipse-13@2x.png"
                    ellipse15="/ellipse-15@2x.png"
                    ellipse14="/ellipse-14@2x.png"
                    propFlexWrap="unset"
                  />
                  <GroupComponent
                    virtualRealityHistoricalT="Smart Home Energy Management System:"
                    designAVRExperienceForExp="Create a system for optimizing energy usage in smart homes. Features include IoT device integration, machine learning for energy analysis, automated appliance scheduling, real-time monitoring, and renewable energy source integration"
                    ellipse12="/ellipse-12-1@2x.png"
                    ellipse13="/ellipse-13-1@2x.png"
                    ellipse15="/ellipse-15-1@2x.png"
                    ellipse14="/ellipse-14-1@2x.png"
                    propFlexWrap="unset"
                  />
                  <GroupComponent1
                    aIPoweredPersonalizedFitn="Food Waste Reduction App:"
                    createAFitnessAppWithAIPr="A mobile app to track groceries, receive recipe suggestions, share surplus food, coordinate donations, and incorporate gamification for waste reduction."
                    ellipse12="/ellipse-12-2@2x.png"
                    ellipse13="/ellipse-13-2@2x.png"
                    ellipse15="/ellipse-15-2@2x.png"
                    ellipse14="/ellipse-14-2@2x.png"
                    propGap="47px"
                    propGap1="29.59999999999999px"
                    propFlexWrap="unset"
                    propFlexWrap1="unset"
                  />
                </div>
                <div className="w-[1457px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <div className="flex flex-row items-start justify-start gap-[12px]">
                    <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 text-left">
                      <div className="relative font-medium inline-block min-w-[53px]">
                        Previous
                      </div>
                    </div>
                    <div className="w-[31px] rounded-lg bg-darkslateblue flex flex-row items-start justify-start py-2 px-[9px] box-border text-white">
                      <div className="flex-1 relative font-medium">1</div>
                    </div>
                    <div className="w-[31px] rounded-lg bg-gainsboro flex flex-row items-start justify-start py-2 px-[9px] box-border text-black">
                      <div className="flex-1 relative font-medium">2</div>
                    </div>
                    <div className="w-[31px] rounded-lg bg-gainsboro flex flex-row items-start justify-start py-2 px-[9px] box-border text-black">
                      <div className="flex-1 relative font-medium">3</div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 text-left">
                      <div className="relative font-medium inline-block min-w-[29px]">
                        Next
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminCreateProjects;
