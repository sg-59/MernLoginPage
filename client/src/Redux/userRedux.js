import {createSlice} from '@reduxjs/toolkit'

const user=createSlice({
    name:'users',
    initialState:{
        userInfo:[],
        accessToken:''
    },
    reducers:{
        loginuser:(state,action)=>{
state.userInfo.push(action.payload)
state.accessToken=action.payload.accessToken
        },
        logoutuser:(state,action)=>{
            state.userInfo=[]
            state.accessToken=''
        }
    }
})

export const {loginuser,logoutuser}=user.actions
export default user.reducer