import { NavLink } from "react-router-dom";
import Logo from "../../../public/logo.svg";

const Header = () => {
  return (
    <div className="">
      <div className="container ">
        <div className="flex justify-between items-center gap-10 py-[20px]">
          <div className="">
            <NavLink to={"/"}>
              <img src={Logo} alt="logo" />
            </NavLink>
          </div>
          <ul className="flex justify-between items-center gap-8 text-[#86A9A7] font-semibold text-[17px]">
            <NavLink to={"/aboutus"} className="hover:text-white">
              ABOUT US
            </NavLink>
            <NavLink to={"/services"} className="hover:text-white">
              SERVICES
            </NavLink>
            <NavLink to={"/portfolio"} className="hover:text-white">
              PORTFOLIO
            </NavLink>
            <NavLink to={"/career"} className="hover:text-white">
              CAREER
            </NavLink>
            <NavLink to={"/blog"} className="hover:text-white">
              BLOG
            </NavLink>
            <li className="hover:text-white text-[20px]">
              +998 71 <span className="text-white">200 70 07</span>
            </li>
          </ul>
          <div className="flex">
            <button className="py-2 px-4 border rounded-lg border-[#A2ABB2] text-white">
              EN
            </button>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
