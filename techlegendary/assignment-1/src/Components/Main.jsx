import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getalldata} from "../Redux/action"
import styled from 'styled-components'


const Main = () => {
    const [query,setquery]=useState('')
    const [page,setPage]=useState(1)
    const dispatch= useDispatch()
    const data= useSelector((store)=>store.data)
    const [gender,setgender]=useState('')
    const [domain,setdomain]=useState('')
    const [available,setavailable]=useState('')
    const totalPages=50;
    //console.log(data)
    const handlequery=(e)=>{
      setquery(e.target.value)
      dispatch(getalldata(e.target.value,1))
    }
    
    const handlegender=(e)=>{
      setgender(e.target.value)
    }
    const handledomain=(e)=>{
      setdomain(e.target.value)
    }
    const handleavailable=(e)=>{
      setavailable(e.target.value)
    }
    console.log(data)
  useEffect(()=>{
   dispatch(getalldata('',page,gender,domain,available))
  },[page,gender,domain,available])
  return (
    <div className='maincard'>

      <div>
        <select name="Gender" id="" onChange={handlegender}>
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderqueer">Genderqueer</option>
          <option value="Bigender">Bigender</option>
        </select>
        <select name="Domain" id="" onChange={handledomain}>
          <option value="">domain</option>
          <option value="Finance">Finance</option>
          <option value="UI Designing">UI Designing</option>
          <option value="IT">IT</option>
          <option value="Business Development">Business Development</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
        </select>
        <select name="Availability " id=""onChange={handleavailable}>
          <option value="">availability</option>
            <option value="true">Available</option>
            <option value="false">Not Available</option>
        </select>
      </div>

      <div style={{display:"flex",justifyContent:"end",alignItems:"center",gap:"10px"}}>
        <div>
        <h3>Search Name</h3>
        </div>
      
      <div>
      <input value={query} onChange={handlequery}/>
      
      </div>
      
      </div>
      

      <DIV>
    {  data.length!= 0 && data.map((el)=>{
        return (
          
            <SINGLE key={el.id}>
              
              <h2>{el.first_name} {el.last_name}</h2>
            <h4>{el.gender}</h4>
            <h3>{el.domain}</h3>
            <h3>{el.available===true ? "Available":"Not Available"}</h3>
            <img src={el.avatar} alt={el.first_name}  />
                </SINGLE>          
                      
            
            
                 
        )
      })}
      </DIV>
      <div>
      <button
          style={{
            padding: "10px",
            backgroundColor: "#8B00F7",
            color: "white",
            borderRadius: "5px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            fontSize: "20px",
          }}
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#8B00F7",
            color: "white",
            borderRadius: "5px",
            margin: "20px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            fontSize: "20px",
          }}
        >
          {page}
        </button>
        <button
          style={{
            padding: "10px",
            backgroundColor: "#8B00F7",
            color: "white",
            borderRadius: "5px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            fontSize: "20px",
          }}
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Main

const DIV= styled.div`
display:grid;
grid-template-columns:repeat(7,160px);
grid-template-rows:repeat(200PX,auto);
grid-gap:20px;
margin-top:10px

`
const SINGLE=styled.div`
 border:1px solid blue;
 backgroundColor:green;
 padding:"20px"
`