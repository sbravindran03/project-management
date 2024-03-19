import Top3 from "../Components/top3";
import NavList1 from "../Components/nav-list1";
import ProjectsForms from "../Components/projects-forms";

const AdminCreateProject = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[229px] box-border gap-[78px] tracking-[normal] mq750:gap-[19px_78px] mq1050:gap-[39px_78px]">
      <Top3 />
      <section className="w-[1835px] flex flex-row items-start justify-start py-0 px-[9px] box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[54px] max-w-full mq750:gap-[27px]">
          <NavList1 />
          <ProjectsForms />
        </div>
      </section>
    </div>
  );
};

export default AdminCreateProject;
