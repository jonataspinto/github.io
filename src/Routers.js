import React from 'react';
import{
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import {Home} from './screens'

const Router = ()=>{
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path='/' exact component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Router 