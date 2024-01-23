import React from 'react'
import Item from '../models/item'

interface ShoppingListProps {
  items : Item[];
  handleDelete: (id: number) => void;
}
const ShoppingList = ({items,handleDelete}: ShoppingListProps) => {
  return (
    <div className='list'>
      <h1>Shopping List</h1>
      <ul>
      {items.map((item)=>
      <li key = {item.id}> 
        {item.product} - {item.quantity}
      <button type="button" className='deletebtn' onClick = {() => handleDelete(item.id)} >x</button>
      </li> 
      )}
      </ul>
    </div>
  )
}

export default ShoppingList