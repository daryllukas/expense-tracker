import React, { useEffect, useContext } from 'react';
import AuthUserContext from '../../context/Session';
import { Route, Redirect } from "react-router-dom";
import * as ROUTES from '../../constants/routes';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { authUser, getCurrentUser } = useContext(AuthUserContext);

    useEffect(() => {
        getCurrentUser();
    }, [])

    return (
        <Route {...rest}
            render={props => authUser ?
                (<Component {...props} />) :
                (<Redirect to={{ pathname: ROUTES.SIGN_IN, state: { from: props.location } }} />)}
        />
    )
}

export default PrivateRoute;