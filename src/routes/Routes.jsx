import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import ChefPage from "../pages/ChefPage/ChefPage";
import ChefLayout from "../Layout/ChefLayout";

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
  }
]);

export default router;