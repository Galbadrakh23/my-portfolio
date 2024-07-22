import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";

const ColumnLeft = () => {
  return (
    <div className="text-center lg:text-left lg:flex-1 max-w-2xl ">
      <h1 className="text-6xl font-bold mb-4">
        Hi, I’m Home{" "}
        <span role="img" aria-label="waving hand">
          👋
        </span>
      </h1>
      <p className="text-gray-700  font-extralight mb-6">
        I specialize in full stack development, particularly with React.js and
        Node.js. My main goal is to create exceptional digital experiences that
        are fast, visually appealing, and accessible to everyone. With over 7
        years of experience in web development, I continue to find joy in
        crafting innovative solutions and designs.
      </p>
      <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
        <IoLocationOutline />
        <span className="text-gray-700 font-thin">Ulaanbaatar, Mongolia</span>
      </div>
      <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
        <GoDotFill className="text-green-500" />
        <span className="text-gray-700 font-thin">
          Available for new projects
        </span>
      </div>
      <div>
        <ul className="flex flex-row gap-3 mt-10">
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

export default ColumnLeft;
