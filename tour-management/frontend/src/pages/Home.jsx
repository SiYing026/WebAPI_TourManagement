import React from 'react'
import '../styles/home.css'
import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import experienceImg from '../assets/images/experience.png'

import worldImg from '../assets/images/world.png'
import Subtitle from './../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from "../services/ServiceList";

import FeaturedTourList from '../components/Featured-tours/FeaturesTourList';



const Home = () => {
  return <>

  {/* ========== hero section start =========== */}
  <section>
    <Container>
      <Row>
      <Col lg ='6'>
        <div className="hero_content">
          <div className='hero_subtitle d-flex align-items-center'>
            <Subtitle subtitle={'Know Before You Go'} />
            <img src={worldImg} alt=''/>
          </div>
          <h1>Traveling opens the door to creating<span 
          className='highlight'>memories
            </span>
          </h1>
            <p>Travel around to experience the remarkable treasures and the hidden gems in International. Each state offers a unique International experience for all.</p>
        </div>
      </Col>

      <Col lg='2'>
        <div className="hero_img-box">
          <img src={heroImg} alt='' />
        </div>
      </Col>
      <Col lg='2'>
        <div className="hero_img-box mt-4">
          <video src={heroVideo} alt='' controls/>
        </div>
      </Col>
      <Col lg='2'>
        <div className="hero_img-box mt-5">
          <img src={heroImg02} alt='' />
        </div>
      </Col>

      <SearchBar/>
      </Row>
    </Container>
  </section>

   {/* ========== hero section start =========== */}
   <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className='services_subtitle'>What we serve</h5>
          <h2 className='services_title'>We offer our best services</h2>
        </Col>
        <ServiceList />
      </Row>
    </Container>
   </section>

    {/* ==========features tour section start =========== */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'}/>
            <h2 className='features_tour-title'>Our features tours</h2>
            </Col>
            <FeaturedTourList />
        </Row>
      </Container>
    </section>
     {/* ========== features tour section end =========== */}

     {/* ========== experience section start =========== */}
     <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience_content">
              <Subtitle subtitle={'Experience'}/>

              <h2>With our all experience <br/> we will serve you</h2>
              <p>
              TravelWorld, the world's largest travel guidance platform*, helps hundreds of millions of people each month** become better travelers, from planning to booking to taking a trip. Travelers across the globe use the TravelWorld site and app to discover where to stay, what to do and where to eat based on guidance from those who have been there before. With more than 1 billion reviews and opinions of nearly 8 million businesses, travelers turn to TravelWorld to find deals on accommodations, book experiences, reserve tables at delicious restaurants and discover great places nearby. As a travel guidance company available in 43 markets and 22 languages, TravelWorld makes planning easy no matter the trip type. The subsidiaries of TravelWorld, Inc. (Nasdaq: TRIP), own and operate a portfolio of travel media brands and businesses, operating under various websites and apps.
              </p>
            </div>

            <div className='counter_wrapper d-flex align-items-center gap-5'>
              <div className='counter_box'>
                <span>12k+</span>
                <h6>Successfull Trip</h6>
              </div>

              <div className='counter_box'>
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>

              <div className='counter_box'>
                <span>15</span>
                <h6>Years experiences</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience_img">
              <img src={experienceImg} alt=''/>
            </div>
          </Col>
        </Row>
      </Container>
     </section>
     {/* ========== experience section end =========== */}
  </>
};

export default Home
