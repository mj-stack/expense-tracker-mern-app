import { Outlet } from "react-router";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Footer from "./components/Footer";

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
      <Sidebar showSidebar={showSidebar} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
