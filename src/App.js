import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import MainPage from "./MainPage";
import Map from "./Map";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/location" element={<Map />} />
      </Routes>
    </Router>
  );
}

export default App;
