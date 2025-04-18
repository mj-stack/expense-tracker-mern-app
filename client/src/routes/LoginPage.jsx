import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { IoIosEye } from "react-icons/io";

const LoginPage = () => {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center min-h-[800px]">
        <div className="flex flex-col bg-slate-800 border-slate-800 h-[400px] w-[400px] rounded-3xl">
          <div className="border-b-4 border-white flex-4 flex flex-col justify-center items-center">
            <input
              type="text"
              className="w-[300px] h-[45px] border-4 border-slate-500 bg-white rounded-xl mb-4 pl-2 placeholder:text-slate-700 outline-0"
              placeholder="Enter your email"
            />
            <div className="relative w-[300px] h-[45px] mb-[60px]">
              <input
                type="password"
                className="w-full h-full border-4 border-slate-500 bg-white rounded-xl pl-2 pr-10 placeholder:text-slate-700 outline-0"
                placeholder="Password"
              />
              <IoIosEye className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-slate-700" />
            </div>
            <button className="w-[296px] h-[45px] bg-slate-400 rounded-xl cursor-pointer hover:opacity-90 active:opacity-80">
              Login
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <p className="text-white">
              Do not have an account?{" "}
              <span className="underline cursor-pointer">
                {" "}
                <Link to="/signup"> Sign up </Link>{" "}
              </span>{" "}
              here.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
