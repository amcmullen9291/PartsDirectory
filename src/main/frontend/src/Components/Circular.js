import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Circular() {
return (
    <>
    <div>
    <center><h1>ToolBox</h1></center>
    </div>
    <center><a href={"/"}>Return to Main Menu</a></center>
    <br/>
    <hr/><br/>
	<div style={{ display: 'block', height: 500, width: 700, padding: 30 }}>
	<h4>Last Week&#39;s Circular Items</h4>
	<h3>12/26/2021</h3>
	<Carousel>
		<Carousel.Item interval={5000}>
		<img

			id="carouselPics"
src={`${process.env.PUBLIC_URL}/CircularPics/backpack.jpg`}
			alt="Circular"
		/>
		<Carousel.Caption>
			<h3 className="carouselText">Backpack</h3>
			<p className="carouselText">$75.99</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={2500}>
		<img

			id="carouselPics"
src={`${process.env.PUBLIC_URL}/BarCodes/barCode1.jpg`}
			alt="Circular"
		/>
		<Carousel.Caption>
			<h3 className="carouselText">Tool Box</h3>
			<p className="carouselText">Great Prices Every Day</p>
		</Carousel.Caption>
		</Carousel.Item>
			<Carousel.Item interval={5000}>
        		<img

        			id="carouselPics"
        src={`${process.env.PUBLIC_URL}/CircularPics/carMat.jpg`}
        			alt="Circular"
        		/>
        		<Carousel.Caption>
        			<h3 className="carouselText">Car Mats</h3>
        			<p className="carouselText">$50.37</p>
        		</Carousel.Caption>
        		</Carousel.Item>
        <Carousel.Item interval={5000}>
            <img

                id="carouselPics"
    src={`${process.env.PUBLIC_URL}/CircularPics/dogBackpack.jpg`}
                alt="Circular"
            />
            <Carousel.Caption>
                <h3 className="carouselText">Dog Backpack</h3>
                <p className="carouselText">$29.99</p>
            </Carousel.Caption>
            </Carousel.Item>
 <Carousel.Item interval={5000}>
             <img

                 id="carouselPics"
     src={`${process.env.PUBLIC_URL}/CircularPics/Drywall.jpg`}
                 alt="Circular"
             />
             <Carousel.Caption>
                 <h3 className="carouselText">Drywall</h3>
                 <p className="carouselText">$7 per foot</p>
             </Carousel.Caption>
             </Carousel.Item>
 <Carousel.Item interval={5000}>
              <img

                  id="carouselPics"
      src={`${process.env.PUBLIC_URL}/CircularPics/ductTape.jpg`}
                  alt="Circular"
              />
              <Carousel.Caption>
                  <h3 className="carouselText">DuctTape</h3>
                  <p className="carouselText">$1.39</p>
              </Carousel.Caption>
              </Carousel.Item>
  <Carousel.Item interval={5000}>
               <img

                   id="carouselPics"
       src={`${process.env.PUBLIC_URL}/CircularPics/Fence.jpg`}
               />
               <Carousel.Caption>
                   <h3 className="carouselText">Fence</h3>
                   <p className="carouselText">$9.25 per yard</p>
               </Carousel.Caption>
               </Carousel.Item>
	</Carousel>
	</div>
	<div id="carouselBlog">Words next to carousel. Something about great deals each week!</div>
	</>
);
}
