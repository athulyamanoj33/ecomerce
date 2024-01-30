import { createSlice } from "@reduxjs/toolkit";
const userSlice=createSlice({
    name:'user',
    initialState:{
        value:null
    },
    reducers:{
        login:(state,action)=>{
            state.value=action.payload

        },
        logout:(state)=>{
            state.value=null
         
        },
        signup:(state,action)=>{
            state.value=action.payload
        },
        
    

    }
})
export const{login,logout,signup}=userSlice.actions
export default userSlice.reducer