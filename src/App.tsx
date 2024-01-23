import React from 'react'
import "../src/components/style/App.css"
import Item from './models/item';
import { useState } from 'react';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
const App = () => {
const [items, setItems] = useState<Item[]>([]);
const addItem = (product: string, quantity: number) => {
setItems([...items, {id:Math.random(),product,quantity}])
};

const handleDelete = (id: number) => {
setItems((items) => items.filter((allObj) => allObj.id!== id));
}

const handleDeleteAll = () => {
  setItems([]);
}
  return (
    <div>
      <ShoppingList items = {items} handleDelete = {handleDelete} />
      <ShoppingListForm onAddItem = {addItem} /> 
      <button type="button" className='deleteall' onClick = {handleDeleteAll} >Delete All</button>
    </div>
  )
}

export default App


//tam baxilib amma qalanin practise etmek qaldi