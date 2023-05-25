import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import ChefPage from "../pages/ChefPage/ChefPage";
import ChefLayout from "../Layout/ChefLayout";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import LogCategory from "../pages/Login/LogCategory";
import PrivateRoutes from "./PrivateRoutes";
import { Root } from "postcss";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      }


    ],
  },
  {
    path: 'chefPage',
    element: <ChefLayout></ChefLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: ":id",
        element: <PrivateRoutes> <ChefPage></ChefPage></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-side-brown.vercel.app/chef/${params.id}`)
      }
    ]
  },
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: 'logCategory',
        element: <LogCategory></LogCategory>,


      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }

    ]
  },
]);

export default router;