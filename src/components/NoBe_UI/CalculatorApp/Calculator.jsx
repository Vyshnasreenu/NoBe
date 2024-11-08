/* eslint-disable no-eval */
import React, { useState } from 'react'
import './calculator.css'
import { Button } from '@mui/material'
const Calculator = () => {

   const [inputValue, setInputValue] = useState('')

   // const calNum = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", ".", "0", "=", "/"]


   // const calculatorValues = (item, index) => {
   //    if ((index + 1) % 4 !== 0) {
   //       return (
   //          <div className='m-3'>
   //             <div className='d-flex justify-content-around'>
   //                <Button variant='outlined' className='shadow fs-4' value={element} onClick={() => onClickHandler(element)}>{element}</Button>
   //             </div>
   //          </div>
   //       )
   //    }
   //    break;
   // }


   const onClickHandler = (value) => {
      setInputValue(inputValue + value)
   }
   const onResult = () => {
      try {
         setInputValue(eval(inputValue))
      } catch (error) {
         setInputValue("ERROR")
      }
   }
   const onClear = () => {
      try {
         setInputValue(inputValue.slice(0, -1))
      } catch (error) {
         setInputValue("")
      }
   }
   return (
      <div className=' w-100  main'>
         <div className="container-fluid d-flex justify-content-center align-items-center ">
            <div className="m-5 shadow px-4 pt-2">
               <h2 className='header '> MY CALCULATOR APP</h2>
               <div className=''>
                  <input type='text' id="result" className='form-control' value={inputValue} disabled />
               </div>
               {/* {calNum.map((item, index) => {
                  calculatorValues(item, index)
               })} */}
               <div className='m-3'>
                  <div className='d-flex justify-content-around'>
                     <Button variant='outlined' className='shadow fs-4' value="1" onClick={() => onClickHandler("1")}>1</Button>
                     <Button variant="outlined" className='shadow fs-4' value="2" onClick={() => onClickHandler("2")}>2</Button>
                     <Button variant="outlined" className='shadow fs-4' value="3" onClick={() => onClickHandler("3")}>3</Button>
                     <Button variant="outlined" className='shadow fs-4' value="+" onClick={(e) => onClickHandler("+")}>+</Button>
                  </div>
               </div>
               <div className='m-3'>
                  <div className='d-flex justify-content-around'>
                     <Button variant='outlined' className='shadow fs-4' onClick={() => onClickHandler("4")}>4</Button>
                     <Button variant="outlined" className='shadow fs-4' onClick={() => onClickHandler("5")}>5</Button>
                     <Button variant="outlined" className='shadow fs-4' onClick={() => onClickHandler("6")}>6</Button>
                     <Button variant="outlined" className='shadow fs-4' value="-" onClick={() => onClickHandler("-")}>-</Button>
                  </div>
               </div>
               <div className='m-3'>
                  <div className='d-flex justify-content-around'>
                     <Button variant='outlined' className='shadow fs-4' onClick={() => onClickHandler("7")}>7</Button>
                     <Button variant="outlined" className='shadow fs-4' onClick={() => onClickHandler("8")}>8</Button>
                     <Button variant="outlined" className='shadow fs-4' onClick={() => onClickHandler("9")}>9</Button>
                     <Button variant="outlined" className='shadow fs-4' onClick={() => onClickHandler("*")}>*</Button>
                  </div>
               </div>
               <div className='m-3'>
                  <div className='d-flex justify-content-around'>
                     <Button variant='outlined' className='shadow fs-4' value="." onClick={() => onClickHandler(".")}>.</Button>
                     <Button variant="outlined" className='shadow fs-4' onClick={() => onClickHandler("0")}>0</Button>
                     <Button variant="outlined" className='shadow fs-4' onClick={() => onResult("=")}>=</Button>
                     <Button variant="outlined" className='shadow fs-4' onClick={() => onClickHandler("/")}>/</Button>
                  </div>
               </div>
               <div className='m-3 row'>
                  <Button variant='outlined' color='success' onClick={() => onClear("C")}>Clear</Button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Calculator