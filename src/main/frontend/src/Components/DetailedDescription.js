import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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


  function selectedDepartment(e, departmentName, id){
    e.preventDefault();
    console.log("Department: ", departmentName);
    window.department = departmentName;
  }

  function resetList(e){
          e.preventDefault();
          let button = document.getElementById("resetButton");
          window.location.reload();
          button.style.visibility = "hidden";
          console.log("page resetting");
        }

return (
<>
   <div>
    <center><h1>Toolbox</h1></center>
    </div>
    <center><a href={"/"} id="returnHomeLink">Return to Main Menu</a></center>
    <br/>
    <hr/><br/>
<div id="DetailsPage">
<main id="DetailsMain">
			<div className="innertube">
			<div id="DetailsPictureArea">
			<center>Picture will go here.</center>
			</div>
			</div>
		</main>

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
</div>
</>
)
}

const mapStateToProps = (state) => {
    return {
      Inventory: state.Inventory
    }

  }

   const mapDispatchToProps = (dispatch) => {
     return{
       Inventory: (inventory) => { dispatch({type: 'SELECTED_INVENTORY', inventory})}
     }
   }



export default connect(mapStateToProps, mapDispatchToProps)(DetailedDescription);