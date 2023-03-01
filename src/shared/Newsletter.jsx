import React from 'react'
import '../styles/newsletter.css'
import {Container, Row, Col} from 'reactstrap'
import maleToursList from '../assets/images/male-tourist.png'


const Newsletter = () => {
  return (
    <section className='newsletter'>
       <Container>
          <Row>
             <Col lg = '6'>
                <div className="newsletter__content">
                   <h2>Subscribe now get useful traveling information</h2>

                    <div className="newsletter__input">
                         <input type="email" placeholder='Enter your email' />
                         <button className='btn btn__newsletter'>Subscribe</button>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati repellendus eos officia aliquam totam?</p>      
                </div>         
             </Col>
             <Col lg = '6'>
                  <div className="newsletter__img">
                     <img src={maleToursList} alt="" />         
                  </div>       
             </Col>          
          </Row>
       </Container>                  
    </section>
  )
}

export default Newsletter