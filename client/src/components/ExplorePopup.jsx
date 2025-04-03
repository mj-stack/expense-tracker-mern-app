import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";

const ExplorePopup = ({ showExplorePopup }) => {
  return (
    showExplorePopup && (
      <div className="absolute top-[65px] right-[190px] bg-slate-900 min-h-[120px] min-w-[120px] flex rounded-lg">
        <ul className="flex-1/2 flex flex-col items-center">
          <li className="flex-1 h-[100%] w-[100%] flex justify-center items-center hover:bg-slate-800 hover:rounded-t-lg">
            <a href="https://www.instagram.com/_oh_em_jay_/" target="_blank">
              <FaInstagram className="text-white text-3xl" />
            </a>
          </li>
          <li className="flex-1 h-[100%] w-[100%] flex justify-center items-center hover:bg-slate-800">
            <a href="https://www.facebook.com/emjayyahanhai/" target="_blank">
              <FaFacebook className="text-white text-3xl" />
            </a>
          </li>
          <li className="flex-1 h-[100%] w-[100%] flex justify-center items-center hover:bg-slate-800 hover:rounded-b-lg">
            <a href="https://x.com/_oh_em_jay_" target="_blank">
              <FaSquareXTwitter className="text-white text-3xl" />
            </a>
          </li>
        </ul>
        <ul className="flex-1/2 flex flex-col items-center">
          <li className="flex-1 h-[100%] w-[100%] flex justify-center items-center hover:bg-slate-800 hover:rounded-t-lg">
            <a href="https://www.youtube.com/@oh_em_jay" target="_blank">
              <FaYoutube className="text-white text-3xl" />
            </a>
          </li>
          <li className="flex-1 h-[100%] w-[100%] flex justify-center items-center hover:bg-slate-800">
            <a href="https://www.github.com/mj-stack" target="_blank">
              <VscGithub className="text-white text-3xl" />
            </a>
          </li>
          <li className="flex-1 h-[100%] w-[100%] flex justify-center items-center hover:bg-slate-800 hover:rounded-b-lg">
            <a
              href="https://www.linkedin.com/in/mukul-joshi-5375a9229"
              target="_blank"
            >
              <FaLinkedinIn className="text-white text-3xl" />
            </a>
          </li>
        </ul>
      </div>
    )
  );
};

export default ExplorePopup;
