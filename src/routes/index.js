import { Navigate, useRoutes } from "react-router-dom";
import { PATH_DASH } from "./path";

import Dashboard from "../modules/dashboard/dashboard";
import Finance from "../modules/finance/finance";
import Navbars from "../modules/nav/navbar";
import Orders from "../modules/orders/orders";

export function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to={PATH_DASH.dashboard} />,
    },
    {
      path: PATH_DASH.root, // '/dashboard'
      element: <Navbars />, // This layout contains <Outlet />
      children: [
        {
          path: "dashboard", // Final path: /dashboard/dashboard
          element: <Dashboard />,
        },
        {
          path: "finance", // Final path: /dashboard/finance
          element: <Finance />,
        },
        {
          path: "orders", // Final path: /dashboard/orders
          element: <Orders />,
        },
        // add more children here
      ],
    },
  ]);
}
