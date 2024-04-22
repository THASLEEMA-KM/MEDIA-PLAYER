import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'

function Add() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (

    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
        
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please fill the form completely!!!</p>
         <div className="border rounded p-2">
         <FloatingLabel
        controlId="floatingInputCaption"
        label="Video Caption"
        className="mb-3 mt-3"
      >
        <Form.Control type="text" placeholder="VIdeo Caption" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputImageURL"
        label="Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Image URL" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputURL"
        label="YouTube URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="YouTube URL" />
      </FloatingLabel>
         </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn btn-info' variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
