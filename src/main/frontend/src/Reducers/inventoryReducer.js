import { ActionTypes } from '../Constants/Action.type';

const initialState = {
    Inventory: [],
};

export const InventoryReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_INVENTORY:
            return { ...state, Inventory: payload};
        default:
            return state
    }
};

export const SelectedInventoryReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_INVENTORY:
            return { ...state, Type: payload};
        default:
            return state;
    }
}

export const FilteredList = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.FILTERED_INVENTORY_LIST:
            return { ...state, Filter: payload};
        default:
            return state;
    }
}