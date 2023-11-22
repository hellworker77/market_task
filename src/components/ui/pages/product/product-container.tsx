import {connect} from "react-redux";
import {Product} from "./product";
import {
    productPropsDispatchType,
    productPropsStateType
} from "./product-props-type";
import {appStateType} from "../../../../store/root-reducer";
import {Dispatch} from "react";
import {
    changeLevelOfDetailActionCreate,
    productActionTypes, setProductToFormActionCreate,
    toggleIsShowFormWithModeActionCreate
} from "../../../../store/reducers/product-reducer/actions";
import {IProductFormModel} from "../../../../models/IProductFormModel";
import {Mode} from "../../../../models/IProductFormMode";
import {ThunkDispatch} from "redux-thunk";
import {deleteProductThunkCreator} from "../../../../store/reducers/product-reducer/thunks";

let mapStateToProps = (state : appStateType) : productPropsStateType => {
    return {

    }
}

let mapDispatchToProps = (dispatch: ThunkDispatch<appStateType, null, productActionTypes>): productPropsDispatchType => {
    return{
        deleteProduct(id: number): void {
            dispatch(deleteProductThunkCreator(id))
        },
        setProductToForm(product: IProductFormModel): void {
            dispatch(setProductToFormActionCreate(product))
        },
        toggleIsShowFormWithMode(isShowForm: boolean, mode: Mode): void {
            dispatch(toggleIsShowFormWithModeActionCreate(isShowForm, mode))
        },
        changeLevelOfDetail(id: number): void {
            dispatch(changeLevelOfDetailActionCreate(id))
        }
    }
}

const container = connect(mapStateToProps, mapDispatchToProps)(Product);
export default container;