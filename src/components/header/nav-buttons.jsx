import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

const NavButtons = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center gap-4">
      <div className="h-6 w-0.5 bg-gray-400 opacity-30"></div>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-500"
      >
        {theme === "light" ? (
          <MdOutlineDarkMode className="hover:cursor-pointer" />
        ) : (
          <MdOutlineLightMode className="hover:cursor-pointer" />
        )}
      </button>
      <button className="py-[6px] px-4 bg-black text-white dark:bg-white rounded-xl">
        Download CV
      </button>
    </div>
  );
};

export default NavButtons;
