import React from 'react'
import Navbars from '../Components/Navbars'
import { useSelector } from 'react-redux'

const Home = () => {
const data=useSelector((state)=>state.users)
console.log('where?',data);
  return (
    <>
       <Navbars />
       <h1>ok</h1>
    </>
   
      
  )
}

export default Home
