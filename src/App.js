import React from 'react';
import Routers from './Routers'
import { Provider } from 'react-redux'
import { store } from './store'
const App = () =>( 
    <Provider store={store}>
        <Routers/>
    </Provider>
)
export default App;