import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineExplore } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";
import AboutPopup from "./AboutPopup";
import { useState } from "react";
import ExplorePopup from "./ExplorePopup";

const Header = ({ toggleSidebarVisibility }) => {
  const [showAboutPopup, setShowAboutPopup] = useState(false);
  const [showExplorePopup, setShowExplorePopup] = useState(false);

  const toggleAboutPopup = () => {
    if (!showExplorePopup) {
      if (!showAboutPopup) {
        setShowAboutPopup(true);
      } else {
        setShowAboutPopup(false);
      }
    } else if (showExplorePopup) {
      if (!showAboutPopup) {
        setShowExplorePopup(false);
        setShowAboutPopup(true);
      } else {
        setShowAboutPopup(false);
      }
    }
  };

  const toggleExplorePopup = () => {
    if (!showAboutPopup) {
      if (!showExplorePopup) {
        setShowExplorePopup(true);
      } else {
        setShowExplorePopup(false);
      }
    } else if (showAboutPopup) {
      if (!showExplorePopup) {
        setShowAboutPopup(false);
        setShowExplorePopup(true);
      } else {
        setShowExplorePopup(false);
      }
    }
  };

  return (
    <header className="h-[60px] bg-slate-700 flex justify-between">
      <div className="text-white text-3xl font-mono w-70 flex justify-center items-center">
        <GiHamburgerMenu
          onClick={toggleSidebarVisibility}
          className="mr-8 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
        />
        MoneyMate
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
        <div className="flex flex-col flex-1 justify-center items-center cursor-pointer">
          <RiAccountCircleFill className="text-white text-xl hover:opacity-80 transition-opacity duration-300" />
          <div className="text-white text-bold text-sm group-hover:opacity-80 transition-opacity duration-300">
            Account
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
