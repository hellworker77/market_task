import {IProduct} from "../../../../models/IProduct";
import {Mode} from "../../../../models/IProductFormMode";

export type mainPropsType = mainPropsStateType & mainPropsDispatchType & {
}

export type mainPropsStateType = {
    products: IProduct[]
    isFetching: boolean
    isShowForm: boolean
}

export type mainPropsDispatchType = {
    toggleIsShowFormWithMode : (isShowForm: boolean, mode: Mode) => void
    getProductsWithLimit: (limit: number) => void
}
