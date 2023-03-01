import React,{useState,useRef} from 'react'
import tourData from '../assets/data/tours'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import calculateAvaRating from '../utils/avaRating'
import '../styles/tour-details.css'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../Components/Booking/Booking'

const TourDetails = () => {
  const { id } = useParams();
  const tour = tourData.find(tour => tour.id === id);
  const { photo, title, desc, price, reviews, city, distance, maxGroupSize,address } = tour;
  const {avaRating,totalRating} = calculateAvaRating(reviews)
  const options = {day: 'numeric', month: 'long', year: 'numeric'};
  const reviewRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const submitHandel = (e) => {
    e.preventDefault();
    const reviewText =  reviewRef.current.target.value;
    console.log(`${reviewText}, ${tourRating}`)
  }

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg ='8'>
            <div className="tour__content">
                <img src={photo} alt="" className='w-100'/>

                <div className="tour__info">
                  <h2>{title}</h2>

                  <div className="d-flex align-items-centers gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i class="ri-star-fill"></i> {avaRating === 0 ? null : avaRating}
                      {totalRating === 0 ? ('Not rated') : (<span>({reviews.length})</span>)}
                    </span>
                    <span><i class="ri-map-pin-fill"></i>{address}</span>
                  </div>
                  <div className="tour__exr-details">
                    <span><i class="ri-map-pin-fill"></i> {city}</span>
                    <span><i class="ri-money-dollar-circle-fill"></i> ${price}</span>
                    <span><i class="ri-map-pin-time-line"></i> {distance} km/h</span>
                    <span><i class="ri-group-line"></i> {maxGroupSize} people</span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                {/*======================= */}

                {
                  <div className="tour__reviews mt-4">
                    <h4>Reviews ({reviews?.length} reviews) </h4>

                    <Form onSubmit={submitHandel}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        <span onClick={() => setTourRating(1)}>1 <i class="ri-star-fill"></i></span>
                        <span onClick={() => setTourRating(2)}>2 <i class="ri-star-fill"></i></span>
                        <span onClick={() => setTourRating(3)}>3 <i class="ri-star-fill"></i></span>
                        <span onClick={() => setTourRating(4)}>4 <i class="ri-star-fill"></i></span>
                        <span onClick={() => setTourRating(5)}>5 <i class="ri-star-fill"></i></span>
                      </div>
                      <div className="reviews__input">
                        <input type="text" placeholder='share your thoughts' ref={reviewRef}/>
                        <button className='btn primary__btn text-white' type='submit'>Submit</button>
                      </div>
                    </Form>
                    <ListGroup className='user__reviews'>
                       {
                        reviews?.map((review,index) => (
                          <div className="reviews__item" key={index}>
                            <img src={avatar} alt="" />

                            <div className="w-100">
                              <div className="d-flex algin-items-center justify-content-between">
                                <div>
                                  <h5>Nguyen An</h5>
                                  <p>{new Date('02-24-2023').toLocaleDateString('en-US', options)}</p>
                                </div>
                                <span className='d-flex align-items-center'> 5 <i class="ri-star-fill"></i></span>
                              </div>
                              <h6>Amazing Tour</h6>
                            </div>
                          </div>
                        ))
                       }
                    </ListGroup>
                  </div>
                }
              </div>
            </Col>

            <Col lg = '4'>
              <Booking tour = {tour} avaRating = {avaRating} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default TourDetails