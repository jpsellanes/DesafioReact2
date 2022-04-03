import React, {useState} from "react";
import "./itemCount.css"
import {toast} from "react-toastify"
import {Button, ButtonGroup} from "@mui/material"
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
            <p className="itemCounterP">Add the desired amount of items</p>
            <ButtonGroup style ={{backgroundColor: "white"}} size="small" variant="outlined">
                <Button onClick={add} style ={{color:"Black",fontWeight:"bolder"}}>
                    Add
                </Button>
                <Button onClick={remove} style ={{color:"Black",fontWeight:"bolder"}}>
                    Remove
                </Button>
                <Button onClick={addToCart} disabled={count === 0} style ={{color:"Black",fontWeight:"bolder"}}>
                    Add To Cart
                </Button>
            </ButtonGroup>
            <h4>Total Units  {count} </h4>
        </div>
    );
}

export default ItemCount;