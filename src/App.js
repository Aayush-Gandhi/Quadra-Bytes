import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AboutUs, Home, Services } from "./Routes";

function App() {
  return (
    <Routes>
        <Route path='/' element={(<Home />)} />
        <Route path='/AboutUs' element={(<AboutUs />)} />
        <Route path='/Services' element={(<Services />)} />
        {/* <Route path='/Aboutus' element={(<Aboutus />)} /> */}
        
    </Routes>
  );
}

export default App;
