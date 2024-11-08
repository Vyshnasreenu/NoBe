import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import SignUpBox from './SignUpBox'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [name, setName] = useState("")
  const onClick = (childData) => {
    console.log(childData)
    setName(childData)
    setIsOpen(false)
  }

  const isNullOrWhiteSpace = (value) => {
    if (value !== undefined && value !== "" && value != null) return true;
  }

  // const Loadingpage=()=>{
  //    return(
  //     <SingUpBox/>
  //    )
  //   }
  return (
    <div>
      <div>
        <SignUpBox open={isOpen} onClick={onClick} setIsOpen={setIsOpen} />
      </div>
      <nav className='navbar navbar-expand-lg navbar-light'>
        {/* <div className=''> */}
        <div className='mx-2'><h2> 🏔️ Adventure</h2></div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#myNavbar"
        // aria-controls="myNavbar"
        // aria-expanded="false"
        // aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* </div> */}

        <div className=" collapse navbar-collapse" id="myNavbar" style={{ justifyContent: "center" }}>
          <ul className="navbar-nav">
            <li className='nav-item col-sm-2 p-2'>
              <a href=" #" className='nav-link text-dark'>Home</a>
            </li>
            <li className='nav-item col-sm-2 p-2'>
              <a href="#" className='nav-link'>About</a>
            </li>
            <li className='nav-item col-sm-2 p-2'>
              <a href=" #" className='nav-link'>Service</a>
            </li>
            <li className='nav-item col-sm-2 p-2'>
              <a href=" #" className='nav-link'>Gallery</a>
            </li>
            <li className='nav-item col-sm-2 p-2'>
              <a href=" #" className='nav-link'>FQA</a>
            </li>
            <li className='nav-item col-sm-2 p-2'>
              <Button variant='contained' onClick={() => setIsOpen(true)}>SignUp</Button>
            </li>
          </ul>
        </div>
        {isNullOrWhiteSpace(name) ? (<h5 style={{ fontFamily: "monospace" }}>{`Welcome ${name}!!`}</h5>) : ""}
      </nav>
    </div>
  )
}

export default Navbar