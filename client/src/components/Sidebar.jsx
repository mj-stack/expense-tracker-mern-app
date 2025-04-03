import { MdAccountCircle } from "react-icons/md";
import { FaAngleUp } from "react-icons/fa";
import AccountPopup from "./AccountPopup";
import { useState } from "react";

const Sidebar = ({ showSidebar }) => {
  const [acctPopupVisible, setAcctPopupVisible] = useState(false);

  const toggleAcctPopup = () => {
    if (!acctPopupVisible) {
      setAcctPopupVisible(true);
    } else {
      setAcctPopupVisible(false);
    }
  };

  return (
    showSidebar && (
      <aside className="w-[150px] h-[84.2%] bg-slate-500 relative left-0 top-0 text-white flex justify-center">
        <ul className="mt-8">
          <li className="pl-6 pr-6 pt-2 pb-2 bg-slate-900 rounded-xl flex justify-center mb-4 cursor-pointer hover:opacity-80 transition-opacity duration-300">
            Dashboard
          </li>
          <li className="pl-6 pr-6 pt-2 pb-2 bg-slate-900 rounded-xl flex justify-center mb-4 cursor-pointer hover:opacity-80 transition-opacity duration-300">
            Blogs
          </li>
          <li className="pl-6 pr-6 pt-2 pb-2 bg-slate-900 rounded-xl flex justify-center mb-4 cursor-pointer hover:opacity-80 transition-opacity duration-300">
            Invest
          </li>
          <li className="pl-6 pr-6 pt-2 pb-2 bg-slate-900 rounded-xl flex justify-center mb-4 cursor-pointer hover:opacity-80 transition-opacity duration-300">
            Save
          </li>
        </ul>

        <div className="absolute border-t-2 bottom-0 left-0 right-0 h-[40px] flex justify-between items-center">
          <AccountPopup acctPopupVisible={acctPopupVisible} />
          <MdAccountCircle className="text-3xl ml-[5px]" />
          <div className="w-[80px] overflow-hidden">
            <div className="text-sm text-slate-800 font-bold mb-[-1px]">
              John doe
            </div>
            <div className="text-[0.60rem] text-slate-800 font-bold overflow-hidden">
              example@email.com
            </div>
          </div>
          <div
            onClick={toggleAcctPopup}
            className="cursor-pointer hover:bg-gray-400 transition-all duration-200 pt-0.5 pb-0.5 pl-0.5 pr-0.5 rounded-4xl flex justify-center items-center mr-[5px]"
          >
            <FaAngleUp className="text-white text-xl" />
          </div>
        </div>
      </aside>
    )
  );
};
export default Sidebar;
