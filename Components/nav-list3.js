import { useState } from "react";

const NavList3 = () => {
  const [editSquareIconChecked, setEditSquareIconChecked] = useState(true);
  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[5.684341886080803e-14px] gap-[14.635799407958984px] text-left text-mini-6 text-slategray-200 font-poppins">
      <div className="self-stretch rounded-[3.66px] bg-white flex flex-row items-center justify-start py-0 pr-[7px] pl-[7.299999999999955px]">
        <div className="flex flex-row items-center justify-center">
          <div className="h-[43.9px] flex flex-row items-center justify-center pt-[7.299999999999955px] px-[7px] pb-[7.300000000000011px] box-border">
           
          </div>
          <div className="flex flex-row items-center justify-center pt-[7.399999999999977px] px-[7.299999999999955px] pb-[7.2000000000000455px]">
            <div className="relative tracking-[0.01em] leading-[22px] font-semibold inline-block min-w-[53px]">{`Project `}</div>
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
      <div className="w-[253.4px] rounded-[3.66px] bg-white flex flex-row items-center justify-start py-0 pr-[7px] pl-[7.299999999999955px] box-border text-xs-9 text-gray-400">
        <div className="w-[100.5px] flex flex-row items-center justify-center">
          <div className="h-[43.9px] flex flex-row items-center justify-center pt-[7.399999999999977px] px-[7px] pb-[7.199999999999989px] box-border">
            <img
              className="h-[29.3px] w-[29.3px] relative overflow-hidden shrink-0"
              alt=""
              src="/image.svg"
            />
          </div>
          <input
            className="w-[calc(100%_-_29.3px)] [border:none] [outline:none] bg-[transparent] h-[36.6px] flex-1 flex flex-row items-center justify-center py-[7.300000000000011px] px-[7.299999999999955px] box-border font-poppins text-mini-6 text-slategray-200 min-w-[34px]"
            placeholder="Tasks"
            type="text"
          />
        </div>
        <div className="hidden flex-row items-start justify-start">
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
              src="/arrow--right-2-11@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="w-[253.4px] rounded-[3.66px] flex flex-row items-center justify-start py-0 pr-[7px] pl-[7.299999999999955px] box-border">
        <div className="flex flex-row items-center justify-center">
          <div className="h-[43.9px] flex flex-row items-center justify-center pt-[7.299999999999955px] px-[7px] pb-[7.300000000000011px] box-border">
            <img
              className="h-[29.3px] w-[29.3px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/document.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-center py-[7.300000000000011px] px-[7.299999999999955px]">
            <div className="relative tracking-[0.01em] leading-[22px] inline-block min-w-[46px]">
              Issues
            </div>
          </div>
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
      <div className="w-[253.4px] rounded-[3.66px] bg-aliceblue-100 flex flex-row items-center justify-between py-0 pr-[7.300000000000182px] pl-[7.299999999999955px] box-border gap-[20px]">
        <div className="flex flex-row items-center justify-center">
          <div className="h-[43.9px] flex flex-row items-center justify-center pt-[7.299999999999955px] px-[7px] pb-[7.300000000000011px] box-border">
            <img
              className="h-[29.3px] w-[29.3px] relative overflow-hidden shrink-0"
              alt=""
              src="/chat.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-center py-[7.300000000000011px] px-[7.299999999999955px]">
            <div className="relative tracking-[0.01em] leading-[22px] inline-block min-w-[97px]">
              Performance
            </div>
          </div>
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
              src="/arrow--right-2-31@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="w-[253.4px] rounded-[3.66px] flex flex-row items-center justify-start py-0 pr-[7px] pl-[7.299999999999955px] box-border">
        <div className="flex flex-row items-center justify-center">
          <div className="h-[43.9px] flex flex-row items-center justify-center pt-[7.300000000000011px] px-[7px] pb-[7.299999999999955px] box-border">
            <img
              className="h-[29.3px] w-[29.3px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/setting.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-center py-[7.300000000000011px] px-[7.299999999999955px]">
            <div className="relative tracking-[0.01em] leading-[22px] inline-block min-w-[60px]">
              Settings
            </div>
          </div>
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
              src="/arrow--right-2-41@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavList3;
