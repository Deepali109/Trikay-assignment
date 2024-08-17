import { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import StudyJourney from "./component/mainContent/StudyJourney";
// import StepPage from "./component/mainContent/newpage";

function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <Router>
        <Routes>
          <Route path="/" element={<StudyJourney />} />
          <Route path="/step/:stepIndex" element={<StepPage />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
