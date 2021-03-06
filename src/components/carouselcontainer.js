import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Carousel} from 'react-bootstrap'
import { Button } from 'react-bootstrap'



function CarouselContainer() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='../images/01.jpg'
            alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button variant='light'>Go to profiles</Button>
          </Carousel.Caption>
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src='../images/02.jpg'
            alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button variant='light'>Go to profiles</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='../images/03.jpg'
            alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <Button variant='light'>Go to profiles</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  

    </>
  )
}

export default CarouselContainer
