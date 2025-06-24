import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Sudheer {username}</h1>
    </div>
  );
}

const username = "Kumar Sharma";

const reactcomponent = React.createElement(
  "a",
  { href: "google.com", target: "_blank" },
  "clock now",
  username
);

createRoot(document.getElementById("root")).render(reactcomponent);

// </StrictMode>
