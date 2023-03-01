import React from 'react'
import '../styles/search-bar.css'
import {Col, Form, FormGroup} from 'reactstrap'

const SearchBar = () => {
  return (
    <Col lg = '12'>
       <div className="search__box">
          <Form className='d-flex align-items gap-4'>
             <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class="ri-map-pin-line"></i></span>
                <div>
                   <h6>Location</h6>
                   <input type="text" placeholder='Where are you doing' />     
                </div>
             </FormGroup>
             <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class="ri-map-pin-add-line"></i></span>
                <div>
                   <h6>Distance</h6>
                   <input type="number" placeholder='Distance k/h' />     
                </div>
             </FormGroup>
             <FormGroup className='d-flex gap-3 form__group form__group-last'>
                <span><i class="ri-group-line"></i></span>
                <div>
                   <h6>Max People</h6>
                   <input type="number" placeholder='0' />     
                </div>
             </FormGroup>    
             <span className='search__icon'><i class="ri-search-line"></i></span>             
          </Form>               
       </div>
    </Col>
  )
}

export default SearchBar