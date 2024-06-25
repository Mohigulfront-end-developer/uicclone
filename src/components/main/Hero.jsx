import Img1 from "../../../public/mountain.webp"
import { GoArrowUpRight } from "react-icons/go";
import { PiPhoneCallLight } from "react-icons/pi";

const Hero = () => {
  return (
    <div className="">
      <div className=" relative border-b-2 border-b-[#0d2915]">
        <img src={Img1} alt="" className="mt-[10px]" />
        <div className="container absolute top-64 ml-[300px]">
          <h1 className="font-bold text-white text-[45px] w-[400px]">
            We offer digital solutions
          </h1>
          <p className="text-green-50 font-semibold text-[25px]">
            IN ANY DIFFICULTY
          </p>
          <div className="flex gap-5 items-center mt-[30px]">
            <button className="text-[18px] text-center w-[150px] flex text-white items-center gap-2 py-2 px-4 border rounded-lg bg-[#1A8377] border-[#00A795] hover:bg-[#00A795]">
              Portfolio{" "}
              <div className="p-1 bg-[#3dc6bd]  duration-200 hover:rotate-[45deg] rounded-full">
                <GoArrowUpRight className="text-white text-xl" />
              </div>
            </button>
            <button className="text-[18px] text-center w-[150px] flex  text-white items-center gap-4 py-2 px-4 border rounded-lg border-green-50 hover:bg-[#00A795]">
              Call
              <PiPhoneCallLight className="bg-[#9DACB3] rounded-full p-[5px]  w-[30px] h-[30px] hover:bg-[#86e3d9]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero