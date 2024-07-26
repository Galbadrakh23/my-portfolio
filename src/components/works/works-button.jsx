const WorksButton = () => {
  return (
    <div className="container flex flex-col justify-center items-center">
      <button className="w-[120px] h-[30px] text-sm rounded-full bg-gray-200 px-4">
        Work
      </button>
      <div>
        <p className=" text-center font-thin mt-2 text-gray-600 text-xl mb-12">
          Some of the noteworthy projects I have built:{" "}
        </p>
      </div>
    </div>
  );
};
export default WorksButton;
