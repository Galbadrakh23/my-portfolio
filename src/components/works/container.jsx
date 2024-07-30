import WorkOne from "./work-one";
import WorkTwo from "./work-two";
import WorkThree from "./work-three";
import WorksButton from "./works-button";

const ContainerWork = () => {
  return (
    <section
      id="Works"
      className="px-[80px] py-[96px] flex flex-col gap-12 items-center justify-center dark:bg-[#27374D]"
    >
      <WorksButton />
      <WorkOne />
      <WorkTwo />
      <WorkThree />
    </section>
  );
};
export default ContainerWork;
