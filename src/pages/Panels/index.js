import './_panels.scss';
import React from 'react';
import { Container, Row, Col, Button, NavLink, Table } from 'reactstrap';

import Sidebar from '../../components/Sidebar';
import { Plus, Logout } from '../../components/Icons';

const Panels = () => {
    return (
        <div className='wrapper'>
            <Sidebar />
            <Container fluid>
                <Row className='app-header'>
                    <Col className='d-flex align-items-center'>
                        <h3 className='app-title'>Panels</h3>
                        <Button className='app-button'>
                            <Plus />
                            Order new panel
                        </Button>
                    </Col>
                    <Col className='d-flex align-items-center'>
                        <NavLink className='ml-auto'>
                            <Logout />
                            <span>Logout</span>
                        </NavLink>
                    </Col>
                </Row>
                <Container fluid>
                    <Table striped className='panels-table'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope='row'>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope='row'>2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope='row'>3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </Container>
        </div>
    );
};

export default Panels;
