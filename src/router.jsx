import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardHome from "./pages/dashboard/DashboardHome";
import AllEvents from "./pages/AllEvents";
import EventCreate from "./pages/dashboard/EventCreate";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
        children: [
            {
                path: "allEvents",
                element: <AllEvents></AllEvents>
            },
            {
                path: "eventCreate",
                element: <EventCreate></EventCreate>
            }
        ]
    }
]);

