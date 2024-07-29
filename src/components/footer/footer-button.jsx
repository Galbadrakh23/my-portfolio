import { FaRegCopyright } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const FooterButton = () => {
  return (
    <div className="flex flex-col justify-center items-center py-6 px-20">
      <div>
        <p className="flex flex-row items-center gap-1 font-normal mt-2 text-gray-600 text-sm">
          <FaRegCopyright />
          2024 | Greetings with <FaHeart />
          from Ulaanbaatar{" "}
        </p>
      </div>
    </div>
  );
};
export default FooterButton;
