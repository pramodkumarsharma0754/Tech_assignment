import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Main from '../Components/Main'

const Home = () => {
  return (
    <>
    <div style={{display:"flex",gap:"10px"}}>
    <Sidebar/>
    <Main/>
    </div>
    
    </>
    
  )
}

export default Home