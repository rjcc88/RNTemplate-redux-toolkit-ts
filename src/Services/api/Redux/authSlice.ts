import { createSlice } from "@reduxjs/toolkit"

export interface AuthToken {
   token: any;
   isAuthenticated?: boolean;
  }
const initialState: AuthToken ={
    token: null,
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.token = action.payload.token
           
        },
        guestLogin: (state, action)=>{
            state.isAuthenticated = action.payload.isAuthenticated;
        },
        logOut: (state:any) => {
            state.username = null
            state.token = null
            state.isAuthenticated = false;
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions
export const { guestLogin } = authSlice.actions
export const selectCurrentToken = (state:any) => state.auth.token
export const selectIsAuthenticated = (state:any) => state.auth.isAuthenticated
export default authSlice.reducer
