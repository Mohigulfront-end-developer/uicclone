import { GoArrowUp } from "react-icons/go";
import { SiTrustpilot } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import { RiRouteFill } from "react-icons/ri";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
  FaYelp,
} from "react-icons/fa";
import Logo from "../../../public/logo.svg"
import { Link, NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div className="bg-[#1E1E20]">
      <div className="container border-b-2 border-[#252526] mb-[50px] pb-[100px]">
        <div className="flex justify-between items-center pb-[20px]">
          <ul className="flex justify-between items-center gap-10 text-[18px] font-semibold text-[#8C8C8D]">
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
          </ul>
          <Link
            to={"/"}
            className="px-4 py-4 border border-[#8C8C8D] bg-transparent rounded-full"
          >
            <GoArrowUp className="text-[#8C8C8D] text-[25px]" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to={"https://www.facebook.com/uicgroup.org"}
            className="border rounded-full p-2 "
          >
            <FaFacebookF className="text-white" />
          </Link>
          <Link
            to={"https://x.com/i/flow/login?redirect_after_login=%2FUIC_Group"}
            className="border rounded-full p-2"
          >
            <FaTwitter className="text-white" />
          </Link>
          <Link
            to={"https://www.instagram.com/uic.group"}
            className="border rounded-full p-2"
          >
            <FaInstagram className="text-white" />
          </Link>
          <Link
            to={"https://t.me/uicgroup"}
            className="border rounded-full p-2"
          >
            <FaTelegramPlane className="text-white" />
          </Link>
          <Link
            to={"https://www.linkedin.com/company/uic-group/"}
            className="border rounded-full p-2"
          >
            <FaLinkedinIn className="text-white" />
          </Link>
          <Link
            to={"https://www.behance.net/uic_group"}
            className="border rounded-full p-2"
          >
            <FaBehance className="text-white" />
          </Link>
          <Link
            to={"https://dribbble.com/uicgroup"}
            className="border rounded-full p-2"
          >
            <FaDribbble className="text-white" />
          </Link>
          <Link to={""} className="border rounded-full p-2">
            <SiTrustpilot className="text-white" />
          </Link>
          <Link
            to={"https://www.trustpilot.com/review/uic.group"}
            className="border rounded-full p-2"
          >
            <FaYelp className="text-white" />
          </Link>
          <div className="flex items-center gap-2">
            <MdAlternateEmail className="text-[white] border rounded-full  w-[20px] h-[20px]" />
            <button className="text-[#8C8C8D]">info@uic.group</button>
          </div>
          <div className="flex items-center gap-2">
            <PiPhoneCall className="text-white border rounded-full w-[20px] h-[20px]" />
            <button className="text-[#8C8C8D]">+998 71 200 70 07</button>
          </div>
        </div>
      </div>
      <div className="container pb-[30px]">
        <div className="flex items-center justify-between">
          <p className="text-[#8C8C8D] text-[15px] font-bold">
            © UIC GROUP 2024
          </p>
          <img src={Logo} alt="" className="w-[65px] h-[65px]" />
          <button className="hover:border-green-600 flex items-center justify-between gap-2 text-[#8C8C8D] px-4 py-2 border border-[#8C8C8D] rounded-lg">
            <RiRouteFill />
            Tashkent city. Shayxontohur district. Adkham Rakhmat street -15/1{" "}
            <span className="rounded-xl bg-green-600 px-4 py-[10px] text-white">Map</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
