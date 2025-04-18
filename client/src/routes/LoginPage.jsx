import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

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
            <input
              type="text"
              className="w-[300px] h-[45px] border-4 border-slate-500 bg-white rounded-xl mb-[60px] pl-2 placeholder:text-slate-700 outline-0"
              placeholder="Password"
            />
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
