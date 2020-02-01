import "./_tabs.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { Nav, NavItem, NavLink } from "reactstrap";

const Tabs = props => {
    const { tabs } = props;

    const { search } = useLocation();
    const numberSearch = Number(search.charAt(search.length - 1));

    return (
        <Nav pills className="mt-3">
            {tabs.map((tab, index) => (
                <NavItem key={index}>
                    <NavLink
                        tag={Link}
                        key={index}
                        active={numberSearch === index}
                        to={{
                            pathname: "/orders",
                            search: `?status=${index}`
                        }}
                    >
                        {tab.title}
                    </NavLink>
                </NavItem>
            ))}
        </Nav>
    );
};

Tabs.defaultProps = {
    tabs: []
};

export default Tabs;
