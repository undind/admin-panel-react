import './_sidebar.scss';
import React from 'react';
import { NavItem, NavLink, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

const SideBar = (props) => (
    <div className='sidebar'>
        <div className='sidebar-header'>
            <span color='info' style={{ color: '#fff' }}>
                &times;
            </span>
            <h3>Perfect Panel</h3>
        </div>
        <div className='side-menu'>
            <Nav vertical className='list-unstyled pb-3'>
                <NavItem>
                    <NavLink tag={Link} to={'/about'}>
                        About
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={'/pages'}>
                        Portfolio
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={'/faq'}>
                        FAQ
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={'/contact'}>
                        Contact
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    </div>
);

export default SideBar;
