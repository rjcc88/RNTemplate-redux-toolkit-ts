import {
    BaseQueryFn,
    FetchArgs,
    createApi,
    fetchBaseQuery,
    FetchBaseQueryError,
    buildCreateApi,
    coreModule,
    reactHooksModule
  } from '@reduxjs/toolkit/query/react'
  import { Mutex } from 'async-mutex'
// import { setCredentials, logOut } from './Auth/Redux/authSlice'
import type { RootState } from '../utils/store'
import { Config } from '@/Config'
import { setCredentials } from './Redux/authSlice'
 
const mutex = new Mutex()
const baseQuery = fetchBaseQuery({
    baseUrl: Config.API_URL,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        
        const token = (getState() as RootState)?.auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth:  BaseQueryFn<
string | FetchArgs,
unknown,
FetchBaseQueryError
> = async (args, api:any, extraOptions) => {
    await mutex.waitForUnlock()
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error && result?.error?.status === 403) {
        if(!mutex.isLocked()){
            const release = await mutex.acquire()
            try{
                const refreshResult = await baseQuery('/api/login_check', api, extraOptions)
              
                if (refreshResult?.data) {
                    console.log('sending refresh token')
                    const user = api.getState().auth.user
                    // store the new token 
                    api.dispatch(setCredentials({ ...refreshResult.data, user }))
                    // retry the original query with new access token 
                    result = await baseQuery(args, api, extraOptions)
                } else {
                    // api.dispatch(logOut())
                }
            } finally{
                release()
            }
        }else{
            await mutex.waitForUnlock()
            result = await baseQuery(args, api, extraOptions)
        }

        // send refresh token to get new access token 
        
        // console.log(refreshResult)
       
    }

    return result
}

export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({})
})

// export const apiSliceServerSide = buildCreateApi(
//     coreModule(),
//     reactHooksModule({unstable__sideEffectsInRender: true})
//     )

