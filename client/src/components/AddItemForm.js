import React, { useState } from "react";

const AddMovieForm = (props) => {
    const {name, category, quantity, submit, btnText, _id} = props
    const initInputs = {name: name || "", category: category || "", quantity: quantity || ""}
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(inputs, _id)
        setInputs(initInputs)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            placeholder="Name"
        />
        <select 
          name="category" 
          value={inputs.category} 
          onChange={handleChange}
          defaultValue=""
        >
          <option value="" disabled hidden>Select A Category</option>
          <option value="crafts">Arts & Crafts</option>
          <option value="automotive">Automotive</option>
          <option value="clothing">Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="garden">Garden</option>
          <option value="food">Groceries</option>
          <option value="hardware">Hardware</option>
          <option value="home">Home</option>
          <option value="office">Office</option>
          <option value="pharmacy">Pharmacy</option>
          <option value="pets">Pets</option>
          <option value="sporting">Sporting Goods</option>
          <option value="toys">Toys & Games</option>
        </select>
         <input
            type="number"
            name="quantity"
            value={inputs.quantity}
            onChange={handleChange}
            placeholder="Quantity"
        />
        <button>{btnText}</button>
    </form>
  );
}

export default AddMovieForm;