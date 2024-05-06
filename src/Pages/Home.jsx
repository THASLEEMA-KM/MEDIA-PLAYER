import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'
function Home() {

  const [addVideoResponse,setAddVideoResponse] = useState("")

  // state for removing a video from category-using state lifting
  const [removeCategoryVideoResponse,setRemoveCategoryVideoResponse] = useState("")
  // state for updating the deleted response
  const [deleteVideoCategoryResponse,setDeleteVideoCategoryResponse] =useState("")
  return (
    <>
       <div className="container my-5 d-flex justify-content-between">
        <Add setAddVideoResponse={setAddVideoResponse} />
        <Link to={'/history'}> Watch History <i className="fs-5 fa-solid fa-clock"> </i></Link>
       </div>
       <div className="container-fluid my-5 row">
        <div className="col-lg-6">
          <h3>All Videos</h3>
          <View setDeleteVideoCategoryResponse={setDeleteVideoCategoryResponse} addVideoResponse={addVideoResponse} removeCategoryVideoResponse={removeCategoryVideoResponse} />
        </div>
        <div className="col-lg-6">
          <Category deleteVideoCategoryResponse={deleteVideoCategoryResponse} setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse}/>
        </div>
       </div>
    </>
  )
}

export default Home
