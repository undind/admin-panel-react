import React from "react";
import { Container } from "reactstrap";

import Tabs from "../../components/Tabs";

const Orders = props => {
    const tabs = [
        {
            title: "All orders"
        },
        {
            title: "Checked"
        },
        {
            title: "Active"
        },
        {
            title: "Unactive"
        }
    ];

    return (
        <Container fluid>
            <Tabs tabs={tabs} />
        </Container>
    );
};

export default Orders;
