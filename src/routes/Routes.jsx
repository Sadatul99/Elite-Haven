import Root from '../layouts/Root'
import Home from '../pages/Home/Home'
import { createBrowserRouter } from "react-router-dom";
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PropertyDetails from '../pages/Home/PropertyDetails';
import PrivateRoute from './PrivateRoute';
import Profile from '../pages/Profile/Profile';
import UpdateProfile from '../pages/UptateProfile/UpdateProfile';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/profile',
            element:<PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
            path:'/update-profile',
            element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
            path:'/property-details/:id',
            element:<PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>
        },
      ]
    },
  ]);

export default router