import ExperienceButton from "./experience-button";
import ExperienceCards from "./experience-card";

const ContainerExperience = () => {
  return (
    <section className="px-[80px] py-[96px]  flex flex-col items-center justify-center dark:bg-[#222831]">
      <ExperienceButton />
      <ExperienceCards />
    </section>
  );
};
export default ContainerExperience;
