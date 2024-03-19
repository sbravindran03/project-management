import { useCallback } from "react";
import { useRouter } from "next/router";

const SignupPage = () => {
  const router = useRouter();

  const onBtnPrytemplate1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onBtnOutlinetemplate1CopyClick = useCallback(() => {
    // Please sync "User_Dasboard" to the project
  }, []);

  const onAlreadyHaveAnClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-row items-start justify-between pt-[34px] pb-[107px] pr-[86px] pl-5 box-border tracking-[normal] gap-[20px] text-left text-6xl text-darkslategray-300 font-inter mq900:flex-wrap mq900:pr-[43px] mq900:box-border">
      <div className="h-[69px] w-[278px] flex flex-row items-start justify-start py-3 px-6 box-border">
        <div className="h-10 w-[179px] relative hidden">
          <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-full h-full mq450:text-xl">
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
      <div className="w-[473px] flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border max-w-full text-xl text-black font-manrope">
        <div className="self-stretch flex flex-col items-start justify-start gap-[64px] max-w-full mq675:gap-[32px_64px]">
          <div className="flex flex-row items-start justify-start gap-[8px] max-w-full">
            <div className="h-[25.5px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/Frame.png"
              />
            </div>
            <div className="relative font-semibold mq450:text-base">
              INTEGRATED TRACKING COORDINATION HUB
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[13px] box-border max-w-full text-smi-8 text-black font-zen-kaku-gothic-antique">
            <div className="h-[768px] flex-1 relative rounded-t-3xl rounded-b-none bg-white overflow-hidden max-w-full">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-3xl rounded-b-none bg-gray-100 hidden" />
              <div className="absolute top-[510px] left-[40px] rounded-lg bg-white box-border w-[380px] h-12 z-[1] border-[1px] border-solid border-whitesmoke-200">
                <div className="absolute h-full w-full top-[0%] right-[-0.53%] bottom-[-4.26%] left-[0%] rounded-lg bg-gray-100 box-border hidden border-[1px] border-solid border-whitesmoke-200" />
              </div>
              <img
                className="absolute top-[448.7px] left-[40.5px] w-[380px] h-0.5 z-[1]"
                loading="lazy"
                alt=""
                src="/linedivider.svg"
              />
              <div className="absolute top-[39.5px] left-[33px] w-[387px] flex flex-col items-start justify-start gap-[21.5px] max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[23px] z-[1]">
                      LET'S GET YOU STARTED
                    </div>
                    <h3 className="m-0 relative text-6xl leading-[44px] font-medium font-inherit z-[1] mq450:text-xl mq450:leading-[35px]">
                      Create an Account
                    </h3>
                  </div>
                </div>
                <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                      <div className="w-[102.2px] flex flex-row items-start justify-start py-0 pr-[11px] pl-[11.200000000000044px] box-border">
                        <div className="flex-1 bg-white overflow-hidden flex flex-row items-start justify-start py-0 px-[5.5px] whitespace-nowrap z-[2]">
                          <div className="h-[23px] w-[79.8px] relative bg-gray-100 hidden" />
                          <div className="flex-1 relative text-smi-8 leading-[26px] font-zen-kaku-gothic-antique text-gray-200 text-center inline-block min-w-[80px] z-[1]">
                            Your Name
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg box-border flex flex-row items-start justify-start pt-3.5 px-4 pb-[13px] max-w-full z-[1] mt-[-12px] border-[1px] border-solid border-silver">
                        <div className="h-[57px] w-[381px] relative rounded-lg box-border hidden max-w-full border-[1px] border-solid border-silver" />
                        <input
                          className="w-[100.8px] [border:none] [outline:none] font-zen-kaku-gothic-antique text-base bg-[transparent] h-[29px] relative leading-[28.16px] text-gray-200 text-left inline-block p-0 z-[2]"
                          placeholder="Johnson Doe"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                      <div className="w-[380px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full">
                        <div className="self-stretch rounded-lg box-border flex flex-row items-start justify-start pt-3.5 px-4 pb-[13px] max-w-full z-[1] border-[1px] border-solid border-darkslategray-100">
                          <div className="h-[57px] w-[381px] relative rounded-lg box-border hidden max-w-full border-[1px] border-solid border-darkslategray-100" />
                          <input
                            className="w-[174px] [border:none] [outline:none] font-zen-kaku-gothic-antique text-base bg-[transparent] h-[29px] relative leading-[28.16px] text-darkslategray-100 text-left inline-block whitespace-nowrap p-0 z-[2]"
                            placeholder="johnsondoe@nomail.com"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="w-[54px] bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 pr-[4.5px] pl-[5.5px] box-border z-[2] ml-[-368.8px]">
                        <div className="h-[23px] w-[54px] relative bg-gray-100 hidden" />
                        <div className="flex-1 relative text-smi-8 leading-[23px] font-zen-kaku-gothic-antique text-darkslategray-100 text-center z-[1]">
                          Email
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                      <div className="w-[89.4px] flex flex-row items-start justify-start py-0 pr-[11px] pl-[11.200000000000044px] box-border">
                        <div className="flex-1 bg-white overflow-hidden flex flex-row items-start justify-start py-0 pr-[3.5px] pl-[5.5px] z-[2]">
                          <div className="h-[23px] w-[67px] relative bg-gray-100 hidden" />
                          <div className="flex-1 relative text-smi-8 leading-[23px] font-zen-kaku-gothic-antique text-gray-200 text-center inline-block min-w-[58px] z-[1]">
                            Password
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg box-border flex flex-row items-start justify-between pt-3.5 pb-[13px] pr-[9px] pl-[15px] max-w-full gap-[20px] z-[1] mt-[-12px] border-[1px] border-solid border-silver">
                        <div className="h-[57px] w-[381px] relative rounded-lg box-border hidden max-w-full border-[1px] border-solid border-silver" />
                        <input
                          className="w-[174px] [border:none] [outline:none] font-zen-kaku-gothic-antique text-base bg-[transparent] h-[29px] relative leading-[28.16px] text-gray-200 text-left inline-block p-0 z-[2]"
                          placeholder="***************"
                          type="text"
                        />
                        <div className="h-[22px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                          <img
                            className="w-4 h-4 relative object-cover z-[2]"
                            alt=""
                            src="/exiconeye@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[4.5px] box-border max-w-full">
                    <button
                      className="cursor-pointer [border:none] py-[7px] px-[47.5px] bg-black flex-1 rounded-lg flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full z-[1] hover:bg-dimgray-200"
                      onClick={onBtnPrytemplate1Click}
                    >
                      <div className="h-14 w-[380px] relative rounded-lg bg-gray-300 hidden max-w-full" />
                      <b className="h-[42px] flex-1 relative text-smi-8 leading-[22.53px] flex font-zen-kaku-gothic-antique text-white text-center items-center justify-center z-[1]">
                        GET STARTED
                      </b>
                    </button>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-7">
                    <div className="bg-white flex flex-row items-start justify-start pt-[0.6999999999999886px] pb-[0.8000000000000114px] pr-4 pl-[17px] z-[2]">
                      <div className="h-[20.5px] w-12 relative bg-gray-100 hidden" />
                      <b className="w-[15px] relative text-smi-8 inline-block font-zen-kaku-gothic-antique text-black text-center min-w-[15px] z-[3]">
                        Or
                      </b>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[7px] box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[9px] max-w-full">
                      <button
                        className="cursor-pointer py-1.5 px-10 bg-white self-stretch h-[49px] rounded-lg box-border flex flex-row items-start justify-start max-w-full z-[1] border-[1px] border-solid border-whitesmoke-200"
                        onClick={onBtnOutlinetemplate1CopyClick}
                      >
                        <div className="h-[49px] w-[381px] relative rounded-lg bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke-200" />
                        <div className="h-[27px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
                          <img
                            className="w-[18px] h-[18px] relative z-[1]"
                            alt=""
                            src="/icons8google.svg"
                          />
                        </div>
                        <div className="w-[274px] flex flex-col items-start justify-start py-0 px-0 box-border">
                          <div className="ml-[-11px] w-[285px] h-9 relative text-smi-8 leading-[22.53px] font-zen-kaku-gothic-antique text-dimgray-100 text-center flex items-center justify-center shrink-0 z-[1]">
                            Sign up with Google
                          </div>
                        </div>
                      </button>
                      <button className="cursor-pointer py-1.5 px-10 bg-white self-stretch h-[49px] rounded-lg box-border flex flex-row items-start justify-start max-w-full z-[1] border-[1px] border-solid border-whitesmoke-200">
                        <div className="h-[49px] w-[381px] relative rounded-lg bg-gray-100 box-border hidden max-w-full border-[1px] border-solid border-whitesmoke-200" />
                        <div className="h-[27px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
                          <img
                            className="w-[18px] h-[18px] relative z-[1]"
                            alt=""
                            src="/icons8facebook.svg"
                          />
                        </div>
                        <div className="w-[274px] flex flex-col items-start justify-start py-0 px-0 box-border">
                          <div className="ml-[-11px] w-[285px] h-9 relative text-smi-8 leading-[22.53px] font-zen-kaku-gothic-antique text-dimgray-100 text-center flex items-center justify-center shrink-0 z-[1]">
                            Sign up with Facebook
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div
                className="absolute top-[82.03%] left-[18] text-black text-center cursor-pointer z-[2]"
                onClick={onAlreadyHaveAnClick}
              >
                <span className="font-zen-kaku-gothic-antique">
                  Already have an account?
                </span>
                <b>{` `}</b>
                <b>
                  <span className="[text-decoration:underline]">
                    LOGIN HERE
                  </span>
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[862px] w-[745px] absolute !m-[0] top-[calc(50%_-_431px)] left-[81px] rounded-[40px] bg-lightsteelblue overflow-hidden shrink-0 z-[1]">
        <img
          className="absolute top-[186px] left-[6px] w-[681px] h-[467px] object-cover"
          loading="lazy"
          alt=""
          src="/ff.png"
        />
      </div>
    </div>
  );
};

export default SignupPage;
