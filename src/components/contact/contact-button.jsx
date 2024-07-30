import { CiMail } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";
import Label from "../label";

const ContactButton = () => {
  return (
    <div className="container flex flex-col justify-center items-center">
      <Label text={"Contact"} />
      <div>
        <p className=" text-center font-normal mt-2 text-gray-600 text-xl mb-12 dark:text-[#EEEEEE]">
          What’s next? Feel free to reach out to me if you're looking for <br />{" "}
          a developer, have a query, or simply want to connect.{" "}
        </p>
      </div>
      <div className="flex flex-row items-center gap-5">
        <CiMail size={20} />
        <p className="text-gray-900 text-3xl font-normal dark:text-[#DDE6ED]">
          24LP2430@nest.edu.mn
        </p>
        <IoCopyOutline size={20} />
      </div>
      <div className="flex flex-row items-center gap-5">
        <FaPhoneAlt size={20} />
        <p className="text-gray-900 text-3xl font-normal dark:text-[#DDE6ED]">
          +976 99770018
        </p>
        <IoCopyOutline size={20} />
      </div>
      <div className="mt-12">
        <p className=" text-center font-thin mt-2 text-gray-600 text-ml mb-2 dark:text-[#EEEEEE]">
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
