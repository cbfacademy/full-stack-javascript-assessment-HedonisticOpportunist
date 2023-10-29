import ArtsPage from "./pages/ArtPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreditsPage from "./pages/CreditsPage";
import Copyright from "./components/Copyright";
import GamesPage from "./pages/GamesPage";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import React from "react";
import SignupPage from "./pages/SignupPage";
import "./stylesheets/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <LandingPage></LandingPage>
              </>
            }
          />
          <Route exact path="/credits" element={<CreditsPage></CreditsPage>} />
          <Route exact path="/games" element={<GamesPage></GamesPage>} />
          <Route exact path="/art" element={<ArtsPage></ArtsPage>} />
          <Route exact path="/login" element={<LoginPage></LoginPage>} />
          <Route exact path="/sign-up" element={<SignupPage></SignupPage>} />
        </Routes>
        <Copyright />
      </BrowserRouter>
    </>
  );
}

export default App;
