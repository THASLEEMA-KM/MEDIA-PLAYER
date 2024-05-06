import React, { useState } from 'react'
import {  Card, Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../Services/allAPI';


function VideoCard({displaydata,setDeleteResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const {caption,youtubeURL} = displaydata
    // to get the time for watch history
    const systemTime = new Date()
    const formattedDate = systemTime.toLocaleString('en-US',{timeZoneName:'short'});
    console.log(formattedDate)
    
    const videoHistory ={caption,youtubeURL,timeStamp:formattedDate}
    try{
      await saveHistoryAPI(videoHistory)
    }catch(err)
    {
      console.log(err);
    }
  }
  const handleRemoveVideo = async (videoId) =>{
    try{
      const result = await removeVideoAPI(videoId)
      // console.log(result);
      setDeleteResponse(result.data)
    }catch(err){
      console.log(err);
    }
  }
const dragStarted = (e,videoId) =>
{
  console.log(`Dragging started with video Id : ${videoId}`);
  e.dataTransfer.setData("videoId",videoId)
}

  
  return (
    <>
    <Card draggable={true} onDragStart={e=>dragStarted(e,displaydata?.id)}>
      <Card.Img onClick={handleShow}  height={'200px'} variant="top" src={displaydata?.imgURL} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'> 
        <p className='pt-2'>{displaydata?.caption}</p>
{     !insideCategory &&  
 <button  onClick={()=>handleRemoveVideo(displaydata?.id)} className='btn'><i className="fa-solid fa-trash text-danger fs-5"></i></button>
}        
      </Card.Title>

      </Card.Body>
    </Card>
    {/* modal */}
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displaydata?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315"  src={`${displaydata?.youtubeURL}?autoplay=1`} title="caption"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        {/* <iframe width="100%" height="315"  src='https://www.youtube.com/embed/L0yEMl8PXnw?autoplay=1' title="caption" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
        </Modal.Body> 
  
      </Modal>
    </>
  )
}

export default VideoCard
