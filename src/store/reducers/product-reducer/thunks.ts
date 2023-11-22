import {
    addProductActionCreate,
    productActionTypes, removeProductActionCreate,
    replaceProductActionCreate,
    setProductsActionCreate,
    toggleIsFetchingActionCreate,
    toggleIsShowFormWithModeActionCreate
} from "./actions";
import axios from "axios";
import {IProduct} from "../../../models/IProduct";
import {appStateType} from "../../root-reducer";
import {ThunkAction} from "redux-thunk";
import {IProductFormModel} from "../../../models/IProductFormModel";
import {Mode} from "../../../models/IProductFormMode";

export type ProductThunkAction = ThunkAction<void, appStateType, unknown, productActionTypes>
export const getProductsWithLimitThunkCreator = (limit: number): ProductThunkAction =>
    (dispatch, getState) => {
        dispatch(toggleIsFetchingActionCreate(true))

        axios.get<IProduct[]>(`https://fakestoreapi.com/products?limit=${limit}`)
            .then((response) => {
                setTimeout(() => {
                    dispatch(setProductsActionCreate(response.data))
                    dispatch(toggleIsFetchingActionCreate(false))
                }, 5000)
            })
    }
export const addProductThunkCreator = (product: IProductFormModel): ProductThunkAction =>
    (dispatch, getState) => {
        axios.post<IProduct>('https://fakestoreapi.com/products', product).then(response => {
                dispatch(addProductActionCreate(response.data))
                dispatch(toggleIsShowFormWithModeActionCreate(false, Mode.None))
            }
        )
    }
export const deleteProductThunkCreator = (id: number): ProductThunkAction =>
    (dispatch, getState) => {
        axios.delete<IProduct>(`https://fakestoreapi.com/products/${id}`).then(response => {
            dispatch(removeProductActionCreate(response.data.id))
            dispatch(toggleIsShowFormWithModeActionCreate(false, Mode.None))
        })
    }
export const updateProductThunkCreator = (product: IProductFormModel): ProductThunkAction =>
    (dispatch, getState) => {
        axios.put<IProduct>(`https://fakestoreapi.com/products/${product.id}`, product).then(response => {
                dispatch(replaceProductActionCreate(response.data))
                dispatch(toggleIsShowFormWithModeActionCreate(false, Mode.None))
            }
        )
    }

