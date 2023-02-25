import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdDelete } from 'react-icons/md'

const ConfirmDeleteModal = ({ show, handleClose, handleDelete }) => {


    return (
        <React.Fragment >
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Delete Confirm </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='main-body-content'>
                        Do you want to delete this?
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='footer-button-content'>
                        
                        <div className='save-button d-flex'>
                            <Button variant="secondary" style={{marginRight: '5px'}} onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant='danger' onClick={() => {
                                handleDelete();
                                handleClose();
                            }}>
                                <MdDelete /> Delete
                            </Button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </React.Fragment >
    );
}

export default ConfirmDeleteModal;