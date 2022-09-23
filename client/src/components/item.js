import React, { useState } from "react";
import AddItemForm from "./AddItemForm";

const Item = (props) => {
    const {name, category, quantity, editItem, deleteItem, _id} = props
    const [editToggle, setEditToggle] = useState(false)
  return (
    <div className="item">
        { !editToggle ? 
        <>
            <h1>{name}</h1>
            <h2>{category}</h2> 
            <p>({quantity} in Stock)</p>
            <button className="delete-btn" onClick={() => deleteItem(_id)}>DELETE</button>
            <button className="edit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
        </>
        :
        <>   
            <AddItemForm
                name={name}
                category={category}
                quantity={quantity}
                _id={_id}
                btnText="Edit"
                submit={editItem}
            />
            <button className="delete-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
        </>
        }
    </div>
  );
}

export default Item;