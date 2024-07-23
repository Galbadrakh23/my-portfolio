const ExperienceButton = () => {
  return (
    <div className="container flex flex-col justify-center items-center">
      <button className="w-[120px] h-[30px] text-sm rounded-full bg-gray-200 px-4">
        Experience
      </button>
      <div>
        <p className="font-normal mt-2 text-gray-600 text-xl mb-12">
          Here is a quick summary of my most recent experiences:{" "}
        </p>
      </div>
    </div>
  );
};
export default ExperienceButton;
