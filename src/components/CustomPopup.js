import { Close, ClosedCaption, Delete, DeleteOutline } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export const CustomPopup = (props) => {
  const OnhandlerClick = () => props.onClick();
  return (
    <div className=''>
      {props.open ? (
        <div className='popup-overlay'>
          <div className='popup'>
            <div className='d-flex justify-content-between'>
              <h4>{props?.title}</h4>
              <div className='text-danger col-sm-2 text-end' style={{ cursor: 'pointer' }} onClick={() => OnhandlerClick()} tabIndex={0}>
                <span style={{ fontSize: "1.2rem", fontWeight: "500" }}><Close /></span>
              </div>
            </div>
            <hr />
            <div className=''>
              {props?.component}
            </div>
          </div>
        </div>
      ) : ""}
    </div>
  )
}
