import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
 import './Signup.css'
import { singupuser } from '../Redux/apicall';
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';


const Signup = () => {

const [username,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const dispatch=useDispatch()
function display (e){
  e.preventDefault();

  console.log('data ?',username,email,password);
  singupuser(dispatch,{username,email,password})
}

  return ( 
    <div className='Main'>
        <h3 className='header'>Signup pages</h3>
          <Form onSubmit={display}>   

          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User name</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />

        <Form.Text className="text-muted">
        <Link to={'/'}>I have an already a account</Link>  
        </Form.Text>

      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Signup
