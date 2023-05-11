import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
 import './Signup.css'
import { loginpages } from '../Redux/apicall';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

export const Login = () => {
const [email,setemail]=useState('')
const [password,setPassword]=useState('')
const dispatch=useDispatch()

const display =(e)=>{
e.preventDefault();
loginpages(dispatch,{email,password})
}
const name=useSelector((state)=>state.users)
console.log(name);
  return (

<div className='Main'>
        <h3 className='header'>Login pages</h3>
          <Form onSubmit={display}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setemail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />

        <Form.Text className="text-muted">
          <Link to={'signup'}>signup</Link> 
        </Form.Text>

      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    
  )
}
export default Login