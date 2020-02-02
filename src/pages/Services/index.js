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

import { getServicesAction } from "../../redux/actions/Services";

import ModalWindow from "../../components/Modal";
import SelectForm from "../../components/Select";

const Services = props => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const dispatch = useDispatch();
    const { items, isFetching } = useSelector(state => selectServices(state));

    useEffect(() => {
        dispatch(getServicesAction());
    }, [dispatch]);

    const optionsStartType = [
        {
            id: 0,
            title: "Not involved"
        },
        {
            id: 1,
            title: "Facebook Page Likes"
        },
        {
            id: 20,
            title: "Facebook Post Likes"
        },
        {
            id: 9,
            title: "Facebook Views"
        },
        {
            id: 2,
            title: "Twitter Followers"
        },
        {
            id: 3,
            title: "Twitter Retweets"
        },
        {
            id: 4,
            title: "Twitter Likes"
        },
        {
            id: 5,
            title: "Instagram Followers"
        },
        {
            id: 6,
            title: "Instagram Likes"
        },
        {
            id: 10,
            title: "Instagram Views"
        },
        {
            id: 18,
            title: "Instagram Comments"
        },
        {
            id: 17,
            title: "Youtube Subscribers"
        },
        {
            id: 7,
            title: "Youtube Views"
        },
        {
            id: 8,
            title: "Youtube Likes"
        },
        {
            id: 12,
            title: "SoundCloud Followers"
        },
        {
            id: 13,
            title: "SoundCloud Likes"
        },
        {
            id: 14,
            title: "SoundCloud Plays"
        },
        {
            id: 15,
            title: "SoundCloud Reposts"
        },
        {
            id: 16,
            title: "SoundCloud Comments"
        },
        {
            id: 21,
            title: "Tumblr Notes"
        },
        {
            id: 24,
            title: "TikTok Followers"
        },
        {
            id: 25,
            title: "TikTok Likes"
        },
        {
            id: 26,
            title: "VK Followers"
        },
        {
            id: 27,
            title: "VK Likes"
        },
        {
            id: 28,
            title: "VK Shares"
        }
    ];

    const optionsStatus = [
        {
            id: 1,
            title: "Enabled"
        },
        {
            id: 0,
            title: "Disabled"
        }
    ];

    return (
        <Container fluid className="mt-4">
            <ModalWindow toggle={toggle} modal={modal}>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Service name</Label>
                        <Input type="text" name="name" />
                    </FormGroup>
                    <SelectForm labelName="Status" options={optionsStatus} />
                    <SelectForm
                        labelName="Start type"
                        options={optionsStartType}
                    />
                    <FormGroup check>
                        <p className="mb-0">Workers</p>
                        <Label check>
                            <Input type="checkbox" /> Name
                        </Label>
                    </FormGroup>
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
                                            <Button>Edit</Button>
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
