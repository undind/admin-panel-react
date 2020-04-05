import './_panels.scss';
import React from 'react';
import { Container, Row, Col, Button, NavLink } from 'reactstrap';

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
            </Container>
        </div>
    );
};

export default Panels;
