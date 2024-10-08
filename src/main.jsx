import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx"; 
import User from "./components/user/user.jsx"; 
import Project from "./components/project/project.jsx"; 
import Resource from "./components/resource/resource.jsx"; 
import View from "./components/view/view.jsx"; 
import Userview from "./components/userview/userview.jsx"; 
import Viewproject from "./components/viewproject/viewproject.jsx"; 
import Manager from "./components/manager/manager.jsx"; 
import Prograss from "./components/prograss/prograss.jsx"; 
import Viewprograss from "./components/viewprograss/viewprograss.jsx"; 
import Task from "./components/task/task.jsx"; 
import Viewtask from "./components/viewtask/viewtask.jsx";
import Resources from "./components/resources/resources.jsx";
import Viewresource from "./components/viewresource/viewresource.jsx";
import "./index.css";

// Create the router
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/user", element: <User /> },
  { path: "/project", element: <Project /> },
  { path: "/resource", element: <Resource /> },
  { path: "/view", element: <View /> },
  { path: "/userview", element: <Userview /> },
  { path: "/viewproject", element: <Viewproject /> },
  { path: "/manager", element: <Manager /> },
  { path: "/prograss", element: <Prograss /> }, 
  { path: "/viewprograss", element: <Viewprograss /> }, 
  { path: "/task", element: <Task /> }, 
  { path: "/viewtask", element: <Viewtask/> }, 
  { path: "/resources", element: <Resources/> }, 
  { path: "/viewresource", element: <Viewresource/> }, 
]);

// Render the app
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
