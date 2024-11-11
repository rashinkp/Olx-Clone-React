import React from "react";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/details/" element={<Details />} />
    </Routes>
  );
};

export default App;
