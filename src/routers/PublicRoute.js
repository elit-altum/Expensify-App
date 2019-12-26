//Creates a new component for paths not allowed for a logged in user to access
//i.e the login page again after he is logged in

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={ (props) => (
        !isAuthenticated ? (
            <div>
                <Component {...props}/>
            </div>
        ) : (
            <Redirect to="/dashboard" />
        )
    )}/>
)

//The map fn
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid,
})

export default connect(mapStateToProps)(PublicRoute);