import CreditsPage from "../pages/CreditsPage";
import { Routes, Route } from "react-router-dom";
import GamesPage from "../pages/creative/GamesPage";
import HeaderBreadcrumbs from "../components/navigation/HeaderBreadcrumbs";
import InteractiveArtPage from "../pages/creative/InteractiveArtPage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/authentication/LoginPage";
import SignupPage from "../pages/authentication/SignupPage";
import SuscribePage from "../pages/dashboard/SuscribePage";
import UserDashboard from "../pages/dashboard/UserDashboard";
import UnsuscribePage from "../pages/dashboard/UnsuscribePage";
import UploadWorkPage from "../pages/dashboard/UploadWorkPage";

const RoutesComponent = () => {
  return (
    <>
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
        {/* INDIVIDUAL ROUTES */}
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
        <Route exact path="/suscribe" element={<SuscribePage></SuscribePage>} />
        <Route
          exact
          path="/uploads"
          element={<UploadWorkPage></UploadWorkPage>}
        />
        <Route
          exact
          path="/unsuscribe"
          element={<UnsuscribePage></UnsuscribePage>}
        />
      </Routes>
    </>
  );
};

export default RoutesComponent;
