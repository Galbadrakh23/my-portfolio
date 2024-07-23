import SkillsButton from "./skills-button";
import SkillRow from "./skills-logo-row";
import SkillRow2 from "./skill-logo-row-2";

const ContainerSkills = () => {
  return (
    <section className="px-[80px] py-[96px]  flex flex-col items-center justify-center bg-#fffff border-green-500 border-2">
      <SkillsButton />
      <SkillRow />
      <SkillRow2 />
    </section>
  );
};

export default ContainerSkills;
