import {IProductFormModel} from "../../../../models/IProductFormModel";
import {IProductFormMode, Mode} from "../../../../models/IProductFormMode";

export type productFromPropsType = productFromPropsStateType & productFromPropsDispatchType & {

}

export type productFromPropsStateType = {
    form: IProductFormModel
    formMode: IProductFormMode
}

export type productFromPropsDispatchType = {
    changeTitle: (title: string) => void
    changePrice: (price: number) => void
    changeDescription: (description: string) => void
    changeImageUrl: (url: string) => void
    changeCategory: (category: string) => void
    toggleIsShowFormWithMode : (isShowForm: boolean, mode: Mode) => void
    addProduct: (product: IProductFormModel) => void
    updateProduct: (product: IProductFormModel) => void

}
