import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineExplore } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";
import AboutPopup from "./AboutPopup";
import { useState } from "react";

const Header = ({ toggleSidebarVisibility }) => {
  const [showAboutPopup, setShowAboutPopup] = useState(false);

  const toggleAboutPopup = () => {
    if (!showAboutPopup) {
      setShowAboutPopup(true);
    } else {
      setShowAboutPopup(false);
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
      <div className="w-80 flex justify-around items-center">
        <div className="flex flex-col items-center cursor-pointer group">
          <MdOutlineExplore className="text-white text-xl hover:opacity-80 transition-opacity duration-300" />
          <div className="text-white text-bold text-sm group-hover:opacity-80 transition-opacity duration-300">
            Explore
          </div>
        </div>
        <div
          onClick={toggleAboutPopup}
          className="flex flex-col items-center cursor-pointer"
        >
          <AboutPopup showAboutPopup={showAboutPopup} />
          <IoMdInformationCircle className="text-white text-xl hover:opacity-80 transition-opacity duration-300" />
          <div className="text-white text-bold text-sm group-hover:opacity-80 transition-opacity duration-300">
            About
          </div>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
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
