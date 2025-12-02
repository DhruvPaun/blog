import {createSlice} from "@reduxjs/toolkit"

const initialState={
    isLoggedIn:false,
    userData:null
}

const slice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.isLoggedIn=true
            state.userData=action.payload
        },
        logout:(state)=>{
            state.isLoggedIn=false,
            state.userData=null
        }
    }
})
export const {login,logout} = slice.actions
export default slice.reducer