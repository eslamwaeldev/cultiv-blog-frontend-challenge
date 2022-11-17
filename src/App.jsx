import { useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen w-full">
        <Navbar />
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
