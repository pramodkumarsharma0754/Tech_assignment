import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBookData } from '../REDUX/action';
import BookCard from './BookCard';
import styles from "../Style/listcard.css"

const BookList = () => {
  
  const books=useSelector((store)=>store.books);
  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(getBookData())
  },[])
  return (
    <div>
    <div className='card'>
    {books.length > 0 && books.map((el)=>{
        return  <BookCard key={el.id} el={el}/>

    
      
         
    }
    
    )}
    
    </div>
   
    </div>
  )
}

export default BookList
