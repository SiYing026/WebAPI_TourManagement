import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from "reactstrap"

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesDate =[
{
  imgUrl: weatherImg,
  title: "Weather News",
  desc: " Information and updates about current and forecasted weather conditions in specific regions or locations ",
},

{
  imgUrl: guideImg,
  title: "Tour News",
  desc: "News about popular travel destinations, including updates on attractions, events, and travel advisories for tourists.",
},

{
  imgUrl: customizationImg,
  title: 'Images',
  desc: "Visual journalism is an essential aspect of modern media, and news outlets often use images to enhance their storytelling and provide a more comprehensive understanding of the events they cover.",
  },
];

const ServiceList = () => {
  return (
  <>
  {servicesDate.map((item,index)=> (
      <Col lg="3" key={index}>
        <ServiceCard item={item} />
      </Col>
  ))}

  </>
  );
};

export default ServiceList
