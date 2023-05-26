import axios from "axios"
import * as types from "./actionType"
const getbookrequest=()=>{
    return {type:types.GET_BOOK_REQUEST}
}
const getbooksuccess=(payload)=>{
    return {type:types.GET_BOOK_SUCCESS,payload}
    
}
const getbookeror=()=>{
    return {type:types.GET_BOOK_ERROR}
}

export const getBookData=()=>(dispatch)=>{
    dispatch(getbookrequest())
    return axios.get('http://localhost:8080/books').then((res)=>{
        
        dispatch(getbooksuccess(res.data))
    }).catch((e)=>{
        dispatch(getbookeror())
    })
    
} 

export const createbookdata=(payload)=>(dispatch)=>{
    
    return axios.post(`http://localhost:8080/books`,payload).then((res)=>{
        console.log(res)
        alert("add data successfully")
    }).catch((e)=>{
       console.log(e)
    })
}

export const  deletedata=(id)=>(dispatch)=>{
    return axios.delete(`http://localhost:8080/books/${id}`).then((e)=>{
        alert("data deleted successfully")
        getBookData();
    })
}

export const editdata = (id, payload) => (dispatch) => {
    return axios
      .patch(`http://localhost:8080/books/${id}`, payload)
      .then((res) => {
        
      })
      .catch((err) => {});
  };