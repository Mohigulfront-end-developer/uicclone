import React from 'react'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { BiSolidGridAlt } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

const Blog = () => {
  return (
    <div>
      <div className="bg-[#1E1E20]">
        <Header />
        <div className="container">
          <h1 className="text-center py-10 text-white text-[85px] font-bold">
            Blog
          </h1>
          <div className="flex flex-row gap-6 items-center ">
            <div className="py-2 px-[10px] bg-transparent  border border-white/10 rounded-xl ">
              <BiSolidGridAlt className="text-white/60 w-[35px] h-[35px]" />
            </div>
            {[
              "Holidays",
              "Advice",
              "About programming languages",
              "Articles",
              "News",
              "From our project",
            ].map((category) => (
              <button
                key={category}
                className="font-roboto py-2 px-4 md:py-3.5 md:px-6 text-white/60 whitespace-nowrap border-solid border border-white/20 sm:rounded-[12px] rounded-[8px] hover:text-[#1A8377] hover:border-[#1A8377] duration-300 cursor-pointer"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex  items-center mt-[30px] pb-[30px]">
            <CiSearch className='text-white/60 absolute w-[20px] h-[20px]'/>
            <input
              type="text"
              className="bg-[#19191B] text-white/60 px-4 py-4 rounded-xl outline-none w-full mr-[10px] "
              placeholder="Search "
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog