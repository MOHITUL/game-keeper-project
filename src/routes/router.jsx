import { createBrowserRouter } from "react-router";
import Games from "../pages/Games";
import MainLayout from "../layouts/MainLayout";
import LogIn from "../pages/LogIn";
import Installation from "../pages/Installation";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout></MainLayout>,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Home></Home>
                },
                {
                    path: "/games",
                    element: <Games></Games>,
                },
                {
                    path: "/installation",
                    element: (
                        <PrivateRoute>
                            <Installation></Installation>
                        </PrivateRoute>
                    ),
                },
                {
                    path: "/login",
                    element: <LogIn></LogIn>,
                },
                {
                    path: "/register",
                    element: <Register></Register> ,
                },
                {
                    path: "/profile",
                    element: <PrivateRoute>
                        <MyProfile/>
                    </PrivateRoute> ,
                },
            ]
        },

    ]
);

export default router;