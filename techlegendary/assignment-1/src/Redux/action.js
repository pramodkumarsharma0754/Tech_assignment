import * as types from "./actionType";
import axios from "axios"

const getrequest=()=>{
    return {type:types.GETDATAREQUEST}
}
const getsuccess=(payload)=>{
    return {
        type:types.GETDATASUCCESS,
        payload
    }
}
const geterror=()=>{
    return {
        type:types.GETDATAERROR
    }
}
const getalldata=(query,page,gender,domain,available)=>(dispatch)=>{
    dispatch(getrequest());
    if(query){
        axios.get(`http://localhost:8080/data?q=${query}`).then((res)=>{
        //console.log(res.data)
        dispatch(getsuccess(res.data))
       
    }).catch(()=>{
        dispatch(geterror())
    })
    }
    else{
        let url=`http://localhost:8080/data?_page=${page}&_limit=20`;
        if(gender && domain =="" && available==""){
            url=`http://localhost:8080/data?_page=${page}&_limit=20&gender=${gender}`
        }else if(gender=="" && domain  && available==""){
            url=`http://localhost:8080/data?_page=${page}&_limit=20&domain=${domain}`
        }else if(gender=="" && domain==""  && available){
            url=`http://localhost:8080/data?_page=${page}&_limit=20&available=${available}`
        }else if(gender && domain && available==""){
            url=`http://localhost:8080/data?_page=${page}&_limit=20&gender=${gender}&domain=${domain}`
        }else if(gender && domain=="" && available){
            url=`http://localhost:8080/data?_page=${page}&_limit=20&gender=${gender}&available=${available}`
        }else if(gender=="" && domain && available){
            url=`http://localhost:8080/data?_page=${page}&_limit=20&domain=${domain}&available=${available}`
        }else if(gender && domain && available){
            url=`http://localhost:8080/data?_page=${page}&_limit=20&gender=${gender}&domain=${domain}&available=${available}`
        }else{
            url=`http://localhost:8080/data?_page=${page}&_limit=20`
        }
    axios.get(url).then((res)=>{
        dispatch(getsuccess(res.data))
       // console.log(res.data)
    }).catch(()=>{
        dispatch(geterror())
    })
}

}

export {getalldata}