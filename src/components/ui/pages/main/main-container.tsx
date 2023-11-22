import {connect} from "react-redux";
import {Main} from "./main";
import {mainPropsDispatchType, mainPropsStateType} from "./main-props-type";
import {appStateType} from "../../../../store/root-reducer";
import {compose} from "redux";
import {getProductsWithLimitThunkCreator, ProductThunkAction} from "../../../../store/reducers/product-reducer/thunks";
import {
    productActionTypes,
    toggleIsShowFormWithModeActionCreate
} from "../../../../store/reducers/product-reducer/actions";
import {Dispatch} from "react";
import {Mode} from "../../../../models/IProductFormMode";
import {ThunkDispatch} from "redux-thunk";

let mapStateToProps = (state: appStateType): mainPropsStateType => {
    return {
        products: state.productReducer.products,
        isFetching: state.productReducer.isFetching,
        isShowForm: state.productReducer.isShowForm
    }
}

let mapDispatchToProps = (dispatch: ThunkDispatch<appStateType, null, productActionTypes>) : mainPropsDispatchType => {
    return {
        getProductsWithLimit(limit: number): void {
            dispatch(getProductsWithLimitThunkCreator(limit))
        },
        toggleIsShowFormWithMode(isShowForm: boolean, mode: Mode): void {
            dispatch(toggleIsShowFormWithModeActionCreate(isShowForm, mode))
        }
    }
}

const container = connect(mapStateToProps, mapDispatchToProps)(Main);
export default container;