import "./_tabs.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { Nav, NavItem, NavLink } from "reactstrap";

const Tabs = props => {
    const { tabs } = props;

    const location = useLocation();
    const numberSearch = Number(
        location.search.charAt(location.search.length - 1)
    );

    const getPathRouter = location => {
        switch (location.pathname) {
            case "/reports":
                return {
                    newPathname: ["/reports", "/reports/quantity"],
                    newSearch: (location.search = null),
                    activeLink: params => {
                        const { location, index } = params;
                        return location.pathname.includes(newPathname[index]);
                    }
                };

            case "/reports/quantity":
                return {
                    newPathname: ["/reports", "/reports/quantity"],
                    newSearch: (location.search = null),
                    activeLink: params => {
                        const { location, index } = params;
                        return location.pathname.includes(
                            newPathname[index - 1]
                        );
                    }
                };

            case "/orders":
                return {
                    newPathname: location.pathname,
                    newSearch: "?status=",
                    activeLink: params => {
                        const { numberSearch, index } = params;
                        return numberSearch === index;
                    }
                };

            default:
                return location;
        }
    };

    const { newPathname, newSearch, activeLink } = getPathRouter(location);

    return (
        <Nav pills className="mt-3">
            {tabs.map((tab, index) => (
                <NavItem key={index}>
                    <NavLink
                        tag={Link}
                        key={index}
                        active={activeLink({ location, numberSearch, index })}
                        to={{
                            pathname: Array.isArray(newPathname)
                                ? newPathname[index]
                                : newPathname,
                            search:
                                newSearch === null
                                    ? ""
                                    : index === 0
                                    ? null
                                    : `${newSearch}${index}`
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
