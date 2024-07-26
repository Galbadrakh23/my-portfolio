import AboutMeButton from "./aboutme-button";
import RowSection from "./row-section";
import RowTitle from "./row-title";

const ContainerAbout = () => {
  return (
    <section className="max-w-8xl">
      <AboutMeButton />
      <div className="flex flex-col items-center justify-center md:flex-row gap-12 mt-[48px] mx-8">
        <RowTitle />
        <RowSection />
      </div>
    </section>
  );
};
export default ContainerAbout;
