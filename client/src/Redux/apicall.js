import { publicRequest } from "../requestmethod";
import { addtofullinfo } from "./fulluserInfo";
import { loginuser } from "./userRedux";

export const singupuser = async (dispatch,data)=>{
    console.log('api call ?',data);
    try{
const res=await publicRequest.post('/autths/sign',data)
console.log('singnup data',res.data);
    }catch(err){
        console.log(err);
    }
}

export const loginpages= async(dispatch,data)=>{
    try{
const res=await publicRequest.post('/autths/login',data)
console.log('res.data with login success',res.data);
dispatch(loginuser(res.data))
    }catch(err){
        console.log(err);
    }
}

export const getusersInfo= async (dispatch)=>{
    try{
const res=await publicRequest.get('/ussers')
console.log('full info',res.data);
dispatch(addtofullinfo(res.data))
    }catch(err){
        console.log(err);
    }
}