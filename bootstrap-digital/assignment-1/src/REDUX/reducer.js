import * as types from "./actionType"
const initialstate={
    books:[],
    isloading:false,
    iserror:false
}

export const reducer=(oldstate=initialstate,{type,payload})=>{
    switch(type){
        case types.GET_BOOK_REQUEST:
            return {...oldstate,isloading:true}
        case types.GET_BOOK_SUCCESS:
            return {...oldstate,isloading:false,books:payload}
        case types.GET_BOOK_ERROR:
            return {...oldstate,isloading:false,iserror:true}
      
        default:
            return oldstate
    }
}