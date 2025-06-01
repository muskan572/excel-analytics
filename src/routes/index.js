import { Navigate, Outlet, useRoutes } from "react-router-dom";



import { PATH_DASH } from "./path";
import Navbars from "../modules/nav/navbar";


// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to={PATH_DASH.root} />,
    },
    {
      element: <Outlet />,
      children: [
        {
          path: PATH_DASH.root.replace("/", ""), // 'dashboard'
          element: <Navbars />,
          children: [
            {
              path: "navbars", // matches /dashboard/navbars
              
            },
          ],
        },
      ],
    },
  ]);
}
