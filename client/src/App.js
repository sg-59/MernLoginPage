import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import  Login  from "./Pages/Login";
import { useSelector } from "react-redux";
import Alluser from "./Pages/Alluser";
function App() {
const tokken=useSelector((state)=>state.users.accessToken)

console.log('tokken ',tokken);
const router=createBrowserRouter([

  {
    path:'/',
    element:tokken?<Home/>:<Login/>
  },
  {
    path:'signup',
    element:<Signup/>
  },
  {
    path:'allusers',
    element:<Alluser/>
  },

])

  return (
  
 <RouterProvider router={router}></RouterProvider>
  
   
  );
}

export default App;
