import React from 'react'
import { useRef } from 'react';

interface ShoppingListFormProps {
onAddItem : (product: string, quantity: number) => void;
}
const ShoppingListForm = ({onAddItem}: ShoppingListFormProps ): JSX.Element => {
const productInputRef = useRef<HTMLInputElement>(null);
const quantityInputRef = useRef<HTMLInputElement>(null);

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
const newProduct = productInputRef.current!.value;
const quantity = parseInt(quantityInputRef.current!.value);
onAddItem(newProduct,quantity);
productInputRef.current!.value = "";
quantityInputRef.current!.value = "";
}
  return (
    <form onSubmit = {handleSubmit} >
    <input type="text"className='text' placeholder='Product Name' ref = {productInputRef}  />  <br />
    <input type="number" className='number' min = {0} ref = {quantityInputRef} /> <br />
    <button type="submit" className='addbtn' >Add Item</button>
    </form>
  )
}

export default ShoppingListForm