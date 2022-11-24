import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./App.css";
import Results from "./routes/results";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <p>The page you are looking for doesn't exits</p>
      <Link to="/">back to Home</Link>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "results/:bornYear/:currentYear",
    element: <Results />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
reportWebVitals();
