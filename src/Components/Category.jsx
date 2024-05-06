import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryAPI, getCategoryAPI, getVideoAPI, removeCategoryAPI, removeVideoAPI, updateCategoryAPI } from '../Services/allAPI';
import VideoCard from './VideoCard';


function Category({setRemoveCategoryVideoResponse}) {
  // state for all category
  const [allCategories,setAllCategories] = useState([])
  console.log(allCategories);
  // state for entering name in textbox
  const [categoryName,setCategoryName] = useState("")

  // modal function state
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // useeffect time of compo loading
  useEffect(()=>
    {
        getAllCategory()
    },[])

  // category getting function
  const getAllCategory = async ()=>
  {
    try {
      const result = await getCategoryAPI()
      setAllCategories(result.data)
    } catch (error) {
      console.log(error);
    }
  }

  // category adding function
  const handleAddCategory = async () =>
  {
    if(categoryName)
    {
      // api call
      // toast.success("New category added")
      try {
        await addCategoryAPI({categoryName,allVideos:[]})
        // to update value of the state to empty used to avoid adding of empty category
        setCategoryName("")
        handleClose()
        getAllCategory()
      } catch (error) {
        console.log(error);
      }
      
    }
    else
    {
      toast.warning("Please fill the form Completely!!!")
    }
  }

  // category deleting function

  const handleRemoveCategory = async (categoryid)=>
  {
    try {
      await removeCategoryAPI(categoryid)
      getAllCategory()
    } catch (error) {
      console.log(error);
    }

  }

  // function to prevent the event happens before dropping
  const dragOverCategory =(e)=>
  {
    e.preventDefault()
    console.log("Dragging over category");
  }

  // function to dropping video
  const videoDropped = async (e,categoryId)=>
  {
    const videoId = e.dataTransfer.getData("videoId")
    console.log(`Video Id :${videoId} Dropped in Category id : ${categoryId}`);
      // video getting 

    try {
      const {data} = await getVideoAPI(videoId)
      console.log(data);
      let selectedCategory = allCategories?.find(item=>item.id==categoryId)
      selectedCategory.allVideos.push(data)
      console.log(selectedCategory);
      await updateCategoryAPI(categoryId,selectedCategory)
      const result = await removeVideoAPI(videoId)
      setRemoveCategoryVideoResponse(result)
      getAllCategory()

    } catch (error) {
      console.log(error);
      
    }
  }
// function for removing video from category to all videos(view compo)
// here we pass the video details as args
const videoDragStarted = (e,videoDetails,categoryId)=>
{
  console.log(categoryId,videoDetails);
  console.log("video dragging strated from categroy");
  let dataShare = {categoryId,videoDetails}
  // the datashre is created as onj, so to convert used json.stringify()
  e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
}

  return (
    <>
    
      <div className="d-flex justify-content-around">
        <h3>All Cateogories</h3>
        <button onClick={handleShow} style={{width:'px',height:'50px'}} className='btn btn-info ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>

      <div className="container-fluid mt-3">
        {
          allCategories.length>0?
          allCategories?.map(item=>(
              <div droppable={true} onDragOver={e=>dragOverCategory(e)} onDrop={e=>videoDropped(e,item?.id)} key={item?.id} className="border rounded p-3 mb-2">
                <div className="d-flex justify-content-between">
                  <h5>{item?.categoryName}</h5>
                  <button onClick={()=>handleRemoveCategory(item?.id)} className="btn"><i className="fa-solid fa-trash text-danger"></i></button>
                </div>
                <div className="row mt-2">
                  {
                    item.allVideos?.length>0 &&
                    item.allVideos?.map(video=>(
                      <div draggable={true} onDragStart={e=>videoDragStarted(e,video,item.id)} key={video?.id} className="pt-2 col-lg-6">
                        <VideoCard displaydata={video} insideCategory={true} />
                      </div>
                    ))
                  }
                </div>

              </div>
          ))
          :
          <div className="text-danger fw-bolder text-center">No Categories Are Added Yet!!!</div>
        }
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
        <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddCategory} variant="info">Add</Button>
        </Modal.Footer>
      </Modal>
      
      {/* toast container to show the toast */}
      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>

    </>
  )
}

export default Category
