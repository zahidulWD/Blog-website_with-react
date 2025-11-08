import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Blog from './Pages/Blog.jsx';
import Contact from './Pages/Contact.jsx';
import Login from './Pages/Login.jsx';
import SingleBlogPage from './Pages/SingleBlogPage.jsx';
import FeaturesSection from './Pages/FeaturesSection.jsx';
import SingUp from './Pages/SingUp.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
       path: "/",
       element: <Home></Home>
    },
    {
      path: "/about",
      element: <About></About>
   },
   {
    path: "/blog",
    element: <Blog></Blog>
   },
   {
    path: "/contact",
    element: <Contact></Contact>
   },
   {
    path: "/login",
    element: <Login></Login>
   },
   {
    path: "/signup",
    element: <SingUp></SingUp>
   },
   {
    path: "/single-blog/:id",
    element: <SingleBlogPage></SingleBlogPage>
   },
   {
    path: "/features",
    element: <FeaturesSection></FeaturesSection>
   },
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
