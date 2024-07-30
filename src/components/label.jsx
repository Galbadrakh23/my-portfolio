const Label = ({ text }) => {
  return (
    <button className="w-[90px] h-[30px] text-sm rounded-full bg-gray-200 px-2 dark:bg-gray-800">
      {text}
    </button>
  );
};
export default Label;
