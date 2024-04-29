import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getVideoHistoryAPI } from '../Services/allAPI'

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
          <tr>
            <td>1</td>
            <td>Avesham Movie Trailer</td>
            <td><a href="https://www.youtube.com/embed/L0yEMl8PXnw?si=2vD8XQn5YVgxD3ep">https://www.youtube.com/embed/L0yEMl8PXnw?si=2vD8XQn5YVgxD3ep</a></td>
            <td>22/02/2024 10.45AM</td>
            <td><i className="fa-solid fa-trash text-danger"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Histroy
