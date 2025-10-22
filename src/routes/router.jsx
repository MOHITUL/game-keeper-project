import { createBrowserRouter } from "react-router";
import Games from "../pages/Games";
import MainLayout from "../layouts/MainLayout";
import LogIn from "../pages/LogIn";
import Installation from "../pages/Installation";
import SignUp from "../pages/SignUp";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <MainLayout></MainLayout>,
            errorElement:<ErrorPage/>,
            children:[
                {
                    index:true,
                    element:<Home></Home>
                },
                {
                    path:"/games",
                    element: <Games></Games>,
                },
                {
                    path:"/installation",
                    element:<Installation></Installation>,
                },
                {
                    path:"/login",
                    element:<LogIn></LogIn>,
                },
                {
                    path:"/signup",
                    element:<SignUp></SignUp>,
                },
            ]
        },
        
    ]
);

export default router;