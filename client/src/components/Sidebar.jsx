import { MdAccountCircle } from "react-icons/md";
import { FaAngleUp } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-[150px] bg-slate-500 fixed bottom-0 left-0 top-[60px] text-white flex justify-center">
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

      <div className="absolute bg-black bottom-0 left-0 right-0 h-[40px] flex justify-between items-center">
        <MdAccountCircle className="text-3xl ml-[5px]" />
        <div className="w-[80px] overflow-hidden">
          <div className="text-sm">John doe</div>
          <div className="text-[0.60rem] overflow-hidden">
            example@email.comfdkfkjdfhkhfjadhjdfsdfsdsfdsadas
          </div>
        </div>
        <FaAngleUp className="text-white text-xl mr-[5px] cursor-pointer" />
      </div>
    </aside>
  );
};
export default Sidebar;
