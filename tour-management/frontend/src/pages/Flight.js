import React, {useState,useEffect} from 'react';
import axios from 'axios';
import '../styles/tour.css'
import {Container , Row}from "reactstrap"

function Flights() {
    const [flights, setFlights] = useState([])
    useEffect(()=>{
        axios.get("https://api.flightapi.io/onewaytrip/64a24cdaa12b580eaa69fea2/HEL/OUL/2023-07-20/1/0/0/Economy/USD")
        .then((res)=>{
          console.log(res.data.legs);
          setFlights(res.data.legs)
        })
      },[])

  return (
    <section className='pt-0'>
      <Container>
      <Row>
        {
          flights.map((val)=>{
            return (
              <div className="col my-3" >
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title" >{val.id}</h5>
                    <p className="card-text-1" ><p><b style={{ color: "#faa935"}} >{val.departureAirportCode} {'=>'} {val.arrivalAirportCode}</b></p>
                      
                    </p>
                    <br/>
                    <p className="card-text-1" ><p><b style={{ color: "#faa935"}} >Departure Time :</b> {val.departureTime}</p>
                      
                    </p>
                    <p className="card-text-1" ><p><b style={{ color: "#faa935"}} >Arrival Time :</b> {val.arrivalTime}</p>
                      
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Row>
      </Container>
    </section>
    

  )
}

export default Flights

