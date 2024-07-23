import SkillsButton from "./skills-button";
import SkillRow from "./skills-logo-row";

const ContainerSkills = () => {
  return (
    <section className="px-[80px] py-[96px]  flex flex-col items-center justify-center bg-#fffff">
      <SkillsButton />
      <SkillRow />
    </section>
  );
};

export default ContainerSkills;
