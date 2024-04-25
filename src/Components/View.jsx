import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideoAPI } from '../Services/allAPI'

function View() {

  const [allVideos,setAllVideos] = useState([])
  console.log(allVideos);
  useEffect(()=>
{
  getAllVideos()
},[])

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
        <Col className='mb-4' sm={12} md={6} lg={4}>
          <VideoCard/>
        </Col>
      </Row>
    </>
  )
}

export default View
