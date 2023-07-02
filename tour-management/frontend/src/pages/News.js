import React, {useState,useEffect} from 'react';
import axios from 'axios';
import '../styles/tour.css'
import {Container , Row}from "reactstrap"

function News() {
    const [news, setNews] = useState([])
    useEffect(()=>{
        axios.get("https://newsapi.org/v2/everything?q=Vacation&apiKey=63457778485f46269427c30a00a055ea")
        .then((res)=>{
          console.log(res.data.articles);
          setNews(res.data.articles)
        })
      },[])

  return (
    <section className='pt-0'>
      <Container>
      <Row>
        {
          news.map((val)=>{
            return (
              <div className="col my-3" >
                <div className="card" style={{ width: "18rem", height: "40rem" }}>
                  <img src={val.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title" >{val.title}</h5>
                    <p className="card-text">
                      {val.description}
                    </p>
                    <br/>
                    <p className="card-text-1" ><p><b style={{ color: "#faa935"}} >Date Created:</b></p>
                      {val.publishedAt}
                    </p>
                    <p className="card-url">
                      <a href={val.url} >Link</a>
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

export default News

