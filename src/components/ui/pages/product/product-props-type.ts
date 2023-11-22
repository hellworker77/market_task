import {IProduct} from "../../../../models/IProduct";
import {IProductFormModel} from "../../../../models/IProductFormModel";
import {Mode} from "../../../../models/IProductFormMode";

export type productPropsType = productPropsStateType & productPropsDispatchType & {
    product: IProduct
}

export type productPropsStateType = {

}

export type productPropsDispatchType = {
    changeLevelOfDetail : (id: number) => void
    setProductToForm : (product: IProductFormModel) => void
    toggleIsShowFormWithMode : (isShowForm: boolean, mode: Mode) => void
    deleteProduct: (id: number) => void
}
