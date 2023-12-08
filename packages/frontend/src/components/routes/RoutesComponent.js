import ArtsCreditsPage from "../../pages/ui/credits/creative/ArtsCreditPage";
import CreditsPage from "../../pages/ui/credits/main/CreditsPage";
import DashboardCreditsPage from "../../pages/ui/credits/dashboard/DashboardCreditsPage";
import { Routes, Route } from "react-router-dom";
import GamesPage from "../../pages/creative/GamesPage";
import GamePageCredits from "../../pages/ui/credits/creative/GameCreditsPage";
import HeaderBreadcrumbs from "../navigation/home/HeaderBreadcrumbs";
import ImageCreditsPage from "../../pages/ui/credits/main/ImageCreditsPage";
import InteractiveArtPage from "../../pages/creative/InteractiveArtPage";
import LandingPage from "../../pages/ui/main/LandingPage";
import LoginPage from "../../pages/authentication/LoginPage";
import SignupPage from "../../pages/authentication/SignupPage";
import SubscribePage from "../../pages/dashboard/subscriptions/SubscribePage";
import UserDashboard from "../../pages/dashboard/UserDashboard";
import UnsubscribePage from "../../pages/dashboard/subscriptions/UnsubscribePage";
import UploadedFilesPage from "../../pages/dashboard/uploads/UploadedFilesPage";
import UploadWorkPage from "../../pages/dashboard/uploads/UploadWorkPage";

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
        <Route
          exact
          path="/art-image-credits"
          element={<ArtsCreditsPage></ArtsCreditsPage>}
        />
        <Route exact path="/credits" element={<CreditsPage></CreditsPage>} />
        <Route
          exact
          path="/files"
          element={<UploadedFilesPage></UploadedFilesPage>}
        />
        <Route
          exact
          path="/dashboard"
          element={<UserDashboard></UserDashboard>}
        />
        <Route
          exact
          path="/dashboard-image-credits"
          element={<DashboardCreditsPage></DashboardCreditsPage>}
        />
        <Route
          exact
          path="/image-credits"
          element={<ImageCreditsPage></ImageCreditsPage>}
        />
        <Route
          exact
          path="/interactive-art"
          element={<InteractiveArtPage></InteractiveArtPage>}
        />
        <Route exact path="/games" element={<GamesPage></GamesPage>} />
        <Route
          exact
          path="/game-image-credits"
          element={<GamePageCredits></GamePageCredits>}
        />
        <Route exact path="/login" element={<LoginPage></LoginPage>} />
        <Route exact path="/signup" element={<SignupPage></SignupPage>} />
        <Route
          exact
          path="/subscribe"
          element={<SubscribePage></SubscribePage>}
        />
        <Route
          exact
          path="/uploads"
          element={<UploadWorkPage></UploadWorkPage>}
        />
        <Route
          exact
          path="/unsubscribe"
          element={<UnsubscribePage></UnsubscribePage>}
        />
      </Routes>
    </>
  );
};

export default RoutesComponent;
