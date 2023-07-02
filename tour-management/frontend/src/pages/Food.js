import React, {useState,useEffect} from 'react';
import axios from 'axios';
import '../styles/tour.css'
import {Container , Row}from "reactstrap"

function Food() {
    const [foods, setFoods] = useState([])
    useEffect(()=>{
        axios.get("https://api.spoonacular.com/food/menuItems/search?&apiKey=2fa32502866540eba52a6cde31b0904f&query=pizza&number=28")
        .then((res)=>{
          console.log(res.data.menuItems);
          setFoods(res.data.menuItems)
        })
      },[])

  return (
    <Container>
      <Row>
      {
          foods.map((val)=>{
            return (
              <div className="col my-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={val.image} className="card-img-top" alt="..." height= "200px"/>
                  <div className="card-body">
                    <h5 className="card-title">{val.title}</h5>
                    <p className="card-text">
                      {val.restaurantChain}
                    </p>

                    <p className="card-text-1" style={{textTransform: "capitalize"}} ><p><b style={{ color: "#faa935"}} >Unit: </b>{val.servings.unit}</p></p>
                    
                    
                  </div>
                </div>
              </div>
            )
          })
        }
      </Row>
    </Container>
      
  )
}

export default Food
