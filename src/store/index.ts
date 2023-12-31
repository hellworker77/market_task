import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./root-reducer";
import thunkMiddleware from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))