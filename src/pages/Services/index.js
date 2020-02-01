import React, { useEffect } from "react";
import { Spinner, Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectServices } from "../../redux/selectors";

import { getServicesAction } from "../../redux/actions/Services";

const Services = props => {
    const dispatch = useDispatch();
    const { items, isFetching } = useSelector(state => selectServices(state));

    useEffect(() => {
        dispatch(getServicesAction());
    }, [dispatch]);

    return (
        <Container fluid>
            {!items.length && isFetching ? (
                <div className="d-flex justify-content-center mt-5">
                    <Spinner
                        type="grow"
                        color="secondary"
                        style={{ width: "5rem", height: "5rem" }}
                    ></Spinner>
                </div>
            ) : (
                <>
                    {items.map(item => {
                        return <div key={item.id}>{item.name}</div>;
                    })}
                </>
            )}
        </Container>
    );
};

export default Services;
