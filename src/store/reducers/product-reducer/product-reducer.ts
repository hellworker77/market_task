import {initialState} from "./initial-state";
import {
    ADD_PRODUCT,
    CHANGE_FORM_CATEGORY,
    CHANGE_FORM_DESCRIPTION,
    CHANGE_FORM_IMAGE,
    CHANGE_FORM_PRICE,
    CHANGE_FORM_TITLE,
    CHANGE_LEVEL_OF_DETAIL,
    productActionTypes,
    REMOVE_PRODUCT,
    REPLACE_PRODUCT,
    SET_PRODUCT_TO_FORM,
    SET_PRODUCTS,
    TOGGLE_IS_FETCHING,
    TOGGLE_IS_SHOW_FORM_WITH_MODE
} from "./actions";

export const productReducer = (state = initialState, action: productActionTypes) => {
    switch (action.type) {
        case CHANGE_LEVEL_OF_DETAIL:
            return {
                ...state,
                products: [...state.products.map(x => {
                    if (x.id === action.id) {
                        x = {...x, isShowDetail: !x.isShowDetail}
                    }
                    return x
                })]
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_SHOW_FORM_WITH_MODE:
            if (!action.isShowForm) {
                state.productForm =
                    {
                        ...state.productForm,
                        title: "",
                        category: "",
                        description: "",
                        price: 0,
                        image: ""
                    }
            }
            return {
                ...state,
                isShowForm: action.isShowForm,
                productFormMode: {...state.productFormMode, mode: action.mode}
            }
        case SET_PRODUCTS:
            return {
                ...state,
                products: [...action.products]
            }
        case CHANGE_FORM_TITLE:
            return {
                ...state,
                productForm: {
                    ...state.productForm,
                    title: action.title
                }
            }
        case CHANGE_FORM_CATEGORY:
            return {
                ...state,
                productForm: {
                    ...state.productForm,
                    category: action.category
                }
            }
        case CHANGE_FORM_DESCRIPTION:
            return {
                ...state,
                productForm: {
                    ...state.productForm,
                    description: action.description
                }
            }
        case CHANGE_FORM_PRICE :
            return {
                ...state,
                productForm: {
                    ...state.productForm,
                    price: action.price
                }
            }
        case CHANGE_FORM_IMAGE:
            return {
                ...state,
                productForm: {
                    ...state.productForm,
                    image: action.image
                }
            }
        case SET_PRODUCT_TO_FORM:
            return {
                ...state,
                productForm: {...action.product}
            }
        case ADD_PRODUCT:
            state.products.push(action.product)
            return {
                ...state,
                products: [...state.products]
            }
        case REPLACE_PRODUCT:
            return {
                ...state,
                products: [...state.products.map(x => {
                    if (x.id === action.product.id) {
                        x = {...action.product}
                    }
                    return x
                })]
            }
        case REMOVE_PRODUCT:
            return {
                ...state,
                products:  [...state.products.filter(x => x.id !== action.id)]
            }
        default:
            return {
                ...state
            }
    }
}
