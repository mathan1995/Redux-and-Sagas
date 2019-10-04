import { combineReducers } from "redux";
import { DATA_AVAILABLE } from "./actions";
//Importing the actio types we defined in out actions

let dataState = { data: [] };

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            return { ...state, data: action.data };
        default:
            return state;
    }
};

//Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
    //,[ANOTHER REDUCER],
})



export default rootReducer;