import { useMemo } from "react";

const GroupComponent2 = ({
  propPadding,
  propDebugCommit,
  propDebugCommit1,
  propDebugCommit2,
  propDebugCommit3,
  propFlexWrap,
  propDebugCommit4,
  propDebugCommit5,
}) => {
  const issuesStyle = useMemo(() => {
    return {
      padding: propPadding,
      debugCommit: propDebugCommit,
    };
  }, [propPadding, propDebugCommit]);

  const groupInputStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const iconHourglassEndStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit2,
    };
  }, [propDebugCommit2]);

  const aPRIL2024Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit3,
    };
  }, [propDebugCommit3]);

  const frameDiv4Style = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  const groupIconStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit4,
    };
  }, [propDebugCommit4]);

  const issues1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit5,
    };
  }, [propDebugCommit5]);

  return (
    <div className="flex flex-row items-start justify-start py-0 pr-[23px] pl-0 box-border max-w-full text-left text-smi text-darkslategray-100 font-secondary-text">
      <div className="w-[465.7px] rounded-2xl bg-white flex flex-col items-start justify-start pt-[26px] px-[17.5px] pb-[8.300000000000011px] box-border gap-[27.8px] max-w-full">
        <div className="w-[465.7px] h-[316.5px] relative rounded-2xl bg-white hidden max-w-full" />
        <div className="w-[420.4px] h-[44.4px] flex flex-col items-start justify-start pt-0 px-0 pb-[14.1px] box-border gap-[13.100000000000003px] max-w-full">
          <div className="w-[141.5px] h-[30.3px] flex flex-row items-start justify-between gap-[20px]">
            <input
              className="w-20 [border:none] [outline:none] inline-block font-secondary-text text-6xl bg-[transparent] h-[30px] relative font-bold text-black text-left p-0 z-[1] mq450:text-xl"
              placeholder="Issues"
              type="text"
              style={issuesStyle}
            />
            <input
              className="m-0 h-[24.3px] w-[25px] relative z-[1]"
              type="checkbox"
              style={groupInputStyle}
            />
          </div>
          <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-black" />
        </div>
        <div className="self-stretch relative leading-[21px] font-medium z-[1]">
          <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do `}</p>
          <p className="m-0">{`eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim `}</p>
          <p className="m-0">{`ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut `}</p>
          <p className="m-0">aliquip ex ea commodo consequat.</p>
        </div>
        <div className="w-[470.3px] flex flex-col items-start justify-start gap-[22.19999999999999px] max-w-[109%] shrink-0 text-sm text-crimson">
          <div className="h-[17px] flex flex-row items-start justify-start gap-[8.2px]">
            <img
              className="h-[17px] w-[10.8px] relative min-h-[17px] z-[1]"
              loading="lazy"
              alt=""
              src="/-icon-hourglass-end.svg"
              style={iconHourglassEndStyle}
            />
            <div
              className="relative font-medium inline-block min-w-[100px] z-[1]"
              style={aPRIL2024Style}
            >
              05 APRIL 2024
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[4.399999999999999px] box-border max-w-full text-mini text-indianred">
            <div
              className="flex-1 flex flex-row flex-wrap items-start justify-between max-w-full gap-[20px]"
              style={frameDiv4Style}
            >
              <div className="w-[143.5px] flex flex-row items-start justify-start">
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
                  <div className="absolute top-[9.3px] left-[8.2px] capitalize font-medium inline-block w-[19px] h-[18.7px] min-w-[19px] z-[6]">
                    +2
                  </div>
                </div>
              </div>
              <div className="h-[29px] w-[119.3px] flex flex-col items-start justify-start pt-[8.100000000000023px] px-0 pb-0 box-border text-sm text-dimgray-200">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[3.7000000000000455px]">
                  <img
                    className="h-[20.3px] w-[19.9px] relative shrink-0 [debug_commit:1cbd860] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/group-628.svg"
                    style={groupIconStyle}
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[1.8999999999999773px] px-0 pb-0">
                    <div
                      className="self-stretch relative font-medium shrink-0 [debug_commit:1cbd860] z-[1]"
                      style={issues1Style}
                    >
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

export default GroupComponent2;
