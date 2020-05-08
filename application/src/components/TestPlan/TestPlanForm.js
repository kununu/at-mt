import React, { useState } from 'react'
import itemsService from '../../services/items'


const Form = () => {
  const [newItem, setNewItem] = useState()

  function refreshPage() {
    window.location.reload(false);
}

  const addItem = (event) => {
    event.preventDefault()
    const itemObject = {
      name: newItem,
      date: new Date().toISOString(),
      description: "Test description"
    }
    itemsService
      .create(itemObject)
      .then(response => {
        refreshPage()
      })
      .catch(error => {
        console.log('Failed to add item')
      })
  }

  const handleItemsChange = (event) => {
    setNewItem(event.target.value)
  }

  return (
    <div>
      <div>
        <h3>Test plans list</h3>
        <form className="input-group mb-3" onSubmit={addItem}>
          <input
            value={newItem}
            onChange={handleItemsChange}
            type="name" />
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Form;
