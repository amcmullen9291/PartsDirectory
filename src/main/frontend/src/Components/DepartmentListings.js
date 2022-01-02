import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function DepartmentListings() {
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


  function resetList(e){
          e.preventDefault();
          let button = document.getElementById("resetButton");
          window.location.reload();
          button.style.visibility = "hidden";
          console.log("page resetting");
        }

        function sortByDepartment(e, departmentName){
        e.preventDefault()
        console.log("Chosen Dept: ", departmentName);
        }

return (
<>
   <div>
    <center><h1>Toolbox</h1></center>
    </div>
    <center><a href={"/"} id="returnHomeLink">Return to Main Menu</a></center>
    <br/>
        <center><span id="info1">Prices available in-store and online!</span></center>
    <hr/><br/>
<div>
<div class="dropdown">
      <button class="dropbtn" id="roundButton"> Sort Results by Department</button>
  <div class="dropdown-content" id="slide">
    <span onClick={(e) => {sortByDepartment(e, "Lumber")}} className="listShades">Lumber</span>
    <a href="#" onClick={(e) => {sortByDepartment(e, "Garden")}}>Garden</a>
    <span onClick={(e) => {sortByDepartment(e, "Bathrooms")}} className="listShades">Bathrooms</span>
    <a href="#" onClick={(e) => {sortByDepartment(e, "Kitchen")}}>Kitchen</a>
    <span href="#" onClick={(e) => {sortByDepartment(e, "Small Tools & Accessories")}} className="listShades">Small Tools & Accessories</span>
    <a href="#" onClick={(e) => {sortByDepartment(e, "Home")}}>Home</a>
    <span onClick={(e) => {sortByDepartment(e, "Paints")}} className="listShades">Paints</span>
  </div>
</div>
</div>
    {inventory && (
      <div><table id="inventoryTable">
        <thead>
        </thead>
        <tbody>
        {inventory.map((item, index) => (
          <div key={index}>
            <tr>
            <td><img src={`${process.env.PUBLIC_URL}/InventoryPics/${item.image}`} alt="Image1" /></td><td className="name">{item.partName}</td><td className="spacer"></td><td className="breed">({item.department})</td>
            </tr>
          </div>
        ))}
        </tbody>
</table>
        <center><span>Click on a group name to see filtered lists </span></center>
      </div>
    )}
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
       Inventory: (inventory) => { dispatch({type: 'SELECTED_INVENTORY', inventory})},
     }
   }



export default connect(mapStateToProps, mapDispatchToProps)(DepartmentListings);