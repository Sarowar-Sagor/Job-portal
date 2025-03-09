import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/AppliedJob/JobApply";
import MyApplication from "../Pages/MyApplication";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJob from "../MyPostedJob/MyPostedJob";
import ViewJobApplications from "../ViewJobApplications/ViewJobApplications";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Route not found</h2>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/jobapply/:id",
                element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
            },
            {
                path: "/myapplication",
                element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>

            },
            {
                path: "/viewJobApplications/:job_id",
                element: <PrivateRoute><ViewJobApplications></ViewJobApplications></PrivateRoute>,
                loader: ({params}) => fetch(`https://job-portal-server-mu.vercel.app/job-applications/${params.job_id}`)
            },
            {
                path: "/myPostedJob",
                element: <PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>
            },
            {
                path: "/jobs/:id",
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://job-portal-server-mu.vercel.app/jobs/${params.id}`)
            },
            {
                path: "/addJob",
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    }
])

export default router;