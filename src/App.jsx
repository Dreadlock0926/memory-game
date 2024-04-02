import { useState } from "react";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/play" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
