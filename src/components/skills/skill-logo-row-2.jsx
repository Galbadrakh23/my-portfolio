const logos = [
  { src: "/images/icon-postgresql.svg", alt: "PostgreSQL" },
  { src: "/images/icon-mongodb.svg", alt: "MongoDB" },
  { src: "/images/icon-sass.svg", alt: "Sass/Scss" },
  { src: "/images/icon-tailwindcss.svg", alt: "Tailwindcss" },
  { src: "/images/icon-figma.svg", alt: "Figma" },
  { src: "/images/icon-cypress.svg", alt: "Cypress" },
  { src: "/images/icon-storybook.svg", alt: "Storybook" },
  { src: "/images/icon-git.svg", alt: "Git" },
];

const SkillRow2 = () => {
  return (
    <div className="flex flex-row flex-wrap items-baseline justify-center lg:justify-start gap-10 md:gap-16 lg:gap-20 mt-24">
      {logos.map((logo) => (
        <div
          className="w-[64px] h-[64px] flex flex-col items-center justify-center"
          key={logo.alt}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="w-full h-full object-contain"
          />
          <p className="text-center text-[18px] mt-2 text-gray-600 font-normal leading-7">
            {logo.alt}
          </p>
        </div>
      ))}
    </div>
  );
};
export default SkillRow2;
