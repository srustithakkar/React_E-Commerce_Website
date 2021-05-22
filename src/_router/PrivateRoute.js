import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivteRoute = ({component: Component, ...rest}) => (
    <Route
      {...rest}
      render={(props) => (localStorage.getItem('access_token') ? <Component {...props} /> : <Redirect to={{pathname: '/'}} />)}
    />
);

export default PrivteRoute;

PrivteRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
};
