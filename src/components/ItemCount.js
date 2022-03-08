import React, {useState} from "react";

function ItemCount(props){

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

    const onAdd = ()=>{
        console.log(count )
    }

    return(
        <div>
            <p>Add the desired amount of items</p>
            <button onClick={add}>
                Add
            </button>
            <button onClick={remove}>
                Remove
            </button>
            <button onClick={onAdd} disabled={count === 0}>
                Add To Chart
            </button>
            <h4>Total Units  {count} </h4>
        </div>
    );
}

export default ItemCount;