import Container from "../hero/container";
const HeroSection = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center py-[64px] px-[16px] dark:bg-black">
        <Container />
      </section>
    </div>
  );
};

export default HeroSection;
