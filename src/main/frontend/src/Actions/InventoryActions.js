import { ActionTypes } from '../Constants/Action.type';

export const setInventory = (Inventory) => {
    return {
        type: ActionTypes.SET_INVENTORY,
        payload: Inventory
    }
}

export const selectedInventory = (Department) => {
    return {
        type: ActionTypes.SELECTED_INVENTORY,
        payload: Department
    }
}

export const filteredInventoryList = (filter) => {
    return {
        type: ActionTypes.FILTERED_INVENTORY_LIST,
        payload: filter
    }
}