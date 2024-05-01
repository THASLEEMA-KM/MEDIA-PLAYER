import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryAPI, getCategoryAPI, removeCategoryAPI } from '../Services/allAPI';


function Category() {
  // stste for all category
  const [allCategories,setAllCategories] = useState([])
  console.log(allCategories);
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
      try {
        await addCategoryAPI({categoryName,allVideos:[]})
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

  // category deletinf function

  const handleRemoveCategory = async (categoryid)=>
  {
    try {
      await removeCategoryAPI(categoryid)
      getAllCategory()
    } catch (error) {
      console.log(error);
    }

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
              <div key={item?.id} className="border rounded p-3 mb-2">
                <div className="d-flex justify-content-between">
                  <h5>{item?.categoryName}</h5>
                  <button onClick={()=>handleRemoveCategory(item?.id)} className="btn"><i className="fa-solid fa-trash text-danger"></i></button>
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
