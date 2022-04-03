import React ,{useContext} from "react";
import "./item.css"
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import {toast} from "react-toastify";
import {Button} from "@mui/material";
import 'react-toastify/dist/ReactToastify.css';


const Item = ({producto}) =>{
    const {productos, id} = producto;
    const {addItem, cart} = useContext(CartContext)

    const onAdd =(count)=>{
        if(count != undefined){
            addItem(productos, count)
            toast.info("Product Added!");
        }
    }

    return(
        <div id="item">
            <h4>{productos.nombre}</h4>
            <img src={productos.imgurl}/>
            <p>Price u$d {productos.precio}</p>
            <p>Stock {productos.stock}</p>
            <Button style ={{backgroundColor: "White"}} variant="contained"><Link to={`/item/${productos.id}`} >More Details</Link></Button>
            <ItemCount stock ={productos.stock}  onAdd ={onAdd}/>
        </div>
    )
}

export default Item