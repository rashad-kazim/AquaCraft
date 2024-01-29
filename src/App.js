import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./App.css";

function App() {
  // Check the page's all content is loaded or not
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setPageLoaded(true);
    };

    // Add event listener for the page load event
    window.addEventListener("load", handleLoad);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  // Check the page's all content is loaded or not

  return (
    <div className="app_container">
      <AppContext.Provider
        value={{
          pageLoaded,
        }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="aquacraft/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
