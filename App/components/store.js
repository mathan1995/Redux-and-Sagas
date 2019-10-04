import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


import reducers from "./reducers"; //Importing the reducer

//Connect Our store to the reducers

export default createStore(reducers, applyMiddleware(thunk))