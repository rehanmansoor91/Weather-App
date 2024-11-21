import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a target ="_blank" href="https://github.com/rehanmansoor91/Weather-App">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/rehan-mansoor-1908na/">
          Rehan Mansoor
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://vercel.com/rehanmansoor786786-gmailcoms-projects/weather-app/8xP3RjG1XM3vFcBkQKPbT7cz1ceu">
          Vercel
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
