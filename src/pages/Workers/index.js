import React, { useState } from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    FormGroup,
    Label,
    Input
} from "reactstrap";

import ModalWindow from "../../components/Modal";

const Workers = props => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>Dropdown</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => toggleModal()}>
                        Set Password
                    </DropdownItem>
                    <DropdownItem>edit user</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <ModalWindow toggle={toggleModal} modal={modal} setPass>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="with a placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="password placeholder"
                    />
                </FormGroup>
            </ModalWindow>
        </div>
    );
};

export default Workers;
