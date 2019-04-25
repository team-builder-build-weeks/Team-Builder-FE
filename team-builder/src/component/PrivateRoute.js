import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export default function PrivateRoute ({ component: Component, ...rest }) {
    const {indi}= rest;
    return(
        <div>
            <Route {...rest} render={()=>{
                if(localStorage.getItem('token'))
                    return <Component indi/>
                return <Redirect to = '/login' />    
            }}/>
        </div>
    )
}