import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'



function Category() {
  // modal function
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex justify-content-around">
        <h3>All Cateogories</h3>
        <button onClick={handleShow} style={{width:'px',height:'50px'}} className='btn btn-info ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>

      {/* modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Category Name"
        className="mb-3 mt-3"
      >
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Category Name" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default Category
