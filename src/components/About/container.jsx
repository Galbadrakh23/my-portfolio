import AboutMeButton from "./aboutme-button";
import RowSection from "./row-section";
import RowTitle from "./row-title";

const ContainerAbout = () => {
  return (
    <section className="max-w-8xl">
      <AboutMeButton />
      <div className="flex lg:flex-row gap-12 mt-[48px] mx-8">
        <RowTitle />
        <RowSection />
      </div>
    </section>
  );
};
export default ContainerAbout;
