import { useMemo } from "react";

const GroupComponent = ({
  virtualRealityHistoricalT,
  designAVRExperienceForExp,
  ellipse12,
  ellipse13,
  ellipse15,
  ellipse14,
  propFlexWrap,
}) => {
  const frameDiv3Style = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  return (
    <div className="flex flex-row items-start justify-start py-0 pr-[23px] pl-0 box-border max-w-full text-left text-6xl text-black font-secondary-text">
      <div className="w-[465.7px] rounded-2xl bg-white flex flex-col items-start justify-start pt-[21px] pb-[8.300000000000011px] pr-[10.199999999999818px] pl-[17.5px] box-border gap-[27.80000000000001px] max-w-full">
        <div className="w-[465.7px] h-[316.5px] relative rounded-2xl bg-white hidden max-w-full" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[12.799999999999956px] max-w-full">
          <div
            className="self-stretch flex flex-row flex-wrap items-end justify-between gap-[20px]"
            style={frameDiv3Style}
          >
            <div className="h-[30.3px] flex flex-row items-start justify-start gap-[28.5px]">
              <h2 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[88px] z-[1] mq450:text-xl">
                Project
              </h2>
              <input
                className="m-0 h-[24.3px] w-[25px] relative z-[1]"
                type="checkbox"
              />
            </div>
            <div className="h-[35.6px] w-[108.5px] relative text-xs text-firebrick-200">
              <div className="absolute top-[0px] left-[0px] rounded bg-rosybrown w-20 h-[35px] z-[1]" />
              <div className="absolute top-[10.4px] left-[19.1px] font-medium inline-block w-[89.4px] h-[25.2px] z-[2]">
                Offtrack
              </div>
            </div>
          </div>
          <div className="w-[421.4px] h-px relative box-border max-w-full z-[1] border-t-[1px] border-solid border-black" />
        </div>
        <div className="w-[420px] relative text-smi leading-[21px] font-medium text-darkslategray-100 inline-block max-w-full z-[1]">
          <p className="m-0">{virtualRealityHistoricalT}</p>
          <p className="m-0">{designAVRExperienceForExp}</p>
        </div>
        <div className="w-[470.4px] flex flex-col items-start justify-start gap-[22.19999999999999px] max-w-[107%] shrink-0 text-sm text-crimson">
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
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[4.400000000000546px] box-border max-w-full text-mini text-indianred">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
              <div className="h-[38px] w-[143.6px] flex flex-row items-start justify-start">
                <div className="h-[38px] flex-1 flex flex-col items-start justify-start py-0 pr-[10.699999999998909px] pl-0 box-border">
                  <img
                    className="w-[41.3px] h-[38px] relative rounded-[50%] object-cover shrink-0 [debug_commit:1cbd860] z-[1]"
                    alt=""
                    src={ellipse12}
                  />
                </div>
                <img
                  className="h-[38px] w-[41.3px] relative rounded-[50%] object-cover min-h-[38px] shrink-0 [debug_commit:1cbd860] z-[2] ml-[-19.4px]"
                  alt=""
                  src={ellipse13}
                />
                <div className="h-[35.5px] w-[46.7px] flex flex-col items-start justify-start py-0 pr-[12.199999999998909px] pl-0 box-border ml-[-19.4px]">
                  <img
                    className="w-[34.5px] h-[35.5px] relative rounded-[50%] object-cover shrink-0 [debug_commit:1cbd860] z-[3]"
                    alt=""
                    src={ellipse15}
                  />
                </div>
                <div className="h-[35.5px] w-[46.7px] flex flex-col items-start justify-start py-0 pr-[12.199999999999818px] pl-0 box-border ml-[-19.4px]">
                  <img
                    className="w-[34.5px] h-[35.5px] relative rounded-[50%] object-cover shrink-0 [debug_commit:1cbd860] z-[4]"
                    alt=""
                    src={ellipse14}
                  />
                </div>
                <div className="h-[35.5px] w-[34.5px] relative shrink-0 [debug_commit:1cbd860] ml-[-19.4px]">
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
  );
};

export default GroupComponent;
