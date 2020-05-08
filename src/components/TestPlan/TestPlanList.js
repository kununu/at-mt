import React, { useState, useEffect } from 'react'
import itemsService from '../../services/testCasesController'


const TestPlanList = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        itemsService
            .getAll()
            .then(initialItems => {
                setItems(initialItems)
            })
            .catch(error => {
                console.log('Fail')
            })
    }, [setItems])

    const toggleImportanceOf = (id) => {
        const item = items.find(n => n.id === id)
        const changedItem = { ...item, current: !item.current }

        itemsService
            .update(id, changedItem)
            .then(returnedItem => {
                setItems(
                    items.map(item => item.id !== id ? item : returnedItem)
                )
            })
            .catch(error => {
                console.log('Fail')
            })
    }

    const removeItem = (id) => {
        itemsService
            .remove(id)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log('Failed to remove item')
            })
    }

    if (items !== '') {
        return (
            <div>
                <ul>
                    {items.map(items =>
                        <Items
                            key={items.id}
                            items={items}
                            toggleImportance={() => toggleImportanceOf(items.id)}
                            removeItem={() => removeItem(items.id)} />
                    )}
                </ul>
            </div>
        )
    }
}

const Items = ({ items, toggleImportance, removeItem }) => {
    const labelToggle = items.current
        ? 'Current' : 'Not current'
    const labelRemove = "Delete"

    return (
        <a href="home" className="list-group-item list-group-item-action">ID: {items.id} , Name: {items.name}  , Date added: {items.date}, Description: {items.description} <button onClick={toggleImportance}>{labelToggle}</button> <button onClick={removeItem}>{labelRemove}</button></a>
    )
}

export default TestPlanList;
