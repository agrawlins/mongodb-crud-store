import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Item from './components/Item.js'
import AddItemForm from './components/AddItemForm'

const App = () => {
  const [items, setItems] = useState([])

  const addItem = (newItem) => {
    axios.post("/items", newItem)
      .then(res => {
        setItems(prevItems => [...prevItems, res.data])
      })
      .catch(err => console.log(err))
  }

  const getItems = () => {
    axios.get("/items")
      .then(res => setItems(res.data))
      .catch(err => console.log(err))
  }

  const editItem = (updates, itemId) => {
    axios.put(`/items/${itemId}`, updates)
      .then(res => {
        setItems(prevItems => prevItems.map(item => item._id !== itemId ? item : res.data))
      })
      .catch(err => console.log(err))

  }

  const deleteItem = (itemId) => {
    axios.delete(`/items/${itemId}`)
      .then(res => {
        setItems(prevItems => prevItems.filter(item => item._id !== itemId))
      })
      .catch(err => console.log(err))
  }

  const handleFilter = (e) => {
    if(e.target.value === "reset"){
      getItems()
    } else {
      axios.get(`/items/search/category?category=${e.target.value}`)
        .then(res => setItems(res.data))
        .catch(err => console.log(err))
    }
  }

  const handleSearch = (e) => {
      axios.get(`/items/search/name?name=${e.target.value}`)
        .then(res => setItems(res.data))
        .catch(err => console.log(err))
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <div className="item-container">
      <AddItemForm
        submit={addItem}
        btnText="Add Item"
      />
      <input
        type="text"
        value=""
      />
      <h4>Filter by Department</h4>
      <select onChange={handleFilter} className="filter-form">
        <option value="reset">All Departments</option>
        <option value="automotive">Automotive</option>
        <option value="clothing">Clothing</option>
        <option value="crafts">Arts & Crafts</option>
        <option value="electronics">Electronics</option>
        <option value="food">Groceries</option>
        <option value="garden">Outdoor & Garden</option>
        <option value="hardware">Paint & Hardware</option>
        <option value="home">Home Essentials</option>
        <option value="office">Office Supplies</option>
        <option value="pets">Pet Supplies</option>
        <option value="pharmacy">Pharmacy</option>
        <option value="sporting">Sporting Goods</option>
        <option value="toys">Toys & Games</option>
      </select>
     {
     items.map(item => 
      <Item
        {...item}
        key={item.title}
        deleteItem={deleteItem}
        editItem={editItem}
        />
      )
     }
    </div>
  );
}

export default App;