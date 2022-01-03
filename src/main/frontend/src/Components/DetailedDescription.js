import { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { selectedInventory } from '../Actions/InventoryActions';
import { Link, useParams } from "react-router-dom";

function DetailedDescription() {

    const params = useParams();
    const ID = params.id;

  const [item, setItem] = useState(null);
  const SelectedInventory = useSelector(state => state.SelectedInventory);
const INVENTORY_URL = "http://localhost:8080/parts/inventory/item/"+ ID;

const dispatch = useDispatch();

      useEffect(() => {
        if(ID && ID !== ""){getItemData()};

        async function getItemData() {
          const response = await fetch(INVENTORY_URL);
          const data = await response.json();
          setItem(data);
          dispatch(selectedInventory(data));
        }
      }, []);

if((SelectedInventory) && Object.keys(SelectedInventory).length > 0){
console.log("Store Data: ", SelectedInventory.Type[ID].department);
   const item = SelectedInventory.Type[params.id];
      const { id, partName, partNumber, department, aisleNumber, image, price, alt, manufacturer } = item;
       var ItemDetails = (
          <>
    <div><span><center><img
               className="carouselPics"
   src={`${process.env.PUBLIC_URL}/InventoryPics/${item.image}`}
               alt="Circular"
           /></center></span></div>
    <nav id="DetailsNav">
			<div className="innertube">
			<h4>{item.partNumber}</h4>
			<h3 id="DetailedInfoList">{item.partName}</h3>
			<ul>
				<li>{item.department} Department</li>
				<li> Located in Aisle {item.aisleNumber}</li>
				<li>Made by {manufacturer}</li>
				<li></li>
				<li>Price: ${item.price}</li>
			</ul>
			<br/>
			<li>Description:</li>
			<ul>
				<span>blah blah blah blah blah blah</span>
			</ul>
			</div>
		</nav>
          </>
        )
}


return (
<>
  <div>
    <center><h1>ToolBox</h1></center>
    </div>
    <center><a href={"/Parts/Departments"} id="returnHomeLink">Return to Full Listings</a></center>
    <br/>
    <hr/>
    {ItemDetails}
    <div id="recommendations">
    </div>
</>
)
}

const mapStateToProps = (state) => {
    return {
      SelectedInventory: state.SelectedInventory
    }

  }



export default connect(mapStateToProps, null)(DetailedDescription);