
import React, { useState } from 'react'
import styles from "../Style/listcard.css"
import { Link, useParams } from 'react-router-dom'
import { deletedata, getBookData } from '../REDUX/action'
import { useDispatch, useSelector } from 'react-redux'

const BookCard = ({el}) => {
  const dispatch=useDispatch()

  return (
   
   
        <div key={el.id}  style={{ border:"1px solid blue"}}>
        <h3>{el.title}</h3>
        <h4>{el.author}</h4>
        <h4>{el.year}</h4>
        <h5>{el.isbn}</h5>
        <div className='cardeditdelete'>
      <div >
        <Link to={`/books/${el.id}`}>
        <button >
          Edit
          </button>
          </Link>
      </div>
      <div>
        
        <button onClick={()=>dispatch(deletedata(el.id)).then(()=>{
          dispatch(getBookData())
        })}>Delete</button>
      </div>
    </div>
      </div>
      
      
    
  )
}

export default BookCard
