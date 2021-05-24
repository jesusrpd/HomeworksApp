import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {PATH_HOME} from '../routes/paths.routes';
import auth from './auth';

export const ProtectedRoute = ({component: Component, ...rest}) =>{
    return(
        <Route
            {...rest}
            render={props =>(auth.isAuthenticated()
                ? <Component {...props}/>
                : <Redirect to={PATH_HOME}/>
            )}
        />
    );
};