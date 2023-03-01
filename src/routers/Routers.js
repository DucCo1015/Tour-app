import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Tours from '../Pages/Tours'
import TourDetails from '../Pages/TourDetails'
import SearchResultList from '../Pages/SearchResultList'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import ThankYou from '../Pages/ThankYou'

const Routers = () => {
  return (
    <Routes>
      <Route path='*' element = {<Navigate to= {'/home'} />} />
      <Route path='/home' element = {<Home/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='/tours' element = {<Tours/>} />
      <Route path='/tours/:id' element = {<TourDetails/>} />
      <Route path='/login' element = {<Login/>} />
      <Route path='/register' element = {<Register/>} />
      <Route path='/tour/:search' element = {<SearchResultList/>} />
      <Route path='/thankyou' element = {<ThankYou/>} />
    </Routes>
  )
}

export default Routers