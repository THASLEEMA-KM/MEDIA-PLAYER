import React, { useState } from 'react'
import {  Card, Modal } from 'react-bootstrap'


function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card>
      <Card.Img onClick={handleShow}  height={'180px'} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyhK4sz7Hy1Z-Ebtyd6MB36KBS20x1TacuJK_N_L2jEL5DR-rkVowlB4H3M0gAYNtFQA&usqp=CAU" />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'> 
        <p className='pt-2'>Caption</p>
        <button className='btn'><i className="fa-solid fa-trash text-danger fs-5"></i></button>
        </Card.Title>

      </Card.Body>
    </Card>
    {/* modal */}
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/L0yEMl8PXnw?si=2vD8XQn5YVgxD3ep?autoplay=1" title="caption" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
  
      </Modal>
    </>
  )
}

export default VideoCard
