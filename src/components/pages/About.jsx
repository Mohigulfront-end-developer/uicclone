import Header from '../header/Header'
import Footer from '../footer/Footer'
import Logo from "../../../public/aboutlogo.png"
import { FaPlay } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const About = () => {
  return (
    <div className="">
      <div className="bg-[#1B2B2B]">
        <Header />
        <div className="container ">
          <img
            src={Logo}
            alt=""
            className="p-10 pt-[60px] w-[600px] h-[200px] ml-[300px]  "
          />
        </div>
      </div>
      <div className="bg-[#1B2B2B]">
        <div className="container text-white  ">
          <h1 className="font-bold text-[35px] mb-[30px]">About UIC</h1>
          <p className="text-[20px] mb-[20px]">
            “United IT Company” was founded on October 8, 2020. According to the
            director of the company Murodkhuja Muratov, the philosophy of the
            company is to create a team that meets international standards in
            the IT field of Uzbekistan, to open up the opportunity for young
            programmers to work on themselves and at the same time be officially
            employed, to bring the company to a prominent place in the world
            arena IT.
          </p>
          <p className="text-[20px] pb-[20px]">
            At the time the company was founded, the team consisted of only 10
            people, and now the team has +100 specialists. These people believed
            in the philosophy of the company and sought to contribute to the
            development of the project. To this day, these people remain loyal
            to the company and develop their teams within the company in
            different directions (Backend, Frontend, QA, Mobile, Analytics,
            Marketing Team, etc.).
          </p>
          <div className="flex items-center justify-center gap-4 h-[120px] w-full border-dashed border-2 rounded-lg border-green-600 px-4 bg-[#252527]">
            <div className="flex items-center justify-center gap-4">
              <div className="circle  text-[#fff]">
                <div className="">
                  <FaPlay size={30} />
                </div>
              </div>
              <NavLink to={"https://uic.group/about"}>
                You can find out more about our work in the showreels
              </NavLink>
            </div>
          </div>
          <h2 className="text-white font-bold text-[25px] py-5">
            Currently, our company offers its IT solutions in 9 main areas:
          </h2>
          <div className="grid grid-cols-3 gap-6 mt-[40px] pb-[100px]">
            <div className="p-2 border border-transparent rounded-lg bg-[#252527] h-[180px] hover:border-green-600 w-[330px]">
              <h4 className="text-white text-[28px] font-bold mb-[15px]">
                Web Development
              </h4>
              <p className="text-[#8F8F90] text-[17px] w-[200px]">
                We develop websites with the high quality, from corporate
                websites to web applications
              </p>
            </div>
            <div className="p-2 border border-transparent rounded-lg bg-[#252527] h-[180px] hover:border-green-600 w-[330px]">
              <h4 className="text-white text-[28px] font-bold mb-[15px]">
                Mobile apps
              </h4>
              <p className="text-[#8F8F90] text-[17px] w-[250px]">
                Development and technical support of mobile applications of any
                complexity
              </p>
            </div>
            <div className="p-2 border border-transparent rounded-lg bg-[#252527] h-[180px] hover:border-green-600 w-[330px]">
              <h4 className="text-white text-[28px] font-bold mb-[15px]">
                UI&UX
              </h4>
              <p className="text-[#8F8F90] text-[17px] w-[250px]">
                Developing a project MindMap and designing it with the optimal
                solution based on its architecture
              </p>
            </div>{" "}
            <div className="p-2 border border-transparent rounded-lg bg-[#252527] h-[180px] hover:border-green-600 w-[330px]">
              <h4 className="text-white text-[28px] font-bold mb-[15px]">
                Media production
              </h4>
              <p className="text-[#8F8F90] text-[17px] w-[250px]">
                Professional preparation of 2D / 3D animation, project
                presentation, advertising, video and other media resources.
              </p>
            </div>{" "}
            <div className="p-2 border border-transparent rounded-lg bg-[#252527] h-[180px] hover:border-green-600 w-[330px]">
              <h4 className="text-white text-[28px] font-bold mb-[15px]">
                CRM Systems
              </h4>
              <p className="text-[#8F8F90] text-[17px] w-[250px]">
                Automation of business and processess, development of electronic
                management systems that reduce paper-work by 100%
              </p>
            </div>{" "}
            <div className="p-2 border border-transparent rounded-lg bg-[#252527] h-[180px] hover:border-green-600 w-[330px]">
              <h4 className="text-white text-[28px] font-bold mb-[15px]">
                Branding
              </h4>
              <p className="text-[#8F8F90] text-[17px] w-[250px]">
                Developing a vreative and unique logo for your project and
                create its branding guidelines
              </p>
            </div>{" "}
            <div className="p-2 border border-transparent rounded-lg bg-[#252527] h-[180px] hover:border-green-600 w-[330px]">
              <h4 className="text-white text-[28px] font-bold mb-[15px]">
                Production of games
              </h4>
              <p className="text-[#8F8F90] text-[17px] w-[250px]">
                Development of games of any subject and comlexoty, corresponding
                to the international level.
              </p>
            </div>
            <div className="p-2 border border-transparent rounded-lg bg-[#252527] h-[180px] hover:border-green-600 w-[330px]">
              <h4 className="text-white text-[28px] font-bold mb-[15px]">
                Artificial intelligence
              </h4>
              <p className="text-[#8F8F90] text-[17px] w-[250px]">
                Development of inteeligent computer systems with the
                capabilities of human intelligence.
              </p>
            </div>
            <div className="p-2 border border-transparent rounded-lg bg-[#252527] h-[180px] hover:border-green-600 w-[330px]">
              <h4 className="text-white text-[28px] font-bold mb-[15px]">
                Cybersecurity
              </h4>
              <p className="text-[#8F8F90] text-[17px] w-[250px]">
                Find and fix vulnerabilities in networks, devices, code, and
                data.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About