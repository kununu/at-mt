import React, {useState} from 'react'
import axios from 'axios'


const Form = () => {
  const [newItem, setNewItem] = useState()

  const addItem = (event) => {
    event.preventDefault()
    const itemObject = {
      name: newItem,
      date: new Date().toISOString()
    }
    axios
    .post('http://localhost:3001/projects', itemObject)
    .then(response => {
      console.log(response)
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
            type="name"/>
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Form;
