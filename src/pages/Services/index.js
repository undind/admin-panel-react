import React, { useEffect, useState } from "react";
import {
    Spinner,
    Container,
    Table,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectServices } from "../../redux/selectors";

import {
    getServicesAction,
    getServicesConfigAction,
    getServiceWithIdAction
} from "../../redux/actions/Services";

import ModalWindow from "../../components/Modal";
import SelectForm from "../../components/Select";

const Services = props => {
    const [modal, setModal] = useState(false);
    const [values, setValues] = useState({
        name: "",
        status: 1,
        status_name: "",
        start_type: null,
        start_type_name: "",
        workers: []
    });
    const [touched, setTouched] = useState([]);

    const toggle = () => {
        setModal(!modal);
    };

    const dispatch = useDispatch();
    const { items, isFetching, config } = useSelector(state =>
        selectServices(state)
    );

    useEffect(() => {
        dispatch(getServicesAction());
        dispatch(getServicesConfigAction());
    }, [dispatch]);

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const handleChangeSelect = obj => {
        setValues({
            ...values,
            status: obj.id,
            status_name: obj.label
        });
    };

    const handleBlur = event => {
        if (!touched.includes(event.target.name)) {
            setTouched([...touched, event.target.name]);
        }
    };

    const editService = async id => {
        const item = await dispatch(getServiceWithIdAction(id));
        setValues(item);
        toggle();
    };

    return (
        <Container fluid className="mt-4">
            <ModalWindow toggle={toggle} modal={modal}>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Service name</Label>
                        <Input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            type="text"
                            name="name"
                        />
                    </FormGroup>
                    <SelectForm
                        labelName="Status"
                        options={config.statuses}
                        onChange={handleChangeSelect}
                        onBlur={handleBlur}
                        value={values.status}
                    />
                    <SelectForm
                        labelName="Start type"
                        options={config.start_types}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.start_type}
                    />
                    <p className="mb-0">Workers</p>

                    {config.workers &&
                        Object.values(config.workers).map((worker, index) => (
                            <FormGroup key={worker.id} check>
                                <Label check>
                                    <Input
                                        value={values.workers}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        name="checkbox"
                                        // checked={
                                        //     values.workers.length
                                        //         ? worker.id ===
                                        //           values.workers[index].id
                                        //         : false
                                        // }
                                        type="checkbox"
                                    />{" "}
                                    {worker.title}
                                </Label>
                            </FormGroup>
                        ))}
                </Form>
            </ModalWindow>
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
                    <Button onClick={() => toggle()}>Add service</Button>
                    <Table className="mt-4" responsive bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Service</th>
                                <th>Workers</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <th>{item.id}</th>
                                        <td>{item.name}</td>
                                        <td>{item.workers}</td>
                                        <td>{item.status_name}</td>
                                        <td className="text-center">
                                            <Button
                                                onClick={() =>
                                                    editService(item.id)
                                                }
                                            >
                                                Edit
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </>
            )}
        </Container>
    );
};

export default Services;
