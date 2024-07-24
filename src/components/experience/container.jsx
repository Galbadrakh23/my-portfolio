import ExperienceButton from "./experience-button";
import ExperienceCards from "./experience-card";

const ContainerExperience = () => {
  return (
    <section className="px-[80px] py-[96px]  flex flex-col items-center justify-center bg-#fffff bg-gray-50">
      <ExperienceButton />
      <ExperienceCards />
    </section>
  );
};
export default ContainerExperience;
