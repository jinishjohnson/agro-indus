import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPeopleOpen, setIsPeopleOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home"); // Track the active tab

  // const location = useLocation();

  // useEffect(()=>{
  //   const path = location.pathname;
  //   if(path === "/"){
  //     setActiveTab("Home");
  //     }
  //     else if(path === "/about-us"){
  //       setActiveTab("About Us");
  //     }
  //     else if(path == )

  // })

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const togglePeopleMenu = () => {
    setIsPeopleOpen(!isPeopleOpen);
  };

  const toggleProductMenu = () => {
    setIsProductOpen(!isProductOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Set the clicked tab as active
    setIsPeopleOpen(false);
    setIsProductOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 text-dark bg-transparent">
        <div className="text-xl font-bold cursor-pointer">
          <a href="/">LOGO</a>
        </div>
        <div className="hidden md:flex links">
          <ul className="flex space-x-4 cursor-pointer">
            <li
              className={`px-2 transition ease-in-out delay-75 bg-white-100 ${
                activeTab === "/" ? "text-[#85A947]" : "text-dark-900"
              } hover:text-[#85A947] duration-200`}
              onClick={() => handleTabClick("/")}
            >
             <Link to={"/"}>Home</Link> 
            </li>
            <li
              className={`relative inline-flex px-2 transition ease-in-out delay-75 bg-white-100 ${
                activeTab === "People" ? "text-[#85A947]" : "text-dark-900"
              } hover:text-[#85A947] duration-200`}
              onClick={() => {
                handleTabClick("People");
                togglePeopleMenu();
              }}
            >
              People <AiFillCaretDown className="my-1.5 mx-1" />
              {isPeopleOpen && (
                <div className="absolute z-100 left-0 top-full p-4 mt-1 bg-white rounded shadow-lg">
                  <ul className="flex flex-col space-y-2 p-4 w-100">
                    <li
                      className="text-xs w-full transition ease-in-out delay-75 bg-white-100 text-dark-900 hover:text-[#85A947] duration-200"
                      onClick={() => handleTabClick("About Us")}
                    >
                      <Link to="/about-us">About Us</Link>
                    </li>

                    <li
                      className="w-full text-xs transition ease-in-out delay-75 bg-white-100 text-dark-900 hover:text-[#85A947] duration-200"
                      onClick={() => handleTabClick("Board of Directors")}
                    >
                      <Link to="/Board-of-directors">Board of Directors</Link>
                    </li>
                    <li
                      className="w-full text-xs transition ease-in-out delay-75 bg-white-100 text-dark-900 hover:text-[#85A947] duration-200"
                      onClick={() => handleTabClick("Our Directories")}
                    >
                      <Link to="/Our-Directories">Our Directories</Link>
                    </li>
                    <li
                      className="w-full text-xs transition ease-in-out delay-75 bg-white-100 text-dark-900 hover:text-[#85A947] duration-200"
                      onClick={() => handleTabClick("Ventures")}
                    >
                      <Link to="/Ventures">Ventures</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className={`px-2 inline-flex transition ease-in-out delay-75 bg-white-100 ${
                activeTab === "Products" ? "text-[#85A947]" : "text-dark-900"
              } hover:text-[#85A947] duration-200`}
              onClick={() => {
                handleTabClick("Products");
                toggleProductMenu();
              }}
            >
              Products <AiFillCaretDown className="my-1.5 mx-1" />
              {isProductOpen && (
                <div className="absolute left-0 top-full p-4 mt-1 bg-white rounded shadow-lg">
                  <ul className="flex flex-col space-y-2 p-4 w-100">
                    <li
                      className="text-xs w-full transition ease-in-out delay-75 bg-white-100 text-dark-900 hover:text-[#85A947] duration-200"
                      onClick={() => handleTabClick("Trading")}
                    >
                      <Link to="/Trading"> Trading</Link>
                    </li>
                    <li
                      className="w-full text-xs transition ease-in-out delay-75 bg-white-100 text-dark-900 hover:text-[#85A947] duration-200"
                      onClick={() => handleTabClick("Manufacturing")}
                    >
                      <Link to="/Manufacturing">Manufacturing</Link>
                    </li>
                    <li
                      className="w-full text-xs transition ease-in-out delay-75 bg-white-100 text-dark-900 hover:text-[#85A947] duration-200"
                      onClick={() => handleTabClick("Upcoming")}
                    >
                      <Link to="/Upcoming">Upcoming</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className={`px-2 transition ease-in-out delay-75 bg-white-100 ${
                activeTab === "Services" ? "text-[#85A947]" : "text-dark-900"
              } hover:text-[#85A947] duration-200`}
              onClick={() => handleTabClick("Services")}
            >
              <Link to="/Services">Services</Link>
            </li>
            <li
              className={`px-2 transition ease-in-out delay-75 bg-white-100 ${
                activeTab === "Tour" ? "text-[#85A947]" : "text-dark-900"
              } hover:text-[#85A947] duration-200`}
              onClick={() => handleTabClick("Tour")}
            >
              <Link to="/Tour">Tour</Link>
            </li>
            <li
              className={`px-2 transition ease-in-out delay-75 bg-white-100 ${
                activeTab === "Contact" ? "text-[#85A947]" : "text-dark-900"
              } hover:text-[#85A947] duration-200`}
              onClick={() => handleTabClick("Contact")}
            >
              <Link to="/Contact-Us">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col space-y-2 p-4">
            <li
              className={`px-1 rounded-2xl transition ease-in-out delay-75 ${
                activeTab === "/"
                  ? "text-white bg-red-900"
                  : "hover:text-white hover:bg-red-900"
              } duration-200`}
              onClick={() => handleTabClick("/")}
            >
              <Link to="/">Home</Link> 
            </li>
            <li
              className={`px-1 rounded-2xl transition ease-in-out delay-75 ${
                activeTab === "About"
                ? "text-white bg-red-900"
                : "hover:text-white hover:bg-red-900"
                } duration-200`}
              onClick={() => handleTabClick("About")}
            >
                <Link to="/About">About</Link> 
              
            </li>
            <li
              className={`px-1 rounded-2xl transition ease-in-out delay-75 ${
                activeTab === "Services"
                ? "text-white bg-red-900"
                : "hover:text-white hover:bg-red-900"
                } duration-200`}
              onClick={() => handleTabClick("Services")}
            >
              <Link to="/services">Services</Link> 
              
            </li>
            <li
              className={`px-1 rounded-2xl transition ease-in-out delay-75 ${
                activeTab === "Contact"
                ? "text-white bg-red-900"
                : "hover:text-white hover:bg-red-900"
                } duration-200`}
              onClick={() => handleTabClick("Contact")}
            >
                <Link to="/Contact-us">Contact</Link> 
              
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
