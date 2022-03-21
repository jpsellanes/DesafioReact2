import React, {useState} from "react";
import "./itemCount.css"

function ItemCount(props){

    const onAdd =()=>{}
    const [count, setCount] = useState(1);
    const add =()=>{
        if(count < props.stock){
            setCount(count + 1)
        } else {
            console.log("Not Enough Stock!")
        }
    }
    const remove = ()=>{
        if(count > 0){
            setCount(count - 1)
        } else {
            console.log("Error!")
        }
    }

    const addToCart = ()=>{
        props.onAdd(count)
    }

    return(
        <div className="itemCounter">
            <p>Add the desired amount of items</p>
            <button onClick={add}>
                Add
            </button>
            <button onClick={remove}>
                Remove
            </button>
            <button onClick={addToCart} disabled={count === 0}>
                Add To Chart
            </button>
            <h4>Total Units  {count} </h4>
        </div>
    );
}

export default ItemCount;