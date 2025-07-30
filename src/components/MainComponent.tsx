import * as React from "react";
import "../App.css";
import { AboutComponent } from "./AboutComponent";
import Projects from "./Projects.tsx";
import {Other} from "./Other.tsx";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

// const url = "https://api.lanyard.rest/v1/users/242276511028084738";

export const MainComponent: React.FC = () => {
  // const [discordStatus, setDiscordStatus] = React.useState("offline");
  //
  // // Client-side fetch on component mount and periodically
  // React.useEffect(() => {
  //   const fetchDiscordStatus = async () => {
  //     try {
  //       const response = await fetch(url, {
  //         headers: {
  //           "Cache-Control": "no-cache", // Prevent caching
  //         },
  //       });
  //       const data = await response.json();
  //       setDiscordStatus(data.data.discord_status || "offline");
  //     } catch (error) {
  //       console.error("Error fetching Discord information", error);
  //       setDiscordStatus("offline");
  //     }
  //   };
  //
  //   fetchDiscordStatus();
  // }, []);

  // const color = getColor(discordStatus);
  const hoverStyle = `hover:text-gray-500 duration-200`
  return (
    <div className="main flex-nowrap mx-auto max-w-sm md:max-w-2xl lg:max-w-4xl">
      <div className="mt-[5%] h-full ">
        <BrowserRouter>
        <div className="flex justify-center md:justify-start mx-auto">

        </div>
        <div>
    <div className={"flex space-x-4 text-white justify-center"}>
      <button className={hoverStyle}>
        <Link to={{
          pathname: "/",
        }} >
        About
        </Link>
      </button>
      <button className={hoverStyle}>
        <Link to={{
          pathname: "/projects",
        }}>
        Projects
      </Link>
      </button>
      <button className={hoverStyle}>
        <Link to={{
          pathname: "/other",
        }}>
        Other
      </Link>
      </button>
    </div>


        </div>

          <Routes>
            <Route path={"/"} element={<AboutComponent />} />
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/other"} element={<Other/>} />
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

