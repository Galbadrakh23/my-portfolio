import ExperienceBox from "./experience-card-box";

const experiences = [
  {
    title: "Sr. Frontend Developer",
    company: "Upwork",
    period: "Nov 2021 - Present",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    title: "Team Lead",
    company: "Upwork",
    period: "Jul 2017 - Oct 2021",
    description: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Upwork",
    period: "Dec 2015 - May 2017",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

const ExperienceCards = () => {
  return (
    <div className="space-y-6">
      {experiences.map((experience, index) => (
        <ExperienceBox key={index} experience={experience} />
      ))}
    </div>
  );
};

export default ExperienceCards;
