import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home";
import Jobs from "../Pages/JobsPage/Jobs";
import AppliedJob from "../Pages/AppliedPage/AppliedJob";
import Statistics from "../Pages/StatisticsPage/Statistics";
import Error from "../Pages/ErrorPage/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<Error/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "applied",
        element:<AppliedJob/>
      },
      {
        path:"statistics",
        element: <Statistics />
      }
    ],
  },
]);

export default router;
