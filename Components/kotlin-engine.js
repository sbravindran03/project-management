import { useMemo } from "react";

const KotlinEngine = ({
  foodResearch,
  foodDesignIsRequiredForOu,
  letsResearchTheBestPracti,
  prop,
  iconmessage3,
  prop1,
  frame1184,
  frame11841,
  frame11842,
  propMinWidth,
}) => {
  const foodResearchStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[26px] pl-5 box-border max-w-full text-left text-sm text-light-version-type-light font-roboto">
      <div className="flex-1 rounded-lg bg-white shadow-[0px_0px_3px_1px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-col items-start justify-start pt-[15px] px-[15px] pb-2.5 box-border gap-[15.5px] max-w-full">
        <div className="w-[283px] h-[25px] flex flex-row items-start justify-between gap-[20px] text-base text-light-version-type-dark">
          <div
            className="relative leading-[24px] font-medium inline-block min-w-[107px]"
            style={foodResearchStyle}
          >
            {foodResearch}
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-sm text-light-version-type-light">
            <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/iconclock-unfill.svg"
              />
              <div className="relative leading-[129.1%] font-light inline-block min-w-[50px]">
                12 Days
              </div>
            </div>
          </div>
        </div>
        <div className="relative leading-[129.1%] font-light">
          <p className="m-0">{foodDesignIsRequiredForOu}</p>
          <p className="m-0">{letsResearchTheBestPracti}</p>
        </div>
        <div className="w-[277px] flex flex-row items-end justify-between gap-[20px]">
          <div className="h-[21px] w-[102px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
            <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-[20px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/iconattachment.svg"
                />
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="relative leading-[129.1%] font-light inline-block min-w-[8px]">
                    {prop}
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src={iconmessage3}
                />
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="relative leading-[129.1%] font-light inline-block min-w-[8px]">
                    {prop1}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[26px] flex flex-row items-end justify-start gap-[5px]">
            <img
              className="h-6 w-6 relative"
              loading="lazy"
              alt=""
              src="/icon-button.svg"
            />
            <div className="h-[26px] flex flex-row items-start justify-start">
              <img
                className="h-[26px] w-[26px] relative object-cover min-h-[26px] shrink-0 [debug_commit:1cbd860]"
                alt=""
                src={frame1184}
              />
              <img
                className="h-[26px] w-[26px] relative object-cover min-h-[26px] shrink-0 [debug_commit:1cbd860] z-[1] ml-[-6.5px]"
                alt=""
                src={frame11841}
              />
              <img
                className="h-[26px] w-[26px] relative object-cover min-h-[26px] shrink-0 [debug_commit:1cbd860] z-[2] ml-[-6.5px]"
                loading="lazy"
                alt=""
                src={frame11842}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KotlinEngine;
