import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//
//export var puppyID;
//export var puppyBreed;

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

  function selectedBreed(e, breedName, id){
    e.preventDefault();
    console.log("Breed param: ", breedName);
    console.log("ID param: ", id);
    window.puppyID = id;
    window.puppyBreed = breedName;
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
<div><center>Place Holder</center></div>
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



export default connect(mapStateToProps, mapDispatchToProps)(DepartmentListings);