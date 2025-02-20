import  { useEffect, useState } from "react";
import { BsLightningCharge } from "react-icons/bs";
import Lock from "../Lock"
import { GrFormNextLink } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { RiExpandDiagonalFill } from "react-icons/ri";

const About = () => {
  const [count, setCount] = useState(0);
  const [change, setChange] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setChange((prevChange) => prevChange + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const text = "Friendly team Friendly team";
  const characters = text.split("");

  return (
    <div className="bg-[#1e1e20] pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex gap-32 items-center">
          <div className="flex gap-10 w-[120%]">
            <div>
              <div className="relative group">
                <div className="bg-[#00ad9c] absolute w-full h-full z-[-8] bg-opacity-30 flex justify-center items-center rounded-xl group-hover:z-0 ">
                  <div
                    className="bg-white p-3 rounded-full bg-opacity-50"
                    onClick={() => setCount(1)}
                  >
                    <RiExpandDiagonalFill className="text-white text-lg" />
                  </div>
                </div>
                <img
                  src={
                    change % 2 === 1
                      ? "https://uic.group/media/cache/21/e5/21e58126b6c478060b6e6fd54ca6fbba.jpg"
                      : "https://uic.group/media/cache/5a/70/5a70d134e3000c5ef605393b360f73fe.jpg"
                  }
                  alt="img"
                  className="mb-7 h-[400px] rounded-xl  duration-500"
                />
              </div>
              <hr />
              <div className="flex items-center gap-5 mt-7">
                <span className="text-7xl text-white font-bold">10</span>
                <span className="text-lg text-[#00ad9c] font-bold">
                  ANNUAL <br /> QUALIFICATION TEAM
                </span>
              </div>
            </div>
            <div className="flex items-end relative">
              <div className="bg-opacity-70 z-[5] absolute top-9 right-[-100px]">
                <div className="max-w-[1200px] mx-auto">
                  <div className="relative flex items-center justify-center w-52 h-52 mx-auto hover:scale-110 duration-200"></div>
                </div>
              </div>
              <div className="relative group">
                <div className="bg-[#00ad9c] absolute w-full h-full z-[-8] bg-opacity-30 flex justify-center items-center rounded-xl group-hover:z-0">
                  <div
                    className="bg-white p-3 rounded-full bg-opacity-50"
                    onClick={() => setCount(2)}
                  >
                    <RiExpandDiagonalFill className="text-white text-lg" />
                  </div>
                </div>
                <img
                  src={
                    change % 2 === 1
                      ? "https://uic.group/media/cache/63/2a/632ae021916378d650ff3ffb98fcb7c1.jpg"
                      : "https://uic.group/media/cache/1c/ac/1cac8a7441794ad91f2cc94093c84fd0.jpg"
                  }
                  alt=""
                  className="rounded-xl  h-[400px]  duration-500"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className=" border-b-2 border-gray-600 w-[35px]"></span>
              <p className="text-[#00ad9c] text-xl font-bold">IN THE WORLD</p>
            </div>
            <h2 className="text-[white] text-7xl font-bold mb-7">About us</h2>
            <p className="text-[#929293]">
              Every big company needs to thank not only itself, but also those
              who have stood beside it and believed in it. After all, the most
              important principle in our work is trust. <br /> <br /> Trust not
              only ensures the loyalty of customers and partners, but also
              increases our demand for ourselves. We cooperate on the basis of
              relations built on thousand-year human traditions.
            </p>
            <div className="mt-8 flex gap-32">
              <div className="flex gap-6">
                <BsLightningCharge className="w-12 h-12 text-[#00ad9c]" />
                <p className="text-white text-lg font-medium">
                  Quick <br /> solutions
                </p>
              </div>
              <div className="flex gap-6 items-center">
                <Lock />
                <p className="text-white text-lg font-medium">
                  Unique <br /> projects
                </p>
              </div>
            </div>
            <div className="flex items-center gap-9 mt-16 pb-28">
              <div className="hover:bg-[#00ad9c] rounded-lg group bg-[#319188] border-[#319188] border-2 flex items-center gap-3 py-3 px-5">
                <button className="text-white font-bold">Portfolio</button>
                <div className="p-1 bg-[#3dc6bd] rotate-[-45deg] duration-200 group-hover:rotate-0 rounded-full">
                  <GrFormNextLink className="text-white text-xl" />
                </div>
              </div>
              <div className="hover:bg-[#00ad9c] rounded-lg bg-transparent border-2 border-gray-400 flex items-center gap-5 py-3 px-7">
                <button className="text-white font-bold">Call</button>
                <div className="p-1 bg-[#3dc6bd] duration-200 rounded-full">
                  <FiPhoneCall className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {count === 1 && (
          <div
            className="h-[100vh] fixed top-0 right-0 left-0 z-20 w-[100vw] bg-black bg-opacity-60 py-20 flex flex-col items-center justify-center"
            onClick={() => setCount(0)}
          >
            <div className="relative h-[90vh] w-[36vw]">
              <img
                src="https://uic.group/media/cache/21/e5/21e58126b6c478060b6e6fd54ca6fbba.jpg"
                alt=""
                className="h-full rounded-xl w-full"
              />
            </div>
          </div>
        )}
        {count === 2 && (
          <div
            className="h-[100vh] fixed top-0 right-0 left-0 z-20 w-[100vw] bg-black bg-opacity-60 py-20 flex flex-col items-center justify-center"
            onClick={() => setCount(0)}
          >
            <div className="relative h-[90vh] w-[36vw]">
              <img
                src="https://uic.group/media/cache/63/2a/632ae021916378d650ff3ffb98fcb7c1.jpg"
                alt=""
                className="h-full rounded-xl w-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
