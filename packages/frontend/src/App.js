import ArtsPage from "./pages/ArtPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatGame from "./sketches/CatGame";
import CreditsPage from "./pages/CreditsPage";
import Copyright from "./components/Copyright";
import GamesPage from "./pages/GamesPage";
import HeaderBreadcrumbs from "./components/HeaderBreadcrumbs";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import React from "react";
import SignupPage from "./pages/Signup";
import "./stylesheets/App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <HeaderBreadcrumbs />
                <p>{!data ? "Loading..." : data}</p>
                <LandingPage></LandingPage>
              </>
            }
          />
          <Route exact path="/credits" element={<CreditsPage></CreditsPage>} />
          <Route exact path="/games" element={<GamesPage></GamesPage>} />
          <Route exact path="/art" element={<ArtsPage></ArtsPage>} />
          <Route exact path="/login" element={<LoginPage></LoginPage>} />
          <Route exact path="/signup" element={<SignupPage></SignupPage>} />
          <Route exact path="/cat-game" element={<CatGame></CatGame>} />
        </Routes>
        <Copyright />
      </BrowserRouter>
    </>
  );
}

export default App;
