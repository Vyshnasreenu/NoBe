import React, { useState } from 'react'
import { CustomPopup } from '../../CustomPopup'
import { Button } from '@mui/material'
import { Input } from 'antd'

const SignUpBox = (props) => {

  const [SignupContainer, setSignupContainer] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [passwordColor, setPasswordColor] = useState(false)
  const [cnfColor, setCnfColor] = useState(false)

  function isStrongPassword(password) {
    // Check for at least one uppercase letter
    const hasUpperCase = /[A-Z]/.test(password);
    if (!hasUpperCase) {
      alert("At least one uppercase letter")
      return ""
    }

    // Check for at least one number
    const hasNumber = /\d/.test(password);
    if (!hasNumber) {
      alert("At least one number")
      return null;
    }

    // Check for the '@' symbol
    const hasAtSymbol = /[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/.test(password);
    if (!hasAtSymbol) {
      alert(`Missing special character`)
      return null
    }

    // Combine the conditions
    const isStrong = hasUpperCase && hasNumber && hasAtSymbol;

    return isStrong;
  }

  const signupHandler = () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (SignupContainer.name === "" || SignupContainer.name === null) {
      document.getElementById("nameBox").style.border = "1px solid red"
    }
    else {
      document.getElementById("nameBox").style.border = ""
    }
    if (SignupContainer.email === "" || SignupContainer.email === null) {
      document.getElementById("emailBox").style.border = "1px solid red"
    }
    else if (!regex.test(SignupContainer.email)) {
      alert("This is not a valid email format")
    }
    else {
      document.getElementById("emailBox").style.border = ""
    }
    if (SignupContainer.password === "") {
      setPasswordColor(true)
    } else {
      isStrongPassword(SignupContainer.password)
      setPasswordColor(false)
    }
    if (SignupContainer.confirmPassword === "") setCnfColor(true)
    else {
      if (SignupContainer.password !== SignupContainer.confirmPassword) {
        alert("Password doesn't match!!")
      }
      setCnfColor(false)
    }


    if ((SignupContainer.password === SignupContainer.confirmPassword)
      && SignupContainer.name && SignupContainer.email
      && SignupContainer.password && SignupContainer.confirmPassword
    ) {
      alert("Registered Successfully!!!")
      setSignupContainer("")
      props.onClick(SignupContainer.name)
    }

  }
  const changeHandler = (event) => {
    setSignupContainer({
      ...SignupContainer,
      [event.target.name]: event.target.value
    })
    console.log(event.target.value)
  }

  // const onClose = () => {
  //   setClose(true)
  // }


  return (
    <div className=''>

      {/* {props.open && ( */}
      <CustomPopup
        open={(props.open)}
        onClick={(props.onClick)}
        title="SignUp"
        // active="active"
        component={
          <div className='contanier'>
            <div className='row'>
              <div className='col-sm-12'>
                <Input type='text'
                  name="name"
                  size='large'
                  placeholder='Name'
                  // className='form-control'
                  id="nameBox"

                  value={SignupContainer.name}
                  onChange={(event) => changeHandler(event)} />
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-sm-12'>
                <Input type='text'
                  size='large' name='email' placeholder='Email' id='emailBox' value={SignupContainer.email} onChange={(event) => changeHandler(event)} />
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-sm-12'>
                <Input.Password
                  name='password'
                  size='large'
                  style={{ border: passwordColor ? "1px solid red" : "" }}
                  placeholder='Password'
                  id='passwordBox'
                  value={SignupContainer.password}
                  onChange={(event) => changeHandler(event)} />
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-sm-12'>
                <Input.Password
                  name='confirmPassword'
                  size='large'
                  placeholder='Confirm Password'
                  style={{ border: cnfColor ? "1px solid red" : "" }}
                  id='confirmBox'
                  value={SignupContainer.confirmPassword}
                  onChange={(event) => changeHandler(event)} />
              </div>
            </div>
            <div className='row mt-2'>
              <Button variant='contained' onClick={signupHandler}>SignUp</Button>
            </div>
            <div>
              <p>Already have an account? <Button className='btn btn-link '
                onClick={() => {
                  alert("Login Successfully")
                  props?.setIsOpen(false)
                }}
              >Login</Button></p>
            </div>
          </div>
        }
      />

      {/* )} */}
    </div>
  )
}

export default SignUpBox