import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-slate-800 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-slate-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-slate-600 transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
