import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Course from "../components/Course/Course";
import Faq from "../components/Faq/Faq";
import Login from "../components/Login/Login";
import PrivateRoutes from "../components/PrivateRoutes/PrivateRoutes";
import Register from "../components/Register/Register";
import Home from "../Home/Home";
import Main from "../layout/Main";
import MoreDetails from "../Shared/MoreDetails/MoreDetails";
import PremiumAccess from "../Shared/PremiumAccess/PremiumAccess";
import RightNavMoreDetails from "../Shared/RightNavMoreDetails/RightNavMoreDetails";
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
                path: '/topic/:id',
                element: <RightNavMoreDetails></RightNavMoreDetails> ,
                loader: ({params}) => fetch(`http://localhost:5000/topic/${params.id}`)
            },        
            {
                path: '/premium/:id',
                element: <PrivateRoutes><PremiumAccess></PremiumAccess></PrivateRoutes> ,
                loader: ({params}) => fetch(`http://localhost:5000/topic/${params.id}`)
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