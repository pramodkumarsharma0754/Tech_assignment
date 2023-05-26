import React from 'react'
import BookList from '../Components/BookList'
import AddBook from '../Components/AddBook'



const Home = () => {
  return (
    <div>
       <div style={{display:"flex"}}>

        <div><AddBook/></div>
        <div><BookList/></div>
      </div>
      
      
    </div>
  )
}

export default Home
