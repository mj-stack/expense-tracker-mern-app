import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineExplore } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="h-[60px] bg-slate-700 flex justify-between">
      <div className="text-white text-3xl font-mono w-70 flex justify-center items-center">
        <GiHamburgerMenu className="mr-8 hover:opacity-80 transition-opacity duration-300 cursor-pointer" />
        MoneyMate
      </div>
      <div className="w-80 flex justify-around items-center">
        <div className="flex flex-col items-center cursor-pointer group">
          <MdOutlineExplore className="text-white text-xl hover:opacity-80 transition-opacity duration-300" />
          <div className="text-white text-bold text-sm group-hover:opacity-80 transition-opacity duration-300">
            Explore
          </div>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
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
