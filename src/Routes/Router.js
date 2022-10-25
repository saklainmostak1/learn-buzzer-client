import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Course from "../components/Course/Course";
import Faq from "../components/Faq/Faq";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Toggle from "../components/Toggle/Toggle";
import Home from "../Home/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Course></Course>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/toggle',
                element: <Toggle></Toggle>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ]
    }
])