import { Navigate, Outlet, useRoutes } from "react-router-dom";



import { PATH_DASH } from "./path";


// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to={PATH_DASH.dashboard} />,
    },
    {
      element: <Outlet />,
      children: [
        {
          path: PATH_DASH.root,
          element: <Navbars />,
          children: [
            
          ],
        },
      ],
    },
  ]);
}
