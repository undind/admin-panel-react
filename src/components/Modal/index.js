import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalWindow = ({ modal, toggle, children, isEdit, setPass }) => {
    return (
        <Modal isOpen={modal} toggle={toggle} className="modal-dialog-centered">
            <ModalHeader toggle={toggle}>
                {setPass
                    ? "Change password"
                    : isEdit
                    ? "Edit service"
                    : "Add service"}
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
                <Button type="submit" color="primary" onClick={toggle}>
                    {setPass
                        ? "Change password"
                        : isEdit
                        ? "Edit service"
                        : "Add service"}
                </Button>
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalWindow;
