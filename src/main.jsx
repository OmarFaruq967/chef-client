import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main.jsx';
import Chefs from './component/Chefs.jsx';
import Chef from './component/Chef.jsx';
import Home from './component/Home/Home.jsx';
import Footer from './component/Footer/Footer.jsx';
import Register from './component/Register/Register.jsx';
import Blog from './component/Blog/Blog.jsx';
import Login from './component/Login/Login.jsx';
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';
import AuthProvider from './component/Providers/AuthProvider.jsx';
import PrivateRoute from './component/PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    
      {
        path: "/chef/:id",
        element: <PrivateRoute><Chef/></PrivateRoute>,
        loader: ({params})=> fetch(`https://chef-server-omarfaruq967.vercel.app/chefs/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
  
)
