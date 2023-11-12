import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreditsPage from "./pages/CreditsPage";
import Copyright from "./components/Copyright";
import GamesPage from "./pages/creative/GamesPage";
import HeaderBreadcrumbs from "./components/navigation/HeaderBreadcrumbs";
import InteractiveArtPage from "./pages/creative/InteractiveArtPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/authentication/LoginPage";
import React from "react";
import SignupPage from "./pages/authentication/SignupPage";
import "./stylesheets/App.css";
import UserDashboard from "./pages/dashboard/UserDashboard";

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
                {/* HOMEPAGE LAYOUT */}
                <HeaderBreadcrumbs />
                <LandingPage></LandingPage>
              </>
            }
          />
          {/* ROUTES */}
          <Route exact path="/credits" element={<CreditsPage></CreditsPage>} />
          <Route
            exact
            path="/dashboard"
            element={<UserDashboard></UserDashboard>}
          />
          <Route exact path="/games" element={<GamesPage></GamesPage>} />
          <Route
            exact
            path="/interactive-art"
            element={<InteractiveArtPage></InteractiveArtPage>}
          />
          <Route exact path="/login" element={<LoginPage></LoginPage>} />
          <Route exact path="/signup" element={<SignupPage></SignupPage>} />
        </Routes>
        {/* COPYRIGHT*/}
        <Copyright />
      </BrowserRouter>
    </>
  );
}

export default App;
