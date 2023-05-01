// Importing necessary modules
import {
    BaseQueryFn,
    FetchArgs,
    createApi,
    fetchBaseQuery,
    FetchBaseQueryError,
  } from '@reduxjs/toolkit/query/react'
  import { Mutex } from 'async-mutex'
  import { logOut } from "@/Services/api/Redux/authSlice";
import type { RootState } from '../utils/store'
import { setCredentials } from './Redux/authSlice'

// Creating a mutex object to handle asynchronous operations
const mutex = new Mutex()

// Setting up the base query with credentials and timeout
const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        
        const token = (getState() as RootState)?.auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    },
    timeout: 30000
})

// Function to handle reauthentication when access token is expired
const baseQueryWithReauth:  BaseQueryFn<
string | FetchArgs,
unknown,
FetchBaseQueryError
> = async (args, api:any, extraOptions) => {
    let result;
    if(!mutex.isLocked()){
        const release = await mutex.acquire()
        try{
            // Executing the base query
            result = await baseQuery(args, api, extraOptions)

            // Checking for 403 status code
            if (result?.error && result?.error?.status === 403) {
                // Refreshing the access token
                const refreshResult = await baseQuery('/api/login_check', api, extraOptions)
              
                if (refreshResult?.data) {
                    console.log('sending refresh token')
                    const user = api.getState().auth.user
                    console.log(user)
                    // Storing the new token 
                    api.dispatch(setCredentials({ ...refreshResult.data, user }))
                    // Retrying the original query with new access token 
                    result = await baseQuery(args, api, extraOptions)
                } else {
                    api.dispatch(logOut())
                }
            }
        } finally{
            release()
        }
    }else{
        await mutex.waitForUnlock()
        result = await baseQuery(args, api, extraOptions)
    }

    return result
}

// Exporting the api slice
export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({})
})