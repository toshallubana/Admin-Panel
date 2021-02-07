import React from 'react';
import { NavLink, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './SideDrawer.css';
import Login from '../Login/Login';
import { Dashboard } from '@material-ui/icons';

function SideDrawer(props) {

    let drawerClasses = 'side-drawer';

    if(props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses} >
            <NavLink exact to ="/login" exact activeClassName="active">
                Login
            </NavLink>

            <NavLink to="/dashboard">
                Dashboard
            </NavLink>
        </nav>
    )
}

export default SideDrawer
