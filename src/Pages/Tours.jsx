import React, {useEffect, useState} from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/tours.css'
import {Container, Row, Col} from 'reactstrap'
import tourData from '../assets/data/tours'
import TourCard from '../shared/TourCard'
import SearchBar from '../shared/SearchBar'
import Newsletter from '../shared/Newsletter'


const Tours = () => {
  const [pagesCount,setPagesCount] = useState(0);
  const [page,setPage] = useState(0);

  useEffect(()=>{
    const pages = Math.ceil(5/4)
    setPagesCount(pages);
  },[page])
  return (
    <>
      <CommonSection title={'All Tours'} />

      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              tourData?.map((tour) => (
                <Col lg = '3' md = '6' sm = '6' className='mb-4' key = {tour.id}><TourCard tour= {tour}/></Col>
              ))
            }
            <Col lg = '12' className=' pagination d-flex algin-items-center justify-content-center mt-4 gap-3'>
              {[...Array(pagesCount).keys()].map(number =>(
                <span key={number} onClick = {() => setPage(number)} 
                className = {page === number ? "active__page": " "}>
                  {number + 1}
                </span>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  )
}

export default Tours