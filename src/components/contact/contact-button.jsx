import { CiMail } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";

const ContactButton = () => {
  return (
    <div className="container flex flex-col justify-center items-center">
      <button className="w-[120px] h-[30px] text-sm rounded-full bg-gray-200 px-4">
        Get in Touch
      </button>
      <div>
        <p className=" text-center font-normal mt-2 text-gray-600 text-xl mb-12">
          What’s next? Feel free to reach out to me if you're looking for <br />{" "}
          a developer, have a query, or simply want to connect.{" "}
        </p>
      </div>
      <div className="flex flex-row items-center gap-5">
        <CiMail />
        <p className="text-gray-900 text-3xl font-semibold">
          24LP2430@nest.edu.mn
        </p>
        <IoCopyOutline size={20} />
      </div>
      <div className="flex flex-row items-center gap-5">
        <FaPhoneAlt />
        <p className="text-gray-900 text-3xl font-semibold">+976 99770018</p>
        <IoCopyOutline />
      </div>
      <div className="mt-12">
        <p className=" text-center font-normal mt-2 text-gray-600 text-ml mb-2">
          You may also find me on these platforms!
        </p>
        <ul className="flex flex-row  justify-center gap-3">
          <li>
            <FiGithub />
          </li>
          <li>
            <FiTwitter />
          </li>
          <li>
            <FaFigma />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ContactButton;
