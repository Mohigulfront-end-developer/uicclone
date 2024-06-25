import { NavLink } from "react-router-dom";

const Careers = () => {
  return (
    <div className="bg-[#1E1E20] pt-[130px] pb-[50px]">
      <div className="container bg-[#2E2E30] flex  gap-5 justify-between p-10  rounded-xl">
        <div className="w-[600px]">
          <h2 className="text-white font-bold text-[45px] ">
            You can also be among this team :)
          </h2>
          <p className="text-[#8C8C8D] text-[20px] my-[30px]">
            Do you want to growth with us? Now prove to us that you need it!
            Become an integral part of the team
          </p>
        </div>
        <div className="p-10">
          <div className="flex items-center gap-2 mb-[20px]">
            <span className="border border-b-2 border-[#575759] w-[30px]"></span>
            <NavLink
              to={"/career"}
              className="text-[white] text-[20px] hover:text-green-500"
            >
              Flutter developer
            </NavLink>
          </div>
          <div className="flex items-center gap-2 mb-[20px]">
            <span className="border border-b-2 border-[#575759] w-[30px]"></span>
            <NavLink
              to={"/career"}
              className="text-[white] text-[20px] hover:text-green-500"
            >
              Frontend developer (React.js)
            </NavLink>
          </div>
          <div className="flex items-center gap-2 mb-[20px]">
            <span className="border border-b-2 border-[#575759] w-[30px]"></span>
            <NavLink
              to={"/career"}
              className="text-[white] text-[20px] hover:text-green-500"
            >
              Backend developer (Odoo framework)
            </NavLink>
          </div>
          <div className="flex items-center gap-2">
            <span className="border border-b-2 border-[#575759] w-[30px]"></span>
            <NavLink
              to={"/career"}
              className="text-[white] text-[20px] hover:text-green-500"
            >
              UX/UI developer
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers