/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { store } from '@/Services';
import { Provider } from 'react-redux';
import AppRoute from '@/Route/sso/navigator';

const App = () => {


  return (

    <Provider store={store}>
        <AppRoute />
    </Provider>

  )
}

export default App;
