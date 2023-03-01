import React,{useRef, useEffect} from 'react'
import {Container, Row, Col} from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import '../../styles/header.css'

const nav__Links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
]

const Header = () => {
  
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const stickyHeader = () => {
    window.addEventListener("scroll", () =>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }
      else{
        headerRef.current.classList.remove('sticky__header')
      }
    }); 
  }
  useEffect(() =>{
    stickyHeader();
    return window.removeEventListener("scroll",stickyHeader)
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');
  
  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between ">

            <div className="nav__wrapper-logo">
              <img src={Logo} alt="logo-img"/>
            </div>

            <div className="navigation" ref={menuRef} onClick = {toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                 {
                   nav__Links.map((item, index) => (
                      <li className="nav__item" key={index}>
                        <NavLink to={item.path} className= {(navClass) => navClass.isActive ? 'active__links' : ''}>{item.display}</NavLink>
                      </li>
                   ))
                 }
              </ul>
            </div>

            <div className='nav__wrapper-user d-flex align-items-center gap-4'>
              <div className="nav__btn d-flex align-items-center gap-4">
                <button className='btn secondary__btn'><Link to = '/login'>Login</Link></button>
                <button className='btn primary__btn'><Link to = '/register'>Register</Link></button>
              </div>
              <span className='mobile__menu' onClick = {toggleMenu}>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header