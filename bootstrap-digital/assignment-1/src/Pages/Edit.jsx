import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, useNavigate, useParams } from 'react-router-dom'
import { editdata, getBookData } from '../REDUX/action'

const Edit = () => {
    const dispatch=useDispatch()
    const data=useSelector((store)=>store.books)
    const {id}=useParams()
   
    const filterdata=data.filter((i)=>i.id===+id)
    
    const [newdata,setnewdata]=useState({
      id:filterdata[0].id,
      title:filterdata[0].title,
      author:filterdata[0].author,
      year:filterdata[0].year,
      isbn:filterdata[0].isbn
  
    })
    
    const navigate=useNavigate()
    const handlesubmit=(e)=>{
        e.preventDefault()
        dispatch(editdata(id,newdata)).then(()=>
        dispatch(getBookData())
        )
        navigate('/')
    }
    console.log(newdata)
    useEffect(()=>{
        dispatch(getBookData())
    },[])
  return (
    <div>
     <div>
        <div>
        <label>Title</label>
        <input type='text' placeholder='title' value={newdata.title} onChange={(e)=>setnewdata({...newdata,title: e.target.value})}/>
        </div>
        <div>
        <label>Author</label>
        <input type='text' placeholder='author' value={newdata.author} onChange={(e)=>setnewdata({...newdata,author: e.target.value})}/>
        </div>
        <div></div>
        <label>Year</label>
        <input type='text' placeholder='year' value={newdata.year} onChange={(e)=>setnewdata({...newdata,year: e.target.value})}/>
        </div>
        <div>
        <label>Isbn</label>
        <input type='text' placeholder='isbn' value={newdata.isbn} onChange={(e)=>setnewdata({...newdata,isbn: e.target.value})}/>
        </div>
        <div>
        <button onClick={(e)=>handlesubmit(e)}>submit</button>
        </div>
     </div>
   
  )
}

export default Edit
