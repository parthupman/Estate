import { createSlice } from "@reduxjs/toolkit";

const initialState = {  
    currentUser: null,
    error: null,    
    setLoading: false,
}

const userSlice = createSlice({     
    name:'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.setLoading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.setLoading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.setLoading = false;
        },
    }})

    export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

    export default userSlice.reducer;