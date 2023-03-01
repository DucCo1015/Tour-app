import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../shared/CommonSection'
import '../styles/about.css'
import Subtitle from '../shared/Subtitle'
import aboutImg from '../assets/images/ha-long-1.jpg'
import aboutImg2 from '../assets/images/about-tour-1.jpg'
import aboutImg3 from '../assets/images/about-tour.jpg'
import aboutVideo from '../assets/images/Ha Long Bay.mp4'

const About = () => {
  return (
    <>
      <CommonSection title="About Us" />

      <section>
        <Container>
          <Row>
            <Col lg='6' className='about__border'>
              <Subtitle subtitle={"Highlight Tour"} className= 'about__title' />
              <div className="about">
                <div className="about__content d-flex justify-content-center">
                  <img src={aboutImg} alt="" />
                  <div className="content__info">
                    <h5>#Day 7 Night Hanoi-HaLong-Sapa travel tour</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laborum.</p>
                  </div>
                </div>
                <div className="about__content d-flex justify-content-center">
                  <img src={aboutImg2} alt="" />
                  <div className="content__info">
                    <h5>#Day 8 Night DaNang-HoiAn travel tour</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laborum.</p>
                  </div>
                </div>
                <div className="about__content d-flex justify-content-center">
                  <img src={aboutImg3} alt="" />
                  <div className="content__info">
                    <h5>#Day 9 Night NhaTrang-KhanhHoa travel tour</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laborum.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg = '6'className='about__border'>
              <div className="about__video">
                <video src={aboutVideo} alt="" controls className='w-100 mt-2' />
              </div>
            </Col>
            <h5 className='show__more'>Show More</h5>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About