import { MdOutlineLightMode } from "react-icons/md";

const NavButtons = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="h-6 w-0.5 bg-gray-400 opacity-30"></div>
      <MdOutlineLightMode />
      <button className="py-[6px] px-4 bg-black text-white rounded-xl">
        Download CV
      </button>
    </div>
  );
};

export default NavButtons;
