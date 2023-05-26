import { Button, FormControl, FormLabel, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createbookdata, getBookData } from '../REDUX/action'
import styles from "../Style/listcard.css"
const AddBook = () => {
    const dispatch=useDispatch()
    const [value,setvalue]=useState({
        title:"",
        author:"",
        year:0,
        isbn:0
    })
    
    const handlesubmit=(e)=>{
        e.preventDefault();
        dispatch(createbookdata(value)).then(()=>getBookData())
        setvalue({
            title:"",
            author:"",
            year:0,
            isbn:0
        })
    }

    useEffect(()=>{
        dispatch(getBookData())
    },[value])
    return (
    
      <div className='addbook1'>
        
    <div >
        <div>
        <label>Title:</label>
        </div>
        <div>
        <input placeholder='title' value={value.title} onChange={(e)=>setvalue({...value,title:e.target.value})}></input>
        </div>
    </div>
    <div>
        <div>
        <label>Author:</label>
        </div>
        <div>
        <input placeholder='author' value={value.author} onChange={(e)=>setvalue({...value,author:e.target.value})}></input>
        </div>
    </div>
    <div>
        <div>
        <label>Year:</label>
        </div>
        <div>
        <input  placeholder='year' value={value.year} onChange={(e)=>setvalue({...value,year:e.target.value})}></input>
        </div>
    </div>
    <div>
        <div>
        <label>Isbn:</label>
        </div>
        <div>
        <input placeholder='isbn' value={value.isbn} onChange={(e)=>setvalue({...value,isbn:e.target.value})}></input>
        </div>
    </div>
    <div>
        <div>
        <button onClick={(e)=>handlesubmit(e)}>submit</button>
        </div>
        
    </div>
    
   
</div>
    
  )
}

export default AddBook
