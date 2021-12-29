import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class WeeklyAds extends Component {

    render() {
        return (
        <>
        <div>
        <center><h1>Weekly Circular</h1></center>
        </div>
        <center><a href={"/"}>Return to Main Menu</a></center>
        <br/>
        <hr/><br/>
        <span id="instructions">(Hover, then click, your mouse over the left or right edges of the screen to go to the next page.)</span>
            <br/><br/>
            <Carousel>
                <div>
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/CircularPics/backpack.jpg`} alt="Tools" />
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/BarCodes/barCode1.jpg`} alt="Tools" />
                    <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. </section>
                    <br />
                </div>
                <div>
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/CircularPics/carMat.jpg`} alt="Tools" />
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/BarCodes/barCode2.jpg`} alt="Tools" /><br/>
                    <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. </section>
                    <br />
                </div>
                <div>
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/CircularPics/dogBackpack.jpg`} alt="Tools" />
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/BarCodes/barCode3.jpg`} alt="Tools" /><br/>
                    <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. </section>
                    <br />
                </div>
                <div>
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/CircularPics/Drywall.jpg`} alt="Tools" />
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/BarCodes/barCode4.jpg`} alt="Tools" />
                    <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. </section>                    <br />
                </div>
                <div>
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/CircularPics/ductTape.jpg`} alt="Tools" />
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/BarCodes/barCode5.jpg`} alt="Tools" /><br/>
                    <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. </section>
                </div>
                <div>
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/CircularPics/Fence.jpg`} alt="Tools" />
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/BarCodes/barCode6.jpg`} alt="Tools" /><br/>
                    <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. </section>
                </div>
                <div>
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/CircularPics/folders.jpg`} alt="Tools" />
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/BarCodes/barCode7.jpg`} alt="Tools" />
                    <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. </section>
                    <br />
                </div>
                <div>
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/CircularPics/leafBlower.jpg`} alt="Tools" />
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/BarCodes/barCode8.jpg`} alt="Tools" /><br/>
                    <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. </section>
                </div>
                <div>
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/CircularPics/paint.jpg`} alt="Tools" />
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/BarCodes/barCode9.jpg`} alt="Tools" /><br/>
                    <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. </section>
                </div>
                <div>
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/CircularPics/pencils.jpg`} alt="Tools" />
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/BarCodes/barCode10.jpg`} alt="Tools" />
                    <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. </section>
                    <br />
                </div>
                <div>
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/CircularPics/spackling.jpg`} alt="Tools" />
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/BarCodes/barCode11.jpg`} alt="Tools" /><br/>
                    <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. </section>
                </div>
                <div>
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/CircularPics/vacuum.jpg`} alt="Tools" />
                    <img id="mainImage2" src={`${process.env.PUBLIC_URL}/BarCodes/barCode12.jpg`} alt="Tools" /><br/>
                    <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. </section>
                </div>

            </Carousel>
            </>
        );
    }
};

export default WeeklyAds;