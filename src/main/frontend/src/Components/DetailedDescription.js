import { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { selectedInventory } from '../Actions/InventoryActions';
import { useParams } from "react-router-dom";

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
}


return (
<>
  <div>
    <center><h1>The Circular</h1></center>
    </div>
    <center><a href={"/Parts/Departments"} id="returnHomeLink">Return to Full Listings</a></center>
    <br/>
    <hr/>
</>
)
}

const mapStateToProps = (state) => {
    return {
      SelectedInventory: state.SelectedInventory
    }

  }



export default connect(mapStateToProps, null)(DetailedDescription);