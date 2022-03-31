import React, {useState} from "react";
import "./itemCount.css"
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function ItemCount(props){

    const onAdd =()=>{}
    const [count, setCount] = useState(1);
    const add =()=>{
        if(count < props.stock){
            setCount(count + 1)
        } else {
            toast.error("Not Enough Stock!")
        }
    }
    const remove = ()=>{
        if(count > 0){
            setCount(count - 1)
        } else {
            toast.error("Error!")
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