import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name:"",
    email:"",
    profile:""
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserLoginDetails:(state,action)=>{
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.profile = action.payload.profile;
        },
        setLogoutDetails:(state)=>{
            state.name = null;
            state.email = null;
            state.profile = null;
        },
    }
})
export const { setUserLoginDetails, setLogoutDetails } = userSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.profile;
export default userSlice.reducer;