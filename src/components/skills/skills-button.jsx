import Label from "../label";

const SkillsButton = () => {
  return (
    <div className="container flex flex-col justify-center items-center">
      <Label text={"Skills"} />
      <div>
        <p className="text-center  font-normal mt-2 text-gray-600 text-xl">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
    </div>
  );
};
export default SkillsButton;
