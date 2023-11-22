import {IProduct} from "../../../models/IProduct";
import {Mode} from "../../../models/IProductFormMode";
import {IProductFormModel} from "../../../models/IProductFormModel";

export const CHANGE_LEVEL_OF_DETAIL = "CHANGE_LEVEL_OF_DETAIL"
export type changeLevelOfDetailActionType = {
    type: typeof CHANGE_LEVEL_OF_DETAIL
    id: number
}
export const changeLevelOfDetailActionCreate = (id: number): changeLevelOfDetailActionType => ({
    type: CHANGE_LEVEL_OF_DETAIL, id: id
})

export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
export type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetchingActionCreate = (isFetching: boolean): toggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING, isFetching: isFetching
})

export const TOGGLE_IS_SHOW_FORM_WITH_MODE = "TOGGLE_IS_SHOW_FORM_WITH_MODE"
export type toggleIsShowFormWithModeActionType = {
    type: typeof TOGGLE_IS_SHOW_FORM_WITH_MODE
    isShowForm: boolean
    mode: Mode
}
export const toggleIsShowFormWithModeActionCreate = (isShowForm: boolean, mode: Mode): toggleIsShowFormWithModeActionType => ({
    type: TOGGLE_IS_SHOW_FORM_WITH_MODE, isShowForm: isShowForm, mode: mode
})

export const SET_PRODUCTS = "SET_PRODUCTS"
export type setProductsActionType = {
    type: typeof SET_PRODUCTS
    products: IProduct[]
}
export const setProductsActionCreate = (products: IProduct[]): setProductsActionType => ({
    type: SET_PRODUCTS, products: products
})

export const CHANGE_FORM_TITLE = "CHANGE_FORM_TITLE"
export type changeFormTitleActionType = {
    type: typeof CHANGE_FORM_TITLE
    title: string
}
export const changeFormTitleActionCreate = (title: string): changeFormTitleActionType => ({
    type: CHANGE_FORM_TITLE, title: title
})
export const CHANGE_FORM_PRICE = "CHANGE_FORM_PRICE"
export type changeFormPriceActionType = {
    type: typeof CHANGE_FORM_PRICE
    price: number
}
export const changeFormPriceCreate = (price: number): changeFormPriceActionType => ({
    type: CHANGE_FORM_PRICE, price: price
})
export const CHANGE_FORM_DESCRIPTION = "CHANGE_FORM_DESCRIPTION"
export type changeFormDescriptionActionType = {
    type: typeof CHANGE_FORM_DESCRIPTION
    description: string
}
export const changeFormDescriptionActionCreate = (description: string): changeFormDescriptionActionType => ({
    type: CHANGE_FORM_DESCRIPTION, description: description
})
export const CHANGE_FORM_IMAGE = "CHANGE_FORM_IMAGE"
export type changeFormImageActionType = {
    type: typeof CHANGE_FORM_IMAGE
    image: string
}
export const changeFormImageActionCreate = (image: string): changeFormImageActionType => ({
    type: CHANGE_FORM_IMAGE, image: image
})
export const CHANGE_FORM_CATEGORY = "CHANGE_FORM_CATEGORY"
export type changeFormCategoryActionType = {
    type: typeof CHANGE_FORM_CATEGORY
    category: string
}
export const changeFormCategoryActionCreate = (category: string): changeFormCategoryActionType => ({
    type: CHANGE_FORM_CATEGORY, category: category
})
export const SET_PRODUCT_TO_FORM = "SET_PRODUCT_TO_FORM"
export type setProductToFormActionType = {
    type: typeof SET_PRODUCT_TO_FORM,
    product: IProductFormModel
}
export const setProductToFormActionCreate = (product: IProductFormModel): setProductToFormActionType => ({
    type: SET_PRODUCT_TO_FORM, product: product
})
export const ADD_PRODUCT = "ADD_PRODUCT"
export type addProductActionType = {
    type: typeof ADD_PRODUCT
    product: IProduct
}
export const addProductActionCreate = (product: IProduct): addProductActionType => ({
    type: ADD_PRODUCT, product: product
})
export const REPLACE_PRODUCT = "REPLACE_PRODUCT"
export type replaceProductActionType = {
    type: typeof REPLACE_PRODUCT
    product: IProduct
}
export const replaceProductActionCreate = (product: IProduct): replaceProductActionType => ({
    type: REPLACE_PRODUCT, product: product
})
export const REMOVE_PRODUCT = "REMOVE_PRODUCT"
export type removeProductActionType = {
    type: typeof REMOVE_PRODUCT
    id: number
}
export const removeProductActionCreate = (id: number): removeProductActionType => ({
    type: REMOVE_PRODUCT, id: id
})
export type productActionTypes =
    changeLevelOfDetailActionType
    | toggleIsFetchingActionType
    | toggleIsShowFormWithModeActionType
    | setProductsActionType
    | changeFormTitleActionType
    | changeFormPriceActionType
    | changeFormDescriptionActionType
    | changeFormCategoryActionType
    | changeFormImageActionType
    | setProductToFormActionType
    | addProductActionType
    | replaceProductActionType
    | removeProductActionType