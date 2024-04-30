import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getVideoHistoryAPI, removeHistoryAPI } from '../Services/allAPI'





function Histroy() {

  const [videoHistory,setVideoHistory] = useState([])
  console.log(videoHistory);
  useEffect(()=>
  {
    getAllHistory()
  },[])

const getAllHistory = async()=>
{
  try{
      const result = await getVideoHistoryAPI()
      setVideoHistory(result.data)
  }catch(err)
  {
    console.log(err);
  }
}


const handleDeleteVideo = async (videoId) =>{
  try{
    await removeHistoryAPI(videoId)
    getAllHistory()
    // console.log(result);
    // setDeleteResponse(result.data)

  }catch(err){
    console.log(err);
  }

}

  
  return (
    <div className='container my-5'>
      <div className="d-flex justify-content-between">
        <h3>Watch Histroy</h3>
        <Link to={'/home'}>Back to Home <i class="fs-5 fa-solid fa-house"></i></Link>
      </div>
      <table className="table my-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Video Link</th>
            <th>Time Stamp</th>
            <th><i className="fa-solid fa-ellipsis-vertical"></i></th>
          </tr>
        </thead>
        <tbody>
        {
          videoHistory.length>0?
          videoHistory?.map((item,index)=>(
          <tr key={item?.id}>
            <td>{index+1}</td>
            <td>{item?.caption}</td>
            <td><a href="https://www.youtube.com/embed/L0yEMl8PXnw?si=2vD8XQn5YVgxD3ep">{item?.youtubeURL}</a></td>
            <td>{item?.timeStamp}</td>
            <td><button onClick={()=>handleDeleteVideo(item?.id)} className='btn fs-5'><i className="fa-solid fa-trash text-danger"></i></button></td>
          </tr>
          ))
          :
          <div className="text-danger text-center fw-bolder">---------------YOUR WATCH HISTORY IS EMPTY!!!---------------
        
           </div>
        
         

        }
        </tbody>
      </table>
    </div>
  )
}

export default Histroy
