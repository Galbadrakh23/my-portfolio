import Label from "../label";
const WorksButton = () => {
  return (
    <div className="container flex flex-col justify-center items-center">
      <Label text={"Works"} />
      <div>
        <p className=" text-center font-thin mt-2 text-gray-600 text-xl dark:text-[#EEEEEE] mb-12">
          Some of the noteworthy projects I have built:{" "}
        </p>
      </div>
    </div>
  );
};
export default WorksButton;
