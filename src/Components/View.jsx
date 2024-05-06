import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { addVideoAPI, getAllVideoAPI, getSingleCategoryAPI, updateCategoryAPI } from '../Services/allAPI'

function View({addVideoResponse,removeCategoryVideoResponse}) {
  const [deleteResponse,setDeleteResponse] = useState("")
  // state for get all videos
  const [allVideos,setAllVideos] = useState([])
  console.log(allVideos);
  useEffect(()=>
{
  getAllVideos()
  
},[addVideoResponse,deleteResponse,removeCategoryVideoResponse]) 

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
// func for dragging
const dragOverView =(e)=>
{
  // to avoid refreshing
  e.preventDefault()
}


// 
const handleCategoryVideo = async (e)=>
{
  const {categoryId,videoDetails} = JSON.parse(e.dataTransfer.getData("dataShare"))
  console.log(categoryId,videoDetails);
  try {
    const {data} = await getSingleCategoryAPI(categoryId)
    console.log(data);
    const updatedCategoryVideoList = data.allVideos.filter(item=>item.id!==videoDetails.id)
    console.log(updatedCategoryVideoList);
    const {id,categoryName} = data
    const categoryResult = await updateCategoryAPI(categoryId,{id,categoryName,allVideos:updatedCategoryVideoList})

    // calling the api addvideoapi to add the dragged video from category to view
    await addVideoAPI(videoDetails)
    //  call the function to get all videos in the component view
    getAllVideos()
  } catch (err) {
    console.log(err);
  }
}




  return (
    <>
      <Row droppable={true} onDragOver={e=>dragOverView(e)} onDrop={e=>handleCategoryVideo(e)}>
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
