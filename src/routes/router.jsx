import { createBrowserRouter } from "react-router";
import Games from "../pages/Games";
import MainLayout from "../layouts/MainLayout";
import LogIn from "../pages/LogIn";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Updateprofile from "../pages/Updateprofile";
import GameDetails from "../pages/GameDetails";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout></MainLayout>,
            errorElement: <NotFound/>,
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
                    path: "/login",
                    element: <LogIn></LogIn>,
                },
                {
                    path: "/register",
                    element: <Register></Register> ,
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/profile",
                    element: (<PrivateRoute>
                        <MyProfile/>
                    </PrivateRoute>) ,
                },
                {
                    path: "/update-profile",
                    element: (<PrivateRoute>
                        <Updateprofile/>
                    </PrivateRoute>) ,
                },
                {
                    path: "/gamedetails/:id",
                    element: (<PrivateRoute>
                        <GameDetails/>
                    </PrivateRoute>) ,
                },
            ]
        },

    ]
);

export default router;