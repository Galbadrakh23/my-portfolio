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
          <button>
            <IoCloseOutline size={30} />
          </button>
        </div>
        <div>
          <ul className="flex flex-col items-start gap-2 py-4 px-4 font-normal text-gray-500">
            {menuList.map((menu) => (
              <li>
                <a href={menu.link}>{menu.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-[120px] flex flex-col gap-4">
          <div className="flex justify-between items-baseline px-4">
            <p className="text-gray-500 font-thin pt-4">Switch Theme</p>
            <MdOutlineLightMode size={20} />
          </div>
          <button className="mx-auto w-60 py-[6px] bg-black text-white rounded-xl">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
