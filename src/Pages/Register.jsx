import React,{useState} from 'react'
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap'
import { Link } from 'react-router-dom'
import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'
import '../styles/login.css'

const Register = () => {
  const handleChange = (e) => {
    setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
  };
 const [credentials,setCredentials] = useState({
    name: undefined,
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
              <img src={registerImg} alt="" className='w-75'/>
            </div>
            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="" />
                <h2>Register</h2>

                <Form onClick={handleClick}>
                  <FormGroup>
                    <input type="text" placeholder='User Name' id='name' required onChange ={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type="text" placeholder='Email' id='email' required onChange ={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Password' id='password' required onChange ={handleChange}/>
                  </FormGroup>
                  <Button className='btn primary__btn auth__btn' type='submit'>Create Account</Button>
                </Form>
                <p>Already have a account <Link to='/login'>Login</Link></p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default Register