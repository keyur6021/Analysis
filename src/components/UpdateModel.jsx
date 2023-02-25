import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoMdCheckmark } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'

const UpdateModel = ({ show, handleClose, setBudgetName, setChartTitle }) => {


    return (
        <React.Fragment >
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Edit budget </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='main-body-content'>
                        <Form>
                            <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicEmail">
                                <Form.Label>Budget Name</Form.Label>
                                <Form.Control type="email"
                                    placeholder="Enter Budget Name"
                                    onChange={(e) => setBudgetName(e.target.value)}
                                    style={{ height: '40px', width: '70%' }} />
                            </Form.Group>

                            <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicPassword">
                                <Form.Label>Pie Chart Title</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Enter chart title"
                                    onChange={(e) => setChartTitle(e.target.value)}
                                    style={{ height: '40px', width: '70%' }} />
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='footer-button-content' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        <div className='delete-button' >
                            <Button variant='danger' onClick={handleClose}>
                                <MdDelete /> Delete
                            </Button>
                        </div>
                        <div className='save-button'>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose} style={{ marginLeft: '5px' }}>
                                <IoMdCheckmark fontSize='20px' />  Save
                            </Button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </React.Fragment >
    );
}

export default UpdateModel;