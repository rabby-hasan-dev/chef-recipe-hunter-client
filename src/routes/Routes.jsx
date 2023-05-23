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

const router = createBrowserRouter([

  
  {
    path: "/",
    element: <Main></Main>,
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
    children: [
      {
        path: ":id",
        element: <ChefPage></ChefPage>,
        loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
      }
    ]
  },
  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:'logCategory',
        element:<LogCategory></LogCategory>,

       
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      }
      
    ]
  },
]);

export default router;