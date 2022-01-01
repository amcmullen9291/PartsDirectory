import { combineReducers } from 'redux';
import { InventoryReducer, SelectedInventoryReducer, FilteredList } from './inventoryReducer';


const RootReducer = combineReducers({
    Inventory: InventoryReducer,
    SelectedInventory: SelectedInventoryReducer,
    Department: FilteredList
});

export default RootReducer;