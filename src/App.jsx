import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App(props) {
  return (
    <>
      <div className=" flex flex-col h-screen  sm:min-w-full  sm:w-full w-screen bg-gray-200">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
