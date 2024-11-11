import React from "react";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import Sign from "./components/Sign";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/details/" element={<Details />} />
      <Route path="/signin" element={<Sign />} />
    </Routes>
  );
};

export default App;
