import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function WeeklyAds() {

const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

useEffect(() => {
    let secTimer = setInterval( () => {
      setCurrentDate(new Date().toLocaleString())
    },1000)

    return () => clearInterval(secTimer);
}, []);
return (
    <>
    <div>
    <center><h1>The Circular</h1></center>
    </div>
    <center><a href={"/"} id="returnHomeLink">Return to Main Menu</a></center>
    <br/>
    <center><span id="info1">Listed prices available for online purchases</span></center>
    <hr/><br/>
	<div style={{ display: 'block', height: 500, width: 500, padding: 30 }}>
	<h3>{currentDate}</h3>
	<h4>This Week&#39;s Circular Specials</h4>
	<Carousel>
		<Carousel.Item interval={2500}>
		<img

			className="carouselPics"
src={`${process.env.PUBLIC_URL}/CircularPics/backpack.jpg`}
			alt="Circular"
		/>
		<img
            className="carouselPics2"
src={`${process.env.PUBLIC_URL}/BarCodes/barCode1.jpg`}
            alt="Circular"
        />
		<Carousel.Caption>
			<h3 className="carouselText">Backpack</h3>
			<p className="carouselText">$75.99</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={2500}>
		<img

			className="carouselPics"
src={`${process.env.PUBLIC_URL}/BarCodes/barCode1.jpg`}
			alt="Circular"
		/>
		<Carousel.Caption>
			<h3 className="carouselText">Tool Box</h3>
			<p className="carouselText">Great Prices Every Day</p>
		</Carousel.Caption>
		</Carousel.Item>
			<Carousel.Item interval={2500}>
        		<img

        			id="carouselPics"
        src={`${process.env.PUBLIC_URL}/CircularPics/carMat.jpg`}
        			alt="Circular"
        		/>
        		<img
                    className="carouselPics2"
        src={`${process.env.PUBLIC_URL}/BarCodes/barCode2.jpg`}
                    alt="Circular"
                /><br/><br/><br/>
        		<Carousel.Caption>
        			<h3 className="carouselText">Car Mats</h3>
        			<p className="carouselText">$50.37</p>
        		</Carousel.Caption>
        		</Carousel.Item>
        <Carousel.Item interval={2500}>
            <img

                className="carouselPics"
    src={`${process.env.PUBLIC_URL}/CircularPics/dogBackpack.jpg`}
                alt="Circular"
            />
    <img
            className="carouselPics2"
src={`${process.env.PUBLIC_URL}/BarCodes/barCode3.jpg`}
            alt="Circular"
            />
            <Carousel.Caption>
                <h3 className="carouselText">Dog Backpack</h3>
                <p className="carouselText">$29.99</p>
            </Carousel.Caption>
            </Carousel.Item>
 <Carousel.Item interval={2500}>
             <img

                 className="carouselPics"
     src={`${process.env.PUBLIC_URL}/CircularPics/Drywall.jpg`}
                 alt="Circular"
             />
             <img
                         className="carouselPics2"
             src={`${process.env.PUBLIC_URL}/BarCodes/barCode5.jpg`}
                         alt="Circular"
                     /><br/><br/><br/>
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
              <img
                          className="carouselPics2"
              src={`${process.env.PUBLIC_URL}/BarCodes/barCode6.jpg`}
                          alt="Circular"
                      /> <br/><br/><br/>
              <Carousel.Caption>
                  <h3 className="carouselText">DuctTape</h3>
                  <p className="carouselText">$1.39</p>
              </Carousel.Caption>
              </Carousel.Item>
  <Carousel.Item interval={2500}>
               <img

                   id="carouselPics"
       src={`${process.env.PUBLIC_URL}/CircularPics/Fence.jpg`}
                alt="Circular"
               />
               <img
                           className="carouselPics2"
               src={`${process.env.PUBLIC_URL}/BarCodes/barCode7.jpg`}
                           alt="Circular"
                       />
               <Carousel.Caption>
                   <h3 className="carouselText">Fence</h3>
                   <p className="carouselText">$9.25 per yard</p>
               </Carousel.Caption>
               </Carousel.Item>
<Carousel.Item interval={5000}>
               <img

                   id="carouselPics"
       src={`${process.env.PUBLIC_URL}/CircularPics/folders.jpg`}
                alt="Circular"
               />
               <img
                           className="carouselPics2"
               src={`${process.env.PUBLIC_URL}/BarCodes/barCode8.jpg`}
                           alt="Circular"
                       /><br/><br/><br/>
               <Carousel.Caption>
                   <h3 className="carouselText">folders</h3>
                   <p className="carouselText">$1.25 per pack</p>
               </Carousel.Caption>
               </Carousel.Item>
<Carousel.Item interval={2500}>
               <img

                   id="carouselPics"
       src={`${process.env.PUBLIC_URL}/CircularPics/leafBlower.jpg`}
                alt="Circular"
               />
               <img
                           className="carouselPics2"
               src={`${process.env.PUBLIC_URL}/BarCodes/barCode9.jpg`}
                           alt="Circular"
                       /><br/><br/><br/>
               <Carousel.Caption>
                   <h3 className="carouselText">leaf Blowers</h3>
                   <p className="carouselText">$69.99</p>
               </Carousel.Caption>
               </Carousel.Item>
<Carousel.Item interval={2500}>
               <img

                   id="carouselPics"
       src={`${process.env.PUBLIC_URL}/CircularPics/paint.jpg`}
                alt="Circular"
               />
               <img
                           className="carouselPics2"
               src={`${process.env.PUBLIC_URL}/BarCodes/barCode9.jpg`}
                           alt="Circular"
                       />
               <Carousel.Caption>
                   <h3 className="carouselText">paint</h3>
                   <p className="carouselText">$14.00 per can</p>
               </Carousel.Caption>
               </Carousel.Item>
<Carousel.Item interval={2500}>
               <img

                   id="carouselPics"
       src={`${process.env.PUBLIC_URL}/CircularPics/pencils.jpg`}
                alt="Circular"
               />
               <img
                           className="carouselPics2"
               src={`${process.env.PUBLIC_URL}/BarCodes/barCode10.jpg`}
                           alt="Circular"
                       /> <br/><br/><br/>
               <Carousel.Caption>
                   <h3 className="carouselText">pencils</h3>
                   <p className="carouselText">$1.25 per pack</p>
               </Carousel.Caption>
               </Carousel.Item>
<Carousel.Item interval={2500}>
               <img

                   id="carouselPics"
       src={`${process.env.PUBLIC_URL}/CircularPics/spackling.jpg`}
                alt="Circular"
               />
               <img
                           className="carouselPics2"
               src={`${process.env.PUBLIC_URL}/BarCodes/barCode11.jpg`}
                           alt="Circular"
                       /> <br/><br/><br/>
               <Carousel.Caption>
                   <h3 className="carouselText">spackling</h3>
                   <p className="carouselText">$13.91</p>
               </Carousel.Caption>
               </Carousel.Item>
<Carousel.Item interval={2500}>
               <img

                   id="carouselPics"
       src={`${process.env.PUBLIC_URL}/CircularPics/vacuum.jpg`}
                alt="Circular"
               />
               <img
                           className="carouselPics2"
               src={`${process.env.PUBLIC_URL}/BarCodes/barCode12.jpg`}
                           alt="Circular"
                       /> <br/><br/><br/>
               <Carousel.Caption>
                   <h3 className="carouselText">Vacuum</h3>
                   <p className="carouselText">$75.21</p>
               </Carousel.Caption>
               </Carousel.Item>
	</Carousel>
	</div>
	<div id="carouselBlog">Words next to carousel. Something about great deals each week!</div>
	</>
);
}
