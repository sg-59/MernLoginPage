import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import  Login  from "./Pages/Login";
function App() {

const router=createBrowserRouter([

  {
    path:'/',
    element:<Home/>
  },
  {
    path:'signup',
    element:<Signup/>
  },
  {
    path:'login',
    element:<Login/>
  },

])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
