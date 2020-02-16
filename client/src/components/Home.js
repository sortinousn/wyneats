import React, {Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel'

function Home() {

    return (
      <Fragment>
        <Router>
          <div className="Home">
            <nav class="locations">
            <ul>
              <li>
                <Link to="/">--------</Link>
              </li>
              <li>
                <Link to="/myeats">Myeats</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contacts">Contact</Link>
              </li>
            </ul>
        </nav>
        </div>
        <Switch>
            <Route path="/"/>
            <Route path="/Myeats"/>
            <Route path="/About"/>
            <Route path="/Contact"/>
        </Switch>
      </Router>
      <Carousel>
        <Carousel.Item>
          <img
            className="http://placekitten.com/g/200/300"
            src=""
            alt=""
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        
        
        <Carousel.Item>
          <img
            className="http://placekitten.com/g/200/300"
            src=""
            alt=""
          />
        <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          
          <img
            className="http://placekitten.com/g/200/300"
            src=""
            alt=""
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
      <button type="button">Lets Eat</button>
    </Fragment>
  )

}  

export default Home