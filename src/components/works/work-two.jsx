import Technologies from "./technologies";
import { MdOutlineOpenInNew } from "react-icons/md";
const WorkTwo = () => {
  return (
    <section className="flex flex-col md:flex-row rounded-lg shadow-xl">
      <div>
        <div className="px-12 pt-12">
          <h1>Mentor</h1>
        </div>
        <div className="w-[500px] px-12 pt-6">
          <p className="text-gray-600 font-thin dark:text-[#EEEEEE]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </div>
        <div className="px-12 pt-6">
          <Technologies />
        </div>
        <div className="px-14 pt-6">
          <MdOutlineOpenInNew />
          <a href="https://www.mentor.com/"></a>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-[#27374D]">
        <img src="/images/mentor.svg" alt="mentor" className="px-12 py-12" />
      </div>
    </section>
  );
};
export default WorkTwo;
