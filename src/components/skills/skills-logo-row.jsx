const logos = [
  { src: "/images/icon-javscript.svg", alt: "Javascript" },
  { src: "/images/icon-typescript.svg", alt: "Tech" },
  { src: "/images/icon-react.svg", alt: "React" },
  { src: "/images/icon-nextjs.svg", alt: "NextJs" },
  { src: "/images/icon-nodejs.svg", alt: "NodeJs" },
  { src: "/images/icon-express.svg", alt: "Express" },
  { src: "/images/icon-nest.svg", alt: "Next" },
  { src: "/images/icon-socket.svg", alt: "Socket" },
];

const SkillRow = () => {
  return (
    <div className="flex flex-row flex-wrap items-baseline justify-center lg:justify-start gap-10 md:gap-16 lg:gap-20 mt-12">
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
export default SkillRow;
