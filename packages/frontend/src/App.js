import { BrowserRouter } from "react-router-dom";
import Copyright from "./components/ui/main/Copyright";
import React from "react";
import RoutesComponent from "./components/routes/RoutesComponent";
import "./stylesheets/App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* ROUTES COMPONENT */}
        <RoutesComponent></RoutesComponent>
        {/* COPYRIGHT COMPONENT*/}
        <Copyright />
      </BrowserRouter>
    </>
  );
}

export default App;
