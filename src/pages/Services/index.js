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
        workers: [],
        isEdit: false
    });

    const toggle = () => {
        setModal(!modal);
    };

    const dispatch = useDispatch();
    const { items, isFetching, config, item } = useSelector(state =>
        selectServices(state)
    );

    useEffect(() => {
        dispatch(getServicesAction());
        dispatch(getServicesConfigAction());
    }, [dispatch]);

    useEffect(() => {
        setValues({
            ...item,
            workers: [] || item.workers.map(item => item.id),
            isEdit: true
        });
    }, [item, config.workers]);

    const handleChange = (event, worker) => {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;

        if (target.checked && !values.workers.includes(Number(worker.id))) {
            setValues({
                workers: values.workers.push(Number(worker.id))
            });
        } else {
            let index = values.workers.indexOf(Number(worker.id));
            setValues({
                workers: values.workers.splice(index, 1)
            });
        }

        const name = target.name;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleChangeSelect = obj => {
        setValues({
            ...values,
            status: obj.id,
            status_name: obj.label
        });
    };

    const editService = async id => {
        dispatch(getServiceWithIdAction(id));
        toggle();
    };

    return (
        <Container fluid className="mt-4">
            <ModalWindow toggle={toggle} modal={modal} isEdit={values.isEdit}>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Service name</Label>
                        <Input
                            onChange={handleChange}
                            value={values.name || ""}
                            type="text"
                            name="name"
                        />
                    </FormGroup>
                    <SelectForm
                        labelName="Status"
                        options={config.statuses}
                        onChange={handleChangeSelect}
                        value={values.status || ""}
                    />
                    <SelectForm
                        labelName="Start type"
                        options={config.start_types}
                        onChange={handleChangeSelect}
                        value={values.start_type || ""}
                    />
                    <p className="mb-0">Workers</p>

                    {config.workers &&
                        Object.values(config.workers).map((worker, index) => (
                            <FormGroup key={worker.id} check>
                                <Label check>
                                    <Input
                                        value={values.workers}
                                        onChange={event =>
                                            handleChange(event, worker)
                                        }
                                        name="checkbox"
                                        checked={values.workers.includes(
                                            Number(worker.id)
                                        )}
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
                    <Button
                        onClick={() => {
                            setValues({ workers: [], isEdit: false });
                            toggle();
                        }}
                    >
                        Add service
                    </Button>
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
