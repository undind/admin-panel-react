import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalWindow = ({ modal, toggle, children }) => {
    return (
        <Modal isOpen={modal} toggle={toggle} className="modal-dialog-centered">
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
            <ModalFooter>
                <Button type="submit" color="primary" onClick={toggle}>
                    Do Something
                </Button>
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalWindow;
