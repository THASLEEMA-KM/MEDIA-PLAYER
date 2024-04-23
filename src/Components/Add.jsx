import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'

function Add() {
  const [videoDetails,setVideoDetails] = useState(
    {
      caption:'',
      imgURL:'',
      youtubeURL:''
    }
  )

    const [invalidYouTubeURL,setInavlidYouTubeURL] = useState(false)
    console.log(videoDetails);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const getEmbedURL = (link) =>
    {
      if(link.includes("v="))
      {
        let videoId = link.split("v=")[1].slice(0,11)
        console.log(videoId);
        setVideoDetails({...videoDetails,youtubeURL:`https://www.youtube.com/embed/${videoId}`})
        setInavlidYouTubeURL(false)
      }
      else{
        setVideoDetails({...videoDetails,youtubeURL:""})
        setInavlidYouTubeURL(true)
      }
    }
    const handleUpload = ()=>
    {
      console.log("Iinside handleUpload function");
      // const {key1,key2,key3.....} = object-name = destructuring 
      const {caption,imgURL,youtubeURL} = videoDetails
      if(caption && imgURL && youtubeURL)
      {
        console.log("api call");
      }
      else{
        alert("Please fill the form Completely!!!")
      }
    }



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
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputImageURL"
        label="Image URL"
        className="mb-3"
      >
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,imgURL:e.target.value})} type="text" placeholder="Image URL" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputURL"
        label="YouTube URL"
        className="mb-3"
      >
        <Form.Control onChange={e=>getEmbedURL(e.target.value)} type="text" placeholder="YouTube URL" />
      </FloatingLabel>
      {
        invalidYouTubeURL &&
        <div className="text-danger text-center fw-bolder">ERROR : Invalid YouTube Link!!!</div>
      }
         </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className='btn btn-info' variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
