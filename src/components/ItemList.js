import React,{useState, useContext, useEffect} from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";
import "./itemList.css"
import { CartContext } from "../context/CartContext";



const ItemList = ({productos}) =>{

    const {addItem, cart} = useContext(CartContext)

    const onAdd =(count)=>{
        if(count != undefined){
            addItem(productos, count)
            console.log("CART=",cart)
        }
    }

        return(
            <div>
                <ul  className="ItemContainer">
                    {productos.map((producto, indice)=>{
                        return <li key={indice} > <Item producto={producto}/> <ItemCount stock ={producto.stock}  onAdd ={onAdd}/></li>     
                    })}
                </ul>
            </div>
        );
    }
    
    export default ItemList;

