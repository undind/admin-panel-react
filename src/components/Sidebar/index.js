import './_sidebar.scss';
import React from 'react';
import { NavItem, NavLink, Nav, Badge } from 'reactstrap';

import Logo from '../../assets/img/sidebar/symbol.png';
import {
    Panels,
    Child,
    Domains,
    Gateways,
    HostedEmail,
    Invoices,
    ParsingCredits,
    Referrals,
    SettingsIcon,
    Stores,
    Support,
    WhatsNew,
} from '../Icons';

const SideBar = (props) => (
    <div className='sidebar'>
        <div className='sidebar-header'>
            <div className='sidebar-header__logo'>
                <img src={Logo} alt='Logo' />
            </div>
            <h3 className='sidebar-header__name'>Perfect Panel</h3>
        </div>
        <div className='sidebar-menu'>
            <Nav vertical>
                <NavItem>
                    <NavLink active>
                        <Panels />
                        <span>Panels</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Child />
                        <span>Child panels</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Stores />
                        <span>Stores</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Gateways />
                        <span>Gateways</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <ParsingCredits />
                        <span>Parsing credits</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Domains />
                        <span>Domains</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <HostedEmail />
                        <span>Hosted email</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Invoices />
                        <span>Invoices</span>
                        <Badge color="danger">3</Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Referrals />
                        <span>Referrals</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Support />
                        <span>Support</span>
                        <Badge color="warning">8</Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <WhatsNew />
                        <span>What's new</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <SettingsIcon />
                        <span>Settings</span>
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    </div>
);

export default SideBar;
