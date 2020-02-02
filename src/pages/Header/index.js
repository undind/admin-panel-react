import "./_header.scss";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import { ROUTES } from "../../services/routes";

import { getPartsOfArray, getActiveLink } from "./helpers";

const Header = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const location = useLocation();
    const { pathname } = location;

    return (
        <div>
            <Navbar color="light" light expand="md" className="p-0">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {getPartsOfArray(ROUTES(), 4).map(item => (
                            <NavItem
                                key={item.id}
                                active={getActiveLink(pathname, item.link)}
                            >
                                <NavLink
                                    className="p-3"
                                    tag={Link}
                                    to={Array.isArray(item.link) ? item.link[0] : item.link}
                                >
                                    {item.name}
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        {getPartsOfArray(ROUTES(), -2).map(item => (
                            <NavItem
                                active={
                                    pathname === "/account" && pathname !== "/"
                                }
                                key={item.id}
                            >
                                <NavLink
                                    className="p-3"
                                    tag={Link}
                                    to={item.link}
                                >
                                    {item.name}
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
