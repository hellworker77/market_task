import {combineReducers} from "redux";
import {productReducer} from "./reducers/product-reducer/product-reducer";

export const rootReducer = combineReducers({
    productReducer: productReducer
})

type rootReducerType = typeof rootReducer

export type appStateType = ReturnType<rootReducerType>
