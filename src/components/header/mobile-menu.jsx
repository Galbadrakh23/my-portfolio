import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";

const menuList = [
  { label: "Home", link: "/" },
  { label: "About", link: "/#about" },
  { label: "Testimonials", link: "/#testimonials" },
  { label: "Contact", link: "/#contact" },
];

const MobileMenu = () => {
  return (
    <div className="bg-gray-200 w-[375px] h-[667px] flex justify-end">
      <div className="bg-white w-[320px] h-[667px] py-4">
        <div className="h-[68px] w-[320px] flex flex-row justify-between items-center py-4 px-4">
          <h1 className="font-bold text-2xl">23</h1>
          <IoCloseOutline size={30} />
        </div>
        <div>
          <ul className="flex flex-col items-start gap-2 py-4 px-4 font-normal text-gray-500 border-gray-200 border-2">
            {menuList.map((menu) => (
              <li>
                <a href={menu.link}>{menu.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-[120px] flex flex-col gap-4">
          <div className="flex justify-between items-center px-2">
            <p className="text-gray-500 font-thin">Switch Theme</p>
            <MdOutlineLightMode />
          </div>
          <button className="py-[6px] px-4 bg-black text-white rounded-xl">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
