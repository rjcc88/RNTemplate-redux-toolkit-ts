import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from "../app/app-navigator"
import AuthNavigator from "./auth-navigator"
import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '@/Services/api/Redux/authSlice';
import { selectCurrentToken } from '@/Services/api/Redux/authSlice';
import { selectIsAuthenticated } from '@/Services/api/Redux/authSlice';


const AppRoute = () => {
    const token = useSelector(selectCurrentToken);
    const guest = useSelector(selectIsAuthenticated)

    return (
        <NavigationContainer>
            {
                token || guest  ? (<AppNavigator/>)  : (<AuthNavigator/>)
            }
            
        </NavigationContainer>
    )
}

export default AppRoute