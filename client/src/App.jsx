import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import "./index.css";
import { useState } from "react";
import Footer from "./components/Footer";
import HomePage from "./routes/HomePage";

function App() {
  const [showSidebar, setshowSidebar] = useState(true);

  const toggleSidebarVisibility = () => {
    if (showSidebar) {
      setshowSidebar(false);
    } else {
      setshowSidebar(true);
    }
  };
  return (
    <>
      <Header toggleSidebarVisibility={toggleSidebarVisibility} />
      <div className="flex-grow flex min-h-[800px]">
        <Sidebar showSidebar={showSidebar} />
        <HomePage />
      </div>
      <Footer showSidebar={showSidebar} />
    </>
  );
}

export default App;
