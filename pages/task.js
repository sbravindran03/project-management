import { useCallback } from "react";
import Top6 from "../Components/top6";
import NavList5 from "../Components/nav-list5";
import KotlinEngine from "../Components/kotlin-engine";
import FrameComponent from "../Components/frame-component";
import Link from 'next/link';

const UserTaskKanbanBoard = () => {
  const onDottedButtonClick = useCallback(() => {
    // Please sync "Admin_Create-Tasks" to the project
  }, []);

  const onDottedButton2Click = useCallback(() => {
    // Please sync "Admin_Create-Tasks" to the project
  }, []);

  const onDottedButton3Click = useCallback(() => {
    // Please sync "Admin_Create-Tasks" to the project
  }, []);

  return (
    <div className="w-full relative bg-aliceblue-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border tracking-[normal]">
      <Top6 />
      <main className="w-[1851px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[42px] max-w-full mq1050:pl-5 mq1050:box-border mq450:gap-[42px_21px]">
        <div className="h-[1071px] w-[314px] bg-white shadow-[0px_3px_35.16px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start py-4 pr-[29px] pl-4 box-border mq1050:hidden mq450:gap-[16px_32px]">
          <NavList5 />
        </div>
        <section className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-[calc(100%_-_356px)] text-left text-6xl text-lightslategray font-nunito mq1050:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
            <div className="flex flex-row items-start justify-between py-0 px-0.5 w-full">
              <h2 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[64px] mq450:text-xl">
                Tasks
              </h2>
              <Link href="/taskc"> 
                <button className="ml-[-12px] cursor-pointer [border:none] py-[20px] pr-10 px-[50px] bg-blue-700 flex-1 rounded-[15px] flex flex-row items-start justify-start hover:bg-dodgerblue">
                    <div className="relative text-lg leading-[20px]  font-medium font-secondary-text text-white text-left inline-block min-w-[58px]">
                      Create
                    </div>
                </button></Link>
            </div>
            <div className="self-stretch rounded-lg bg-white shadow-[0px_2px_3px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start pt-[30px] px-[30px] pb-[18px] box-border gap-[29px] max-w-full text-3xl text-light-version-type-dark font-roboto mq1000:pt-5 mq1000:pb-5 mq1000:box-border">
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-7 gap-[10px]">
                <h3 className="m-0 relative text-inherit leading-[28px] font-medium font-inherit inline-block min-w-[91px] mq450:text-lg mq450:leading-[22px]">
                  Overview
                </h3>
                <div className="relative text-sm leading-[129.1%] font-light text-light-version-type-light">
                  Edit or modify all card as you want
                </div>
              </div>
              <img
                className="w-[1102px] h-px relative max-h-full max-w-full"
                alt=""
                src="/vector-673.svg"
              />
              <div className="w-[1388px] flex flex-col items-start justify-start gap-[34px] max-w-full text-mini-2 text-light-version-type-light font-body-body-2 mq725:gap-[17px_34px]">
                <div className="w-[693px] flex flex-row flex-wrap items-start justify-start gap-[38px] max-w-full mq725:gap-[19px]">
                  <div className="flex-1 rounded-lg bg-aliceblue-100 overflow-hidden flex flex-row items-start justify-start pt-3.5 px-[15px] pb-[19px] box-border gap-[10px] min-w-[115px] max-w-full">
                    <div className="h-3.5 hidden flex-row items-center justify-center gap-[10px]">
                      <img
                        className="h-3.5 w-[18px] relative overflow-hidden shrink-0 min-h-[14px]"
                        alt=""
                        src="/iconshow-password.svg"
                      />
                      <img
                        className="h-3.5 w-[18px] relative overflow-hidden shrink-0 min-h-[14px]"
                        alt=""
                        src="/iconhide-password.svg"
                      />
                    </div>
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden min-h-[18px]"
                      alt=""
                      src="/iconshow-password.svg"
                    />
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
                      alt=""
                      src="/iconsearch.svg"
                    />
                    <input
                      className="w-[97px] [border:none] [outline:none] font-light font-roboto text-sm bg-[transparent] h-[18px] relative leading-[129.1%] text-light-version-type-light text-left inline-block p-0"
                      placeholder="Search Projects"
                      type="text"
                    />
                  </div>
                  <div className="h-[51px] w-[218px] rounded-lg bg-aliceblue-100 overflow-x-auto shrink-0 flex flex-row items-start justify-start pt-3.5 px-[15px] pb-[18px] box-border gap-[10px]">
                    <img
                      className="h-3.5 w-[18px] relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/iconshow-password.svg"
                    />
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/iconcalendar.svg"
                    />
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/iconshow-password.svg"
                    />
                    <div className="w-[119px] shrink-0 flex flex-col items-start justify-start">
                      <div className="relative inline-block min-w-[59px]">
                        List View
                      </div>
                    </div>
                    <div className="h-4 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                      <img
                        className="w-4 h-3.5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/icondown.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[38px] max-w-full text-base text-light-version-type-dark font-roboto mq725:gap-[19px]">
                  <div className="flex-1 rounded-lg bg-white shadow-[0px_2px_3px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[92px] box-border gap-[20px] min-w-[328px] max-w-full mq725:pb-[60px] mq725:box-border">
                    <div className="self-stretch bg-aliceblue-100 overflow-hidden flex flex-row items-start justify-between pt-[13px] pb-[11px] pr-[26px] pl-5 gap-[20px]">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[58px]">
                        Backlog
                      </div>
                      <div className="h-[26px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                        <img
                          className="w-6 h-6 relative overflow-hidden shrink-0"
                          alt=""
                          src="/iconmenu.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch h-10 flex flex-row items-start justify-start py-0 pr-[26px] pl-5 box-border max-w-full">
                      <img
                        className="h-10 flex-1 relative rounded-lg max-w-full overflow-hidden cursor-pointer"
                        alt=""
                        src="/dotted-button.svg"
                        onClick={onDottedButtonClick}
                      />
                    </div>
                    <KotlinEngine
                      foodResearch="Food Research"
                      foodDesignIsRequiredForOu="Food design is required for our new project"
                      letsResearchTheBestPracti="let’s research the best practices."
                      prop="5"
                      iconmessage3="/iconmessage-3.svg"
                      prop1="8"
                      frame1184="/frame-1184@2x.png"
                      frame11841="/frame-1184-1@2x.png"
                      frame11842="/frame-1184-2@2x.png"
                    />
                    <KotlinEngine
                      foodResearch="Mockups"
                      foodDesignIsRequiredForOu="Create a 12 mockups for mobile iphone 13"
                      letsResearchTheBestPracti="pro max"
                      prop="3"
                      iconmessage3="/iconmessage-3.svg"
                      prop1="6"
                      frame1184="/frame-1184-3@2x.png"
                      frame11841="/frame-1184-4@2x.png"
                      frame11842="/frame-1184-5@2x.png"
                      propMinWidth="66px"
                    />
                    <KotlinEngine
                      foodResearch="UI Animation"
                      foodDesignIsRequiredForOu="Micro interaction loading and progress, "
                      letsResearchTheBestPracti="story telling, Navigation"
                      prop="2"
                      iconmessage3="/iconattachment.svg"
                      prop1="4"
                      frame1184="/frame-1184@2x.png"
                      frame11841="/frame-1184-7@2x.png"
                      frame11842="/frame-1184-3@2x.png"
                      propMinWidth="93px"
                    />
                  </div>
                  <div className="flex-1 rounded-lg bg-white shadow-[0px_2px_3px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[92px] box-border gap-[20px] min-w-[328px] max-w-full mq725:pb-[60px] mq725:box-border">
                    <div className="self-stretch bg-aliceblue-100 overflow-hidden flex flex-row items-start justify-between pt-[13px] pb-[11px] pr-[27px] pl-5 gap-[20px]">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[81px]">
                        In progress
                      </div>
                      <div className="h-[26px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                        <img
                          className="w-6 h-6 relative overflow-hidden shrink-0"
                          alt=""
                          src="/iconmenu.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch h-10 flex flex-row items-start justify-start py-0 pr-[27px] pl-5 box-border max-w-full">
                      <img
                        className="h-10 flex-1 relative rounded-lg max-w-full overflow-hidden cursor-pointer"
                        alt=""
                        src="/dotted-button.svg"
                        onClick={onDottedButton2Click}
                      />
                    </div>
                    <FrameComponent
                      userInterface="User interface"
                      designNewUserInterfaceDes="Design new user interface design for "
                      foodDeliveryApp="food delivery app"
                      prop="2"
                      iconmessage3="/iconmessage-3.svg"
                      prop1="4"
                      frame1184="/frame-1184@2x.png"
                      frame11841="/frame-1184-1@2x.png"
                      frame11842="/frame-1184-11@2x.png"
                    />
                    <FrameComponent
                      userInterface="Usability Testing"
                      designNewUserInterfaceDes="Perform the usability testing for the newly"
                      foodDeliveryApp="develop app"
                      prop="3"
                      iconmessage3="/iconmessage-3.svg"
                      prop1="5"
                      frame1184="/frame-1184-5@2x.png"
                      frame11841="/frame-1184-13@2x.png"
                      frame11842="/frame-1184-2@2x.png"
                      propAlignSelf="stretch"
                      propWidth="unset"
                      propMinWidth="119px"
                    />
                    <FrameComponent
                      userInterface="Food Research"
                      designNewUserInterfaceDes="Food design is required for our new project"
                      foodDeliveryApp="let’s research the best practices."
                      prop="5"
                      iconmessage3="/iconattachment.svg"
                      prop1="9"
                      frame1184="/frame-1184-15@2x.png"
                      frame11841="/frame-1184-1@2x.png"
                      frame11842="/frame-1184-17@2x.png"
                      propAlignSelf="stretch"
                      propWidth="unset"
                      propMinWidth="107px"
                    />
                  </div>
                  <div className="flex-1 rounded-lg bg-white shadow-[0px_2px_3px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[92px] box-border gap-[20px] min-w-[328px] max-w-full mq725:pb-[60px] mq725:box-border">
                    <div className="self-stretch bg-aliceblue-100 overflow-hidden flex flex-row items-start justify-between pt-[13px] pb-[11px] pr-[31px] pl-5 gap-[20px]">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[79px]">
                        Completed
                      </div>
                      <div className="h-[26px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                        <img
                          className="w-6 h-6 relative overflow-hidden shrink-0"
                          alt=""
                          src="/iconmenu.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[426px] h-10 flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
                      <img
                        className="h-10 flex-1 relative rounded-lg max-w-full overflow-hidden cursor-pointer"
                        alt=""
                        src="/dotted-button-2.svg"
                        onClick={onDottedButton3Click}
                      />
                    </div>
                    <FrameComponent
                      userInterface="Mind Mapping"
                      designNewUserInterfaceDes="Mind mapping for the food delivery app for"
                      foodDeliveryApp="by targeting young users"
                      prop="7"
                      iconmessage3="/iconmessage-3.svg"
                      prop1="2"
                      frame1184="/frame-1184-18@2x.png"
                      frame11841="/frame-1184-1@2x.png"
                      frame11842="/frame-1184-20@2x.png"
                      propAlignSelf="unset"
                      propWidth="426px"
                      propMinWidth="103px"
                    />
                    <FrameComponent
                      userInterface="Food Research"
                      designNewUserInterfaceDes="Food design is required for our new project"
                      foodDeliveryApp="let’s research the best practices."
                      prop="5"
                      iconmessage3="/iconmessage-3.svg"
                      prop1="5"
                      frame1184="/frame-1184@2x.png"
                      frame11841="/frame-1184-22@2x.png"
                      frame11842="/frame-1184-5@2x.png"
                      propAlignSelf="unset"
                      propWidth="426px"
                      propMinWidth="107px"
                    />
                    <FrameComponent
                      userInterface="User Feedback"
                      designNewUserInterfaceDes="Perform the user survey and take necessary "
                      foodDeliveryApp="steps to solve their problem with existing one"
                      prop="5"
                      iconmessage3="/iconattachment.svg"
                      prop1="8"
                      frame1184="/frame-1184@2x.png"
                      frame11841="/frame-1184-1@2x.png"
                      frame11842="/frame-1184-2@2x.png"
                      propAlignSelf="unset"
                      propWidth="426px"
                      propMinWidth="107px"
                    />
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

export default UserTaskKanbanBoard;
