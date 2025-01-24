import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Routes";

function App() {
  return (
    <Routes>
        <Route path='/' element={(<Home />)} />
        {/* <Route path='/Aboutus' element={(<Aboutus />)} /> */}
        
    </Routes>
  );
}

export default App;
