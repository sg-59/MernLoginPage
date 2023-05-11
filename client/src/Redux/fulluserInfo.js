import { createSlice } from "@reduxjs/toolkit";

const allusers=createSlice({
    name:'usersfullinfo',
    initialState:{
        fullInfo:[]
    },
    reducers:{
        addtofullinfo:(state,action)=>{
            state.fullInfo.push(action.payload)
        }
    }
})

export const {addtofullinfo} =allusers.actions
export default allusers.reducer