import {appStateType} from "../../../../store/root-reducer";
import {
    changeFormCategoryActionCreate,
    changeFormDescriptionActionCreate,
    changeFormImageActionCreate,
    changeFormPriceCreate,
    changeFormTitleActionCreate,
    productActionTypes,
    toggleIsShowFormWithModeActionCreate,
} from "../../../../store/reducers/product-reducer/actions";
import {connect} from "react-redux";
import {ProductForm} from "./product-form";
import {productFromPropsDispatchType, productFromPropsStateType} from "./product-form-props-type";
import {Mode} from "../../../../models/IProductFormMode";
import {ThunkDispatch} from "redux-thunk";
import {IProductFormModel} from "../../../../models/IProductFormModel";
import {addProductThunkCreator, updateProductThunkCreator} from "../../../../store/reducers/product-reducer/thunks";

let mapStateToProps = (state: appStateType): productFromPropsStateType => {
    return {
        form: state.productReducer.productForm,
        formMode: state.productReducer.productFormMode
    }
}

let mapDispatchToProps = (dispatch: ThunkDispatch<appStateType, null, productActionTypes>): productFromPropsDispatchType => {
    return {
        addProduct(product: IProductFormModel): void {
            dispatch(addProductThunkCreator(product))
        },
        updateProduct(product: IProductFormModel): void {
            dispatch(updateProductThunkCreator(product))
        },
        toggleIsShowFormWithMode(isShowForm: boolean, mode: Mode): void {
            dispatch(toggleIsShowFormWithModeActionCreate(isShowForm, mode))
        },
        changeCategory(category: string): void {
            dispatch(changeFormCategoryActionCreate(category))
        },
        changeDescription(description: string): void {
            dispatch(changeFormDescriptionActionCreate(description))
        },
        changeImageUrl(url: string): void {
            dispatch(changeFormImageActionCreate(url))
        },
        changePrice(price: number): void {
            dispatch(changeFormPriceCreate(price))
        },
        changeTitle(title: string): void {
            dispatch(changeFormTitleActionCreate(title))
        }
    }
}

const container = connect(mapStateToProps, mapDispatchToProps)(ProductForm);
export default container;