import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideoAPI } from '../Services/allAPI'

function View({addVideoResponse}) {
  const [deleteResponse,setDeleteResponse] = useState("")
  const [allVideos,setAllVideos] = useState([])
  console.log(allVideos);
  useEffect(()=>
{
  getAllVideos()
},[addVideoResponse,deleteResponse])

const getAllVideos = async () =>
{
  try{
    const result = await getAllVideoAPI()
    console.log(result);
    if(result.status>=200 && result.status<300)
    {
      setAllVideos(result.data)

    }

  }    catch(err)
  {
    console.log(err);
  }
}



  return (
    <>
      <Row>
      {
                allVideos.length>0?
                allVideos?.map(video=>(
                  <Col key={video?.id} className='mb-4' sm={12} md={6} lg={4}>
                  <VideoCard displaydata={video} setDeleteResponse={setDeleteResponse}/>
                </Col>
                ))
                :
                <div className='fw-bolder text-danger'>Nothing to display</div>
        
      }
      </Row>
    </>
  )
}

export default View
