import React, {FC, useEffect} from "react";
import {mainPropsType} from "./main-props-type";
import Product from "../product/product-container";
import wrapping from '../../layout/wrapping.module.scss'
import ProductForm from "../product-form/product-form-container";
import {Mode} from "../../../../models/IProductFormMode";


export const Main: FC<mainPropsType> = (props) => {
    useEffect(() => {
        props.getProductsWithLimit(100)
    }, [])

    return <div className={wrapping.container}>
        {props.isFetching ?
            <div className={wrapping.fetching}>fetching data ... please wait</div> :
            <>{props.products.map(x => <Product key={x.id} product={x}/>)}</>}
        {props.isShowForm ? <ProductForm/> : ""}
        <button className={wrapping.add}
                onClick={() => props.toggleIsShowFormWithMode(true, Mode.Add)}>+
        </button>
    </div>
}
