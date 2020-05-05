import React, {useState, useEffect} from 'react'
import axios from 'axios'

const List = () => {

    const [items,  setItems] = useState([])

    useEffect(() => {
      axios
        .get('http://localhost:3001/projects')
        .then(response => {
          setItems(response.data)
        })
    }, [setItems])

    if (items !== '') {
        return (
            <div>
                <ul>
                    {items.map(items =>
                        <Items key={items.id} items={items}/>
                    )}
                </ul>
            </div>
        )
    }
}

const Items = ({items}) => {
    return (
        <a href="home" className="list-group-item list-group-item-action">ID: {items.id} , Name: {items.name}  , Date added: {items.date}</a>
    )
}

export default List;
