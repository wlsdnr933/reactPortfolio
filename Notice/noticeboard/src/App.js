import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MakerPage from "./pages/MakerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/maker" element={<MakerPage />} />
    </Routes>
  );
}

export default App;
