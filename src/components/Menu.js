import React, {Component} from 'react';
import {Nav, NavItem, Navbar, Badge} from 'react-bootstrap';


class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Navbar inverse fixedTop className="nav">
                <a href="/">Home</a>

            </Navbar>
        )
    }
}



export default Menu;