import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home";
import Jobs from "../Pages/JobsPage/Jobs";
import AppliedJob from "../Pages/AppliedPage/AppliedJob";
import Statistics from "../Pages/StatisticsPage/Statistics";
import Error from "../Pages/ErrorPage/Error";
import JobDetails from "../Components/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
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
        element: <AppliedJob />,
        loader: () => fetch("../../public/jobs.json"),
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: () => fetch("../../public/jobs.json"),
      },
    ],
  },
]);

export default router;
