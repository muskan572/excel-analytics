import { Navigate, Outlet, useRoutes } from "react-router-dom";

import Dashboard from "../modules/dashboard/dashboard";
import Navbars from "../modules/nav/navbar";

// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/dashboard" />,
    },
    {
      element: <Outlet />,
      children: [
        {
          path: "/dashboard",
          element: <Navbars />,

          children: [
            {
              index: true, // 👈 Important to show Dashboard at /dashboard
              element: <Dashboard />,
            },
          ],
        },
      ],
    },
  ]);
}
