import React, {FC} from "react";
import {productPropsType} from "./product-props-type";
import productModule from '../../layout/product.module.scss'
import {Mode} from "../../../../models/IProductFormMode";

export const Product: FC<productPropsType> = (props) => {
    return <div className={productModule.product}>
        <span className={productModule.id}>{props.product.id}</span>
        <img alt={props.product.image} src={props.product.image}/>
        <span>{props.product.title}</span>
        <span>{props.product.price} $</span>

        <div className={productModule.details_field}
             data-show={props.product.isShowDetail}>
            <span className={productModule.description}>{props.product.description}</span>
            <span>{props.product.category}</span>
            <div className={productModule.rating}>
                {props.product.rating !== undefined ? <>
                    <span>rate:
                    <span className={productModule.value}>
                        {props.product.rating.rate}
                    </span>
                </span>
                    <span>count:
                    <span className={productModule.value}>
                       {props.product.rating.count}
                    </span>
                </span>
                </> : ""}

            </div>
        </div>
        <button className={productModule.details}
                data-show={props.product.isShowDetail}
                onClick={() => props.changeLevelOfDetail(props.product.id)}>
            {props.product.isShowDetail ? "hide" : "show"}
        </button>
        <div className={productModule.buttons_container}>
            <button
                className={productModule.edit}
                onClick={() => {
                    props.setProductToForm(props.product)
                    props.toggleIsShowFormWithMode(true, Mode.Edit)
                }}>
                edit
            </button>
            <button
                className={productModule.delete}
                onClick={()=>props.deleteProduct(props.product.id)}>
                delete
            </button>
        </div>
    </div>
}