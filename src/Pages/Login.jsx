import React,{useState} from 'react'
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap'
import { Link } from 'react-router-dom'
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import '../styles/login.css'

const Login = () => {
  const handleChange = (e) => {
    setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
  };
 const [credentials,setCredentials] = useState({
    email: undefined,
    password: undefined                 
  });
  const handleClick = (e) => {
    e.preventDefault();
  }

  return (
   <section>
    <Container>
      <Row>
        <Col lg = '8' className='m-auto'>
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={loginImg} alt="" className='w-75'/>
            </div>
            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="" />
                <h2>Login</h2>

                <Form onClick={handleClick}>
                  <FormGroup>
                    <input type="text" placeholder='Email' id='email' required onChange ={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Password' id='password' required onChange ={handleChange}/>
                  </FormGroup>
                  <Button className='btn primary__btn auth__btn' type='submit'>Login</Button>
                </Form>
                <p>Don't have an account? <Link to='/register'> Create Account</Link></p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default Login