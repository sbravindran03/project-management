import { useState } from "react";

const NavList1 = () => {
  const [editSquareIconChecked, setEditSquareIconChecked] = useState(true);
  return (
    <div className="h-[358px] w-[269px] flex flex-col items-start justify-start gap-[14.635799407958984px] text-left text-mini-6 text-slategray-200 font-poppins">
      <div className="self-stretch rounded-[3.66px] bg-aliceblue-100 flex flex-row items-center justify-start py-0 pr-[7px] pl-[7.300000000000182px]">
        <div className="flex flex-row items-center justify-center py-0 pr-[4.547473508864641e-13px] pl-0">
          <div className="h-[43.9px] flex flex-row items-center justify-center pt-[7.300000000000182px] pb-[7.299999999999727px] pr-[7.300000000000182px] pl-[7.299999999999727px] box-border">
           
          </div>
          <div className="flex flex-row items-center justify-center pt-[7.400000000000091px] pb-[7.199999999999818px] pr-[7.299999999999727px] pl-[7.300000000000182px] z-[1]">
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
      <div className="w-[253.4px] rounded-[3.66px] flex flex-row items-center justify-start py-0 pr-[7px] pl-[7.300000000000182px] box-border">
        <div className="flex flex-row items-center justify-center py-0 pr-[4.547473508864641e-13px] pl-0">
          <div className="h-[43.9px] flex flex-row items-center justify-center pt-[7.400000000000091px] pb-[7.199999999999818px] pr-[7.300000000000182px] pl-[7.299999999999727px] box-border">
            <img
              className="h-[29.3px] w-[29.3px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/image.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-center pt-[7.300000000000182px] pb-[7.299999999999727px] pr-[7.299999999999727px] pl-[7.300000000000182px] z-[1]">
            <div className="relative tracking-[0.01em] leading-[22px] inline-block min-w-[42px]">
              Tasks
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
              src="/arrow--right-2-11@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="w-[253.4px] rounded-[3.66px] flex flex-row items-center justify-start py-0 pr-[7px] pl-[7.300000000000182px] box-border">
        <div className="flex flex-row items-center justify-center py-0 pr-[4.547473508864641e-13px] pl-0">
          <div className="h-[43.9px] flex flex-row items-center justify-center pt-[7.300000000000182px] pb-[7.299999999999727px] pr-[7.300000000000182px] pl-[7.299999999999727px] box-border">
            <img
              className="h-[29.3px] w-[29.3px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/document.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-center pt-[7.300000000000182px] pb-[7.299999999999727px] pr-[7.299999999999727px] pl-[7.300000000000182px] z-[1]">
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
      <div className="w-[253.4px] rounded-[3.66px] flex flex-row items-center justify-between py-0 px-[7.300000000000182px] box-border gap-[20px]">
        <div className="flex flex-row items-center justify-center py-0 pr-[4.547473508864641e-13px] pl-0">
          <div className="h-[43.9px] flex flex-row items-center justify-center pt-[7.300000000000182px] pb-[7.299999999999727px] pr-[7.300000000000182px] pl-[7.299999999999727px] box-border">
            <img
              className="h-[29.3px] w-[29.3px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/chat.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-center pt-[7.299999999999727px] pb-[7.300000000000182px] pr-[7.299999999999727px] pl-[7.300000000000182px] z-[1]">
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
      <div className="w-[253.4px] rounded-[3.66px] flex flex-row items-center justify-start py-0 pr-[7px] pl-[7.300000000000182px] box-border">
        <div className="flex flex-row items-center justify-center py-0 pr-[4.547473508864641e-13px] pl-0">
          <div className="h-[43.9px] flex flex-row items-center justify-center pt-[7.300000000000182px] pb-[7.299999999999727px] pr-[7.300000000000182px] pl-[7.299999999999727px] box-border">
            <img
              className="h-[29.3px] w-[29.3px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/setting.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-center pt-[7.299999999999727px] pb-[7.300000000000182px] pr-[7.299999999999727px] pl-[7.300000000000182px] z-[1]">
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

export default NavList1;