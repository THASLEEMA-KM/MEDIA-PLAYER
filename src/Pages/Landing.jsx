import React from 'react'
import { Link } from 'react-router-dom'
import landingimage from '../assets/musicbeat.gif'
import { Card } from 'react-bootstrap'
import managevideo from '../assets/settings.gif'
import categorylist from "../assets/category.png"
import history from '../assets/watchhistory.jpg'
function Landing() {
  return (
    <>
      <div className="container landingsection">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h5>Welcome to <span className='text-warning'>Media Player</span></h5>
            <p className='mt-3' style={{textAlign:'justify',color:'white'}}>Media Player App will Provide user to add or remove their uploaded videos from Youtube and also allow them to arrange it in different categoeris by drag and drop.User can also have the probision to manage their watch history as well what are you waiting for ? lets satrt Exploring our site!!!.</p>
            <Link to={'/home'} className='btn btn-info mt-3'>Get Started</Link>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
            <img className='ms-5' src={landingimage} alt="landing page" />
          </div>
        </div>
        <div className="Features-my-5">
          <h3 className='text-center'>Features</h3>
          <div className="row">
            <div className="col-lg-4">
            <Card style={{ width: '22rem',height:'400px' }}>
              <Card.Img variant="top" className='img-fluid' style={{height:'250px'}} src={managevideo} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                    Users can upload, view and remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
            <div className="col-lg-4">
            <Card style={{ width: '22rem',height:'400px' }}>
              <Card.Img variant="top" className='img-fluid' style={{height:'250px'}} src={history} />
              <Card.Body>
                <Card.Title>Categorise Videos</Card.Title>
                <Card.Text>
                    Users can Categorise videos, view and remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
            <div className="col-lg-4">
            <Card style={{ width: '22rem',height:'400px' }}>
              <Card.Img variant="top" className='img-fluid' style={{height:'250px'}} src={categorylist} />
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                    Users can manage the watch history of all videos.
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
          </div>
          
        </div>
        <div className="Youtube-my-5 ">
          <div className="row my-5 border rounded p-5">
            <div className="col-lg-5">
              <h3 className='text-warning'>Simple, Fast and Powerful</h3>
              <p style={{textAlign:'justify'}}>
                <span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit impedit perferendis quam quod 
              </p>
              <p style={{textAlign:'justify'}}>
                <span className='fs-5'>Categorise Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit impedit perferendis quam quod 
              </p>
              <p style={{textAlign:'justify'}}>
                <span className='fs-5'>Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit impedit perferendis quam quod 
              </p>
            </div>
            <div className="col"></div>
            <div className="col-lg-6">
            <iframe width="100%" height="360" src="https://www.youtube.com/embed/tOM-nWPcR4U?si=h8BuRlb8x42K30P5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
