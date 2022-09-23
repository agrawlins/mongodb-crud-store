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
        <input
            type="text"
            name="category"
            value={inputs.category}
            onChange={handleChange}
            placeholder="Category"
        />
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