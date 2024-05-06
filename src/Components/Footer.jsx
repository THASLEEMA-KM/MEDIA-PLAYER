import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='container w-100 mt-5'>
      <div className="d-flex justify-content-between">
        <div style={{width:'300px'}} className="intro">
          <Link to={'/'} style={{textDecoration:'none',color:'white'}} ><h5><i className="fa-solid fa-music me-2"></i>Media Player</h5></Link >
          <p style={{color:'white'}}>Designed and built with all the love in the world by the Luminar team with the h elp of our contributers.</p>
          <p style={{color:'white'}}>Code liscenced Luminar, docs CC BY 3.0.</p>
          <p>Currently v5.3.2</p>
        </div>
        <div  className="links d-flex flex-column">
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home</Link>
          <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>History</Link>
        </div>
        <div className="guides d-flex flex-column">
        <h5>Guides</h5>
        <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}>React</a>
        <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}>React Bootsrap</a>
        <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}>React Router</a>
        </div>
        <div className="contacts">
          <h5>Contact Us</h5>
          <div className="d-flex">
            <input placeholder='Enter Your Email id' type="text" className="form-control" />
            <button className='btn btn-info ms-2'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
            <a href="" className='fs-4' style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-twitter"></i></a>
            <a href="" className='fs-4' style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-instagram"></i></a>
            <a href="" className='fs-4' style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-facebook"></i></a>
            <a href="" className='fs-4' style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-github"></i></a>
            <a href="" className='fs-4' style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            <a href="" className='fs-4' style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-solid fa-phone"></i></a>
          </div>
        </div>


      </div>
      {/* <div className='copyright text-center'>
            © 2024 Copyright:
                <a className=" fw-bold" href="#" style={{textDecoration:'none',color:'white'}}>thasleemakm5@gmail.com</a>
      </div> */}
      <p className='text-center mt-3'>  Copyright  © Jan 2024 Batch , Media Player, Built with React.</p>
    </div>
    
  )
}

export default Footer
