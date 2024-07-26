import Label from "../label";
const ExperienceButton = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Label text={"Experience"} />
      <div>
        <p className="font-normal mt-2 text-gray-600 text-xl text-center mb-12">
          Here is a quick summary of my most recent experiences:{" "}
        </p>
      </div>
    </div>
  );
};
export default ExperienceButton;
