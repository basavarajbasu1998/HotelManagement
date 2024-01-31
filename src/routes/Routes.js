import React, { Children } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import AdminLayout from "../layout";
import Dashboard from "../dashboard/Dashboard";
import About from "../about/About";
import Service from "../service/Service";
import Contact from "../contact/Contact";

const Routes = () => {
  const adminRoutes = useRoutes([
    {
      path: "/atom/",
      element: <AdminLayout />,

      children: [
        {
          element: <Navigate to="/dashboard" />,
          index: true,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "services",
          element: <Service />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <>{adminRoutes}</>;
};

export default Routes;
