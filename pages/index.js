import { useCallback } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();

  const onLoginPageContainerClick = useCallback(() => {
    // Please sync "User_Dasboard" to the project
  }, []);

  const onLogoContainerClick = useCallback(() => {
    console.log("Login button clicked");
    router.push('./user-dasboard');
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Signup Page" to the project
  }, []);

  const navigateToUserBoard = useCallback(() => {
    router.push('/signup-page');
  }, [router]);

  return (
    <div
      className="w-full relative bg-whitesmoke overflow-hidden flex flex-row items-start justify-start pt-[34px] px-5 pb-[41px] box-border tracking-[normal] cursor-pointer text-left text-[25px] text-darkslategray-200 font-inter"
      onClick={onLoginPageContainerClick}
    >
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
      <main className="w-[1314px] flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border max-w-full ml-[-277px]">
        <section className="self-stretch flex flex-col items-end justify-start max-w-full text-left text-xl text-gray-100 font-manrope">
          <div className="flex flex-col items-start justify-start gap-[210px] max-w-full mq450:gap-[105px_210px]">
            <div className="h-[27px] flex flex-row items-start justify-start py-0 pr-0 pl-2.5 box-border max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[9px] max-w-full">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
                <div className="relative font-semibold mq450:text-base">
                  INTEGRATED TRACKING COORDINATION HUB
                </div>
              </div>
            </div>
            <div className="w-[431px] flex flex-col items-start justify-start gap-[42px] max-w-full text-[36px] text-black mq450:gap-[21px_42px]">
              <div className="flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
                <div className="flex flex-col items-start justify-start gap-[14px] max-w-full">
                  <h2 className="m-0 w-64 h-[49px] relative text-inherit font-extrabold font-inherit inline-block mq450:text-[22px] mq750:text-[29px]">{`Welcome back `}</h2>
                  <div className="relative text-xl font-space-grotesk mq450:text-base">
                    Welcome back! Please enter your details.
                  </div>
                </div>
              </div>
              <form className="m-0 self-stretch flex flex-col items-end justify-start gap-[37px] max-w-full mq450:gap-[18px_37px]">
                <div className="self-stretch flex flex-col items-end justify-start gap-[28.5px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0 box-border max-w-full">
                    <div className="flex-1 box-border flex flex-row items-start justify-start py-[11px] px-0 max-w-full border-b-[1px] border-solid border-darkgray">
                      <input
                        className="w-[700px] [border:none] [outline:none] font-space-grotesk text-xl bg-[transparent] h-[26px] relative text-black text-left inline-block p-0 mq450:text-base"
                        placeholder="Email"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-12 box-border flex flex-row items-start justify-between py-[11px] pr-2 pl-0 gap-[20px] border-b-[1px] border-solid border-darkgray">
                  <input
                        className="w-[700px] [border:none] [outline:none] font-space-grotesk text-xl bg-[transparent] h-[26px] relative text-black text-left inline-block p-0 mq450:text-base"
                        placeholder="Password"
                        type="text"
                      />
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/eyeslashfill.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                    <div className="flex flex-row items-start justify-start gap-[8px]">
                      <input
                        className="m-0 h-[18px] w-[18px] relative rounded-sm box-border border-[1px] border-solid border-lightgray"
                        type="checkbox"
                      />
                      <div className="relative text-mini font-space-grotesk text-black text-left">{`Terms & Conditions `}</div>
                    </div>
                    <div className="relative text-mini [text-decoration:underline] font-space-grotesk text-black text-left inline-block min-w-[122px]">
                      Forgot Password
                    </div>
                  </div>
                </div>
                {/* Login button */}
                <Link href="/user-dasboard" className="cursor-pointer [border:none] p-5 bg-gray-200 self-stretch rounded-md flex flex-row items-start justify-center whitespace-nowrap hover:bg-darkslategray-100" onClick={onLogoContainerClick}>
                  <b className="relative text-base inline-block font-space-grotesk text-white text-left min-w-[47px]">
                    Log in
                  </b>
                </Link>
                
                <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[59px] pl-[60px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div
                    className="flex-1 flex flex-row items-start justify-start gap-[8px] cursor-pointer mq450:flex-wrap"
                    onClick={onFrameContainerClick}
                  >
                    <div className="relative text-base font-space-grotesk text-black text-left">
                      Don’t have an account?
                    </div>
                    <div
                      className="relative text-base font-medium font-space-grotesk text-black text-left inline-block min-w-[121px] underline cursor-pointer"
                      onClick={navigateToUserBoard}
                    >
                      Sign up for free
                    </div>
                  </div> 
                </div>
              </form>
            </div>
          </div>
          <div className="self-stretch h-[865px] flex flex-row items-start justify-start max-w-full mt-[-634px]">
            <img
              className="h-[865px] w-[763px] relative object-cover max-w-full"
              loading="lazy"
              alt=""
              src="/image-10@2x.png"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
