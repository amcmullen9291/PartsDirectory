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

  async function ReturnList(e) {
    e.preventDefault();

    document.getElementById("roundButton2").style.visibility = 'hidden';
    document.getElementById("roundButton").style.visibility = 'visible';
    const response = await fetch(INVENTORY_LIST_URL);
    const data = await response.json();
    setInventory(data) ;

  }


        function SortByDepartment(e, departmentName){
        e.preventDefault();
        console.log("Sort function working");
         document.getElementById("roundButton").style.visibility = 'hidden';
         document.getElementById("roundButton2").style.visibility = 'visible';
        console.log("Chosen Dept: ", departmentName);
         const newList = inventory.filter(item => item.department === departmentName);
         console.log("New List:", newList);
         setInventory(newList);
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
    <button onClick={(e) => {SortByDepartment(e, "Lumber")}} className="listShades">Lumber</button>
    <button onClick={(e) => {SortByDepartment(e, "Garden")}}>Garden</button>
    <button onClick={(e) => {SortByDepartment(e, "Bathrooms")}} className="listShades">Bathrooms</button>
    <button onClick={(e) => {SortByDepartment(e, "Kitchen")}}>Kitchen</button>
    <button onClick={(e) => {SortByDepartment(e, "SmallTools&Accessories")}} className="listShades">Small Tools & Accessories</button>
    <button onClick={(e) => {SortByDepartment(e, "Home")}}>Home</button>
    <button onClick={(e) => {SortByDepartment(e, "Paints")}} className="listShades">Paints</button>
  </div>
</div>
      <button class="dropbtn" id="roundButton2" onClick={(e) => {ReturnList(e)}}> Return Full List</button>

</div>
    {inventory && (
      <div><table id="inventoryTable">
        <thead>
        </thead>
        <tbody>
        {inventory.map((item, id) => (
          <div key={id}>
            <tr>
            <td><Link to={`/Parts/inventory/${item.department}/${item.id}/${item.partNumber}`}><img src={`${process.env.PUBLIC_URL}/InventoryPics/${item.image}`} alt="Image1" /></Link></td><td className="name">{item.partName}</td><td className="spacer"></td><td className="breed">({item.department})</td>
            </tr>
          </div>
        ))}
        </tbody>
</table>
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