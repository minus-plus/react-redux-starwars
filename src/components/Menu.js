import React, {Component} from 'react';
import {Nav, NavItem, Navbar, Badge} from 'react-bootstrap';


class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Home</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

            </Navbar>
        )
    }
}



export default Menu;