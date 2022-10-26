import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Course from "../components/Course/Course";
import Faq from "../components/Faq/Faq";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Toggle from "../components/Toggle/Toggle";
import Home from "../Home/Home";
import Main from "../layout/Main";
import MoreDetails from "../Shared/MoreDetails/MoreDetails";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


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
                element: <Course></Course>,
                loader: () => fetch('http://localhost:5000/topic')
            },
            {
                path: '/course',
                element: <RightSideNav></RightSideNav> ,
                loader: () => fetch('http://localhost:5000/topic')
            },
            {
                path: '/catagory/:id',
                element: <MoreDetails></MoreDetails> ,
                loader: ({params}) => fetch(`http://localhost:5000/catagory/${params.id}`)
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
            {
                path: '*',
                element: <div>Not Found 404!!!</div>
            },

        ]
    }
])