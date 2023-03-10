import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'


const Testimonial = () => {
  
  const setting = {
    dots: true,
    infinity:true,
    autoplay: true,
    speed: 1000,
    swipeToSlide:true,
    slidesToShow:3,

    responsive: [
      {
         breakpoint: 992,
         setting: {
           slidesToShow: 2,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
         },               
      },
      {
         breakpoint: 576,
         setting: {
           slidesToShow: 1,
           slidesToScroll: 1,
         },                
      },
    ]
  }
  return (
    <Slider {...setting}>
      <div className='testimonial py-4 px-3'>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo sed aspernatur nam quod suscipit est in voluptates expedita dignissimos</p>

       <div className="d-flex align-items-center gap-4 mt-3">
           <img src={ava01} alt="" className='w-25 h-25 rounded-2'/>
           <div>
              <h6 className='mb-0 mt-3'>Jhon Doe</h6>
              <p>Customer</p>  
            </div>            
       </div>
      </div>
      <div className='testimonial py-4 px-3'>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo sed aspernatur nam quod suscipit est in voluptates expedita dignissimos</p>

       <div className="d-flex align-items-center gap-4 mt-3">
           <img src={ava02} alt="" className='w-25 h-25 rounded-2'/>
            <div>
              <h6 className='mb-0 mt-3'>Lia Franklin</h6>
              <p>Customer</p>  
            </div>            
       </div>
      </div>
      <div className='testimonial py-4 px-3'>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo sed aspernatur nam quod suscipit est in voluptates expedita dignissimos</p>

       <div className="d-flex align-items-center gap-4 mt-                 3">
           <img src={ava03} alt="" className='w-25 h-25 rounded-2'/>
           <div>
              <h6 className='mb-0 mt-3'>Jhon Doe</h6>
              <p>Customer</p>  
            </div>           
       </div>
      </div>
      <div className='testimonial py-4 px-3'>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo sed aspernatur nam quod suscipit est in voluptates expedita dignissimos</p>

       <div className="d-flex align-items-center gap-4 mt-3">
           <img src={ava01} alt="" className='w-25 h-25 rounded-2'/>
           <div>
              <h6 className='mb-0 mt-3'>Jhon Doe</h6>
              <p>Customer</p>  
            </div>            
       </div>
      </div>
      
    </Slider>
  )
}

export default Testimonial