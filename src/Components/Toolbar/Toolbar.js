import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import MenuIcon from '@material-ui/icons/Menu';

function Toolbar(props) {
    return (
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div>
                    {/* <DrawerToggleButton click={ props.drawerClickHandler}/> */}

                    <MenuIcon onClick={ props.drawerClickHandler} />
                   
                </div>
                <div className="toolbar__logo">
                    <a>The Logo</a>
                </div>
                <div className="spacer"></div>
                <div className="toolbar__navigation-items">
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Products</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Toolbar;
