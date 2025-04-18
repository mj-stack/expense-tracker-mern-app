import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center min-h-[800px]">
        <div className="flex flex-col bg-slate-800 border-slate-800 h-[500px] w-[450px] rounded-3xl">
          <div className="border-b-4 border-white flex-4 flex flex-col justify-center items-center">
            <div className="mb-4">
              <input
                type="text"
                className="w-[180px] h-[45px] border-4 border-slate-500 bg-white rounded-xl mr-2 pl-2 placeholder:text-slate-700 outline-0"
                placeholder="Name"
              />
              <input
                type="text"
                className="w-[180px] h-[45px] border-4 border-slate-500 bg-white rounded-xl pl-2 placeholder:text-slate-700 outline-0"
                placeholder="Surname"
              />
            </div>
            <input
              type="text"
              className="w-[366px] h-[45px] border-4 border-slate-500 mb-4 bg-white rounded-xl pl-2 placeholder:text-slate-700 outline-0"
              placeholder="Email"
            />
            <input
              type="text"
              className="w-[366px] h-[45px] border-4 border-slate-500 mb-4 bg-white rounded-xl pl-2 placeholder:text-slate-700 outline-0"
              placeholder="Create a password"
            />
            <input
              type="text"
              className="w-[366px] h-[45px] border-4 border-slate-500 mb-8 bg-white rounded-xl pl-2 placeholder:text-slate-700 outline-0"
              placeholder="Confirm password"
            />
            <button className="w-[366px] h-[45px] bg-slate-400 rounded-xl cursor-pointer hover:opacity-90 active:opacity-80">
              Login
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <p className="text-white">
              Already have an account?{" "}
              <span className="underline cursor-pointer">
                {" "}
                <Link to="/login"> Login </Link>{" "}
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

export default SignupPage;
