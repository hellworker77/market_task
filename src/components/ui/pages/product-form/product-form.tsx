import React, {FC, FormEvent} from "react";
import {productFromPropsType} from "./product-form-props-type";
import formModule from '../../layout/productForm.module.scss'
import {Mode} from "../../../../models/IProductFormMode";

export const ProductForm: FC<productFromPropsType> = (props) => {
    const titleRef = React.createRef<HTMLInputElement>()
    const priceRef = React.createRef<HTMLInputElement>()
    const descriptionRef = React.createRef<HTMLInputElement>()
    const imageRef = React.createRef<HTMLInputElement>()
    const categoryRef = React.createRef<HTMLInputElement>()

    const onPriceChange = () => {
        let value = priceRef.current?.value ?? ""
        let number = parseFloat(value)

        if (!isNaN(number)) {
            props.changePrice(number)
        }
    }
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (props.formMode.mode === Mode.Add){
            props.addProduct(props.form)
        }
        else{
            props.updateProduct(props.form)
        }
    }

    return <div
        className={formModule.container}>
        <button
            className={formModule.close_button}
            onClick={() => props.toggleIsShowFormWithMode(false, Mode.Add)}>+
        </button>
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='title'
                value={props.form.title}
                ref={titleRef}
                onChange={() => props.changeTitle(titleRef.current?.value ?? props.form.title)}/>

            <input
                type="text"
                placeholder='price'
                value={props.form.price}
                ref={priceRef}
                onChange={onPriceChange}/>

            <input
                type="text"
                placeholder='description'
                value={props.form.description}
                ref={descriptionRef}
                onChange={() => props.changeDescription(descriptionRef.current?.value ?? props.form.description)}/>

            <input
                type="text"
                placeholder='image'
                value={props.form.image}
                ref={imageRef}
                onChange={() => props.changeImageUrl(imageRef.current?.value ?? props.form.image)}/>

            <input
                type="text"
                placeholder='category'
                value={props.form.category}
                ref={categoryRef}
                onChange={() => props.changeCategory(categoryRef.current?.value ?? props.form.category)}/>

            <input
                type="submit"
                value={`${props.formMode.mode === Mode.Add ? "add" : "edit"}`}/>
        </form>
    </div>
}