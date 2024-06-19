import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import ElementOne from "./components/Element/ElementOne.jsx";
import ElementTwo from "./components/Element/ElementTwo.jsx";
import ElementThree, {
  submitData,
} from "./components/Element/ElementThree.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/", element: <ElementTwo /> },
//       { path: "/profile", element: <ElementOne /> },
//       { path: "/register", element: <ElementThree />, action: submitData },
//     ],
//   },
// ]);

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
    
  </Route>
))

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
