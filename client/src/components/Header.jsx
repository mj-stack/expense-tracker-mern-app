import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineExplore } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdAssignmentInd } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";
import AboutPopup from "./AboutPopup";
import ExplorePopup from "./ExplorePopup";

const Header = ({ toggleSidebarVisibility }) => {
  const [showAboutPopup, setShowAboutPopup] = useState(false);
  const [showExplorePopup, setShowExplorePopup] = useState(false);
  const [showAccountPopup, setShowAccountPopup] = useState(false);

  const toggleAboutPopup = () => {
    if (!showExplorePopup) {
      setShowAboutPopup(!showAboutPopup);
    } else {
      setShowExplorePopup(false);
      setShowAboutPopup(!showAboutPopup);
    }
  };

  const toggleExplorePopup = () => {
    if (!showAboutPopup) {
      setShowExplorePopup(!showExplorePopup);
    } else {
      setShowAboutPopup(false);
      setShowExplorePopup(!showExplorePopup);
    }
  };

  const toggleAccountPopup = () => {
    setShowAccountPopup(!showAccountPopup);
  };

  return (
    <header className="h-[60px] bg-slate-700 flex justify-between">
      <div className="text-white text-3xl font-mono w-70 flex justify-center items-center">
        <GiHamburgerMenu
          onClick={toggleSidebarVisibility}
          className="mr-8 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
        />
        <Link to={"/"}>MoneyMate</Link>
      </div>
      <div className="w-80 flex">
        <div
          onClick={toggleExplorePopup}
          className="flex flex-col flex-1 justify-center items-center cursor-pointer group"
        >
          <ExplorePopup showExplorePopup={showExplorePopup} />
          <MdOutlineExplore className="text-white text-xl hover:opacity-80 transition-opacity duration-300" />
          <div
            className={`text-white text-bold text-sm group-hover:opacity-80 transition-opacity duration-300 ${
              showExplorePopup && "underline"
            }`}
          >
            Explore
          </div>
        </div>
        <div
          onClick={toggleAboutPopup}
          className="flex flex-col items-center cursor-pointer flex-1 justify-center"
        >
          <AboutPopup showAboutPopup={showAboutPopup} />
          <IoMdInformationCircle className="text-white text-xl hover:opacity-80 transition-opacity duration-300" />
          <div
            className={`text-white text-bold text-sm group-hover:opacity-80 transition-opacity duration-300 ${
              showAboutPopup && "underline"
            }`}
          >
            About
          </div>
        </div>
        <div
          onClick={toggleAccountPopup}
          className="flex flex-col flex-1 justify-center items-center cursor-pointer relative"
        >
          <RiAccountCircleFill className="text-white text-xl hover:opacity-80 transition-opacity duration-300" />
          <div className="text-white text-bold text-sm group-hover:opacity-80 transition-opacity duration-300">
            Account
          </div>
          {showAccountPopup && (
            <div className="absolute top-17 right-6 bg-white text-black p-4 rounded-lg shadow-lg flex flex-col items-center">
              <Link
                to="/login"
                className="mb-2 px-4 py-2 bg-slate-500 text-white rounded-lg hover:bg-slate-600 transition-all duration-300 flex items-center"
              >
                <span className="mr-2">
                  <MdAssignmentInd className="text-lg" />{" "}
                  {/* React Icon for login */}
                </span>
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-slate-500 text-white rounded-lg hover:bg-slate-600 transition-all duration-300 flex items-center"
              >
                <span className="mr-2">
                  <FaSignInAlt className="text-lg" />{" "}
                  {/* React Icon for signup */}
                </span>
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
