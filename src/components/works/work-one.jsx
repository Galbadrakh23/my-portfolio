import Technologies from "./technologies";
import { MdOutlineOpenInNew } from "react-icons/md";
const WorkOne = () => {
  return (
    <section className="flex flex-col md:flex-row bg-gray-50 border-black-500 rounded-lg shadow-xl border-2">
      <div className="bg-gray-500">
        <img src="/images/ubcab.svg" alt="ubcab" className="px-12 py-12" />
      </div>
      <div className="bg-gray-50 border-gray-950 border-2">
        <div className="px-12 pt-12">
          <h1>Ub Cab</h1>
        </div>
        <div className="w-[480px] px-12 pt-6">
          <p className="text-gray-600 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </div>
        <div className="px-12 pt-6">
          <Technologies />
        </div>
        <div className="px-12 pt-6">
          <MdOutlineOpenInNew />
          <a href="https://www.ubcab.com/"></a>
        </div>
      </div>
    </section>
  );
};
export default WorkOne;
