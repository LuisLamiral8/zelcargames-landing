import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Ferapet from "../pages/Ferapet";
import SecretForest from "../pages/SecretForest";
import Workteam from "../pages/Workteam";
import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ferapet" element={<Ferapet />} />
        <Route path="/secret-forest" element={<SecretForest />} />
        <Route path="/work-team" element={<Workteam />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
