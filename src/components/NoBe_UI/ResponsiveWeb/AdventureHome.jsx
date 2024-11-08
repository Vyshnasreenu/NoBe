import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './style.css'
import { Button, Dialog, DialogTitle } from '@mui/material'

const AdventureHome = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorchange(true)
    }
    else {
      setColorchange(false)
    }
  };

  window.addEventListener("scroll", changeNavbarColor)
  return (
    <div className=''>
      <div className={!colorChange ? "header row" : "header scrolled row"}>
        <Navbar />
      </div>
      <div>
        <div className='homepage row'>
          <div className='imageContainer'>
            <div className='homeContent col'>
              <p style={{ fontSize: "20px" }}>DISCOVER THE COLOR WORLD</p>
              <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>NEW EXPERIENCE</h1>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas obcaecati. Sit nisi eaque delectus cupiditate sapiente. Earum temporibus corrupti fuga ab, reprehenderit consequuntur? Rem cum voluptatum amet blanditiis! Labore.</span>
            </div>
            <div className='button'>
              <button type='button' variant='outlined' className='discover-button col-sm-2'>Discover now</button>
            </div>
          </div>
        </div>
      </div>
      <div className='' style={{ height: "", width: "100%" }}>
        <div className='container'>
          <div>
            <h1>Why Choose Us Your Fitness Builder</h1>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
          <div className='row' style={{ marginTop: "100px" }}>
            <div className='col-sm-6' style={{position:"inherit"}}>
              <div className='row'
              // style={{ transform: window.innerWidth > 768 ? "rotate(10deg)" : "" }}
              >
                <img src='./about-img.jpg' alt='' className='image' />
              </div>
            </div>
            <div className='col-sm-6 border content-box' 
            // style={{ transform: window.innerWidth > 768 ? "rotate(-10deg)" : "" }}
            >

              <h1 className='p-4 text-start m-4'>
                We Realize that <br />
                there are reduced <br />
                Wastege Stand out
              </h1>

              <div className='m-3'>
                <p className='text-start'>inappropriate behavior is often laughed off as “boys will be boys,” <br />
                  women face higher conduct standards – especially in the workplace. <br />
                  That’s why it’s crucial that, as women.</p>

                <p className='text-start'>inappropriate behavior is often laughed off as “boys will be boys,” <br />
                  women face higher conduct standards – especially in the workplace. <br />
                  That’s why it’s crucial that, as women.</p>

                <p className='text-start'>inappropriate behavior is often laughed off as “boys will be boys,” <br />
                  women face higher conduct standards – especially in the workplace. <br />
                  That’s why it’s crucial that, as women.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='container-fluid'> */}
      <div className='border bg-info' style={{marginTop: "100px" }}>
        <div className='row d-flex align-items-center border' style={{ height: "" }}>
          <h2>Latest Project on the go</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br />
            labore et dolore magna aliqua.</p>
        </div>
        <div>
          <div className='owl-controls'>
             <div className='owl-nav'>
             </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default AdventureHome