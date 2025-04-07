import { FaCopyright } from "react-icons/fa";

const Footer = ({ showSidebar }) => {
  return (
    <footer
      className={`fixed ${
        showSidebar ? "left-[150px]" : "left-0"
      } bottom-0 right-0 h-[50px] bg-slate-800 text-white flex justify-center items-center`}
    >
      <FaCopyright className="mr-[5px]" />
      All rights are reserverd to Mukul Joshi
    </footer>
  );
};

export default Footer;
