import Top5 from "../Components/top5";
import NavList4 from "../Components/nav-list4";
import AddUserInput from "../Components/add-user-input";

const AdminAddUsers = () => {
  return (
    <div className="w-full relative bg-aliceblue-100 overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <Top5 />
      <footer className="self-stretch flex flex-row items-start justify-start py-0 pr-[33px] pl-[340px] box-border gap-[31px] max-w-full mq450:pl-5 mq450:box-border mq900:gap-[31px_15px] mq900:pl-[85px] mq900:box-border mq1350:pl-[170px] mq1350:box-border mq1800:flex-wrap">
        <div className="ml-[-345px] h-[1094px] w-[314px] bg-white shadow-[0px_3px_35.16px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start py-4 pr-[29px] pl-4 box-border shrink-0 [debug_commit:1cbd860] mq450:gap-[16px_32px]">
          <NavList4 />
        </div>
        <section className="w-[1494px] flex flex-col items-start justify-start pt-[41px] px-0 pb-0 box-border max-w-full mq450:pt-5 mq450:box-border mq900:pt-[27px] mq900:box-border">
          <AddUserInput />
        </section>
      </footer>
    </div>
  );
};

export default AdminAddUsers;
