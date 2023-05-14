import * as types from "./actionType"

const initialstate={
    data:[],
    isloading:false,
    iserror:false,
    // searchData:{}
}
const reducer=(oldstate=initialstate,{type,payload})=>{
    switch(type){
        case types.GETDATAREQUEST:
            return {...oldstate,isloading:true}
        case types.GETDATASUCCESS:
            return {...oldstate,isloading:false,data:payload}
        case types.GETDATAERROR:
            return {...oldstate,isloading:false,iserror:true}
        // case types.GETQUERYSUCCESS:
        //     return {...oldstate,isloading:false,searchData:payload}
        default:
            return oldstate
    }
}
export {reducer}