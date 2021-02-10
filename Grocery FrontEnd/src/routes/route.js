import { Component } from "react";
import { Route } from "react-router-dom";


const AppRoute = ({component: Component, themeColor, ...rest}) => (
    <Route 
        {...rest}
        render={props => <Component {...props} themeColor={themeColor} />}
    />
)

export default AppRoute