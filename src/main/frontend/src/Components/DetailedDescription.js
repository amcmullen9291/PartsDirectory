import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

function DetailedDescription() {

  const [inventory, setInventory] = useState(null);
const INVENTORY_LIST_URL = "http://localhost:8080/parts/inventory";
  useEffect(() => {
    getInventory();

    async function getInventory() {
      const response = await fetch(INVENTORY_LIST_URL);
      const data = await response.json();
      setInventory(data) ;
      console.log(data);
    }
  }, []);

console.log("inventory list: ", inventory);

function blockade(e){
e.preventDefault();
console.log("Span is working");
}
return (
<>
    <div>
    <center><h1>The Circular</h1></center>
    </div>
    <center><a href={"/Parts/Departments"} id="returnHomeLink">Return to Full Listings</a></center>
    <br/>
    <hr/>
    <div><span><center><img

                                       className="carouselPics"
                           src={`${process.env.PUBLIC_URL}/InventoryPics/dogBackpack.jpg`}
                                       alt="Circular"
                                   /></center></span></div>
    <nav id="DetailsNav">
			<div className="innertube">

			<h3 id="DetailedInfoList">Item Name</h3>
			<ul>
				<li>"Department"</li>
				<li>"Aisle"</li>
				<li>"Manufacturer"</li>
				<li>"Part Number"</li>
				<li>"Price"</li>
			</ul>
			<br/>
			<li>Description:</li>
			<ul>
				<span>blah blah blah ablah blah blah</span>
			</ul>
			</div>
		</nav>
</>
)
}

const mapStateToProps = (state) => {
    return {
      Inventory: state.Inventory
    }

  }



export default connect(mapStateToProps, null)(DetailedDescription);