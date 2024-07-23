const SkillsButton = () => {
  return (
    <div className="container flex flex-col justify-center items-center">
      <button className="w-[90px] h-[30px] text-sm rounded-full bg-gray-200 px-2">
        Skills
      </button>
      <div>
        <p className="font-normal mt-2 text-gray-600 text-xl">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
    </div>
  );
};
export default SkillsButton;
