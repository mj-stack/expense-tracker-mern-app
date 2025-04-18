import { useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignupPage = () => {
  const navigate = useNavigate();

  const nameRef = useRef("");
  const surnameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const createUser = async (e) => {
    e.preventDefault();
    const newUser = {
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    };

    console.log(newUser);
    try {
      await axios.post("http://localhost:4000/signup", newUser);
      alert("User created successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <main className="flex justify-center items-center min-h-[800px]">
        <div className="flex flex-col bg-slate-800 border-slate-800 h-[500px] w-[450px] rounded-3xl">
          <form className="border-b-4 border-white flex-4 flex flex-col justify-center items-center">
            <div className="mb-4">
              <input
                required
                ref={nameRef}
                type="text"
                className="w-[180px] h-[45px] border-4 border-slate-500 bg-white rounded-xl mr-2 pl-2 placeholder:text-slate-700 outline-0"
                placeholder="Name"
              />
              <input
                required
                ref={surnameRef}
                type="text"
                className="w-[180px] h-[45px] border-4 border-slate-500 bg-white rounded-xl pl-2 placeholder:text-slate-700 outline-0"
                placeholder="Surname"
              />
            </div>
            <input
              required
              ref={emailRef}
              type="text"
              className="w-[366px] h-[45px] border-4 border-slate-500 mb-4 bg-white rounded-xl pl-2 placeholder:text-slate-700 outline-0"
              placeholder="Email"
            />
            <input
              required
              ref={passwordRef}
              type="text"
              className="w-[366px] h-[45px] border-4 border-slate-500 mb-4 bg-white rounded-xl pl-2 placeholder:text-slate-700 outline-0"
              placeholder="Create a password"
            />
            <input
              required
              ref={confirmPasswordRef}
              type="text"
              className="w-[366px] h-[45px] border-4 border-slate-500 mb-8 bg-white rounded-xl pl-2 placeholder:text-slate-700 outline-0"
              placeholder="Confirm password"
            />
            <button
              type="submit"
              onClick={createUser}
              className="w-[366px] h-[45px] bg-slate-400 rounded-xl cursor-pointer hover:opacity-90 active:opacity-80"
            >
              Sign up
            </button>
          </form>
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
