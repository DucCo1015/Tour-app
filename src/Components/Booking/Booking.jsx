import React, { useState } from 'react'
import '../../styles/booking.css'
import {Form, FormGroup, ListGroup, ListGroupItem, Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const Booking = ({tour, avaRating}) => {
  
  const {price,reviews} = tour;
  const handleChange = (e) => {
     setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
  }
  
  const [credentials,setCredentials] = useState({
     id: '01',
     userEmail: "abc123@gmail.com",
     fullName: '',
     phone: '',
     guestSize: 1,
     bookAt: ''                    
  })
  const handleClick = (e) =>{
    e.preventDefault();
    console.log(credentials)
    navigate('/thankyou');
  }
  const serviceFee = 10;
  const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee);
  const navigate = useNavigate();

  return (
    <div className='tour__booking'>
       <div className="booking__top d-flex align-items-center justify-content-between">
          <h3>${price} <span>per person</span></h3>
          <span className="tour__rating d-flex align-items-center gap-1">
             <i class="ri-star-fill"></i> {avaRating === 0 ? null : avaRating}
             {avaRating === 0 ? ('Not rated') : (<span>({reviews.length})</span>)}
          </span>               
       </div> 

       <div className="booking__form">
           <h5>Information</h5>
           <Form className='booking__info-form'>
              <FormGroup>
                <input type="text" placeholder='Full name' id = 'fullName' required onChange={handleChange} />         
             </FormGroup>
             <FormGroup>
                <input type="number" placeholder='Phone' id = 'phone' required onChange={handleChange} />         
             </FormGroup>   
             <FormGroup>
                <input type="date" id = 'booAt' required onChange={handleChange} />  
                <input type="number" placeholder='Guest' id = 'guestSize' required onChange={handleChange} />       
             </FormGroup>            
           </Form>              
       </div> 

       <div className="booking__bottom">
           <ListGroupItem className='border-0 pz-0'>
              <h5 className='d-flex algin-items-center gap-1'>${price} <i class="ri-close-line"></i> 1 person</h5>
              <span>${price}</span>           
           </ListGroupItem>
           <ListGroupItem className='border-0 pz-0'>
              <h5>Service charge</h5>
              <span>${serviceFee}</span>           
           </ListGroupItem> 
           <ListGroupItem className='border-0 pz-0 total'>
              <h5>Total</h5>
              <span>${totalAmount}</span>           
           </ListGroupItem>     

           <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>            
       </div>                
    </div>
  )
}

export default Booking