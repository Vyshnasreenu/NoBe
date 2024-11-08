import React from 'react'
import './quiz.css'
import { Button } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
export default function HomePage() {
  return (
    <div>
   <div className="box">
        <h1>Welcome to Our Quiz App</h1>
      <div className='m-5'>
        <Link to='./quiz'>
            <Button variant='contained' color="success">StartQuiz</Button>  
        </Link>
      </div>
      {/* <p>{location.pathname}</p> */}
   </div>
    </div>
  )
}
