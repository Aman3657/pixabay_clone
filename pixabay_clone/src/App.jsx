import React, { useContext } from "react";
import Images from "./components/images";
import PixabayContext from "./context/PixabayContext";
import Navbar from "./components/navbar";
const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Images/>
    </div>
  );
};

export default App;
