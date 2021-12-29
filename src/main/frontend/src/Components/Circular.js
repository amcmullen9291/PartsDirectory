import React from 'react';
import { Carousel } from 'react-bootstrap';

function Circular(){
return (
    <>
<div>
<center><h1>Last Week&#39;s Circular</h1></center>
</div>
<center><a href={"/"}>Return to Main Menu</a></center>
<br/>
<hr/><br/>

 <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/BarCodes/barCode1.jpg`}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/BarCodes/barCode2.jpg`}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/BarCodes/barCode3.jpg`}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </>
    )
}

export default Circular;