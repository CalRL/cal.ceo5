import * as React from "react";
import "../App.css";
import {AboutComponent} from "./AboutComponent";
import Projects from "./Projects.tsx";
import {Other} from "./Other.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./Navbar.tsx";
import {NowComponent} from "./NowComponent.tsx";

// const url = "https://api.lanyard.rest/v1/users/242276511028084738";

export const MainComponent: React.FC = () => {
  return (
    <div className="main flex-nowrap mx-auto w-full">
      <div className="mt-4 lg:mt-8 h-full ">
        <BrowserRouter>
          <div className={"flex space-x-4 text-white justify-center"}>
            <Navbar />
          </div>
          <Routes>
            {/*<Route path="/" element={<HomeComponent />} />*/}
            <Route path={"/"} element={<AboutComponent />} />
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/other"} element={<Other/>} />
            <Route path={"/now"} element={< NowComponent />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

// Get color based on the status
// const getColor = (discordStatus: string) => {
//   switch (discordStatus.toLowerCase()) {
//     case "online":
//       return "#43b581"; // Green for online
//     case "idle":
//       return "#faa61a"; // Yellow for idle
//     case "dnd": // Do not disturb
//       return "#f04747"; // Red for DND
//     default:
//       return "#747f8d"; // Grey for offline or unknown
//   }
// };

