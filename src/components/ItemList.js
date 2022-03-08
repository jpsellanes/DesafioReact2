import React,{useState, useEffect} from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";
import picP1 from "../assets/items/product1.png"
import picP2 from "../assets/items/product2.jpg"
import picP3 from "../assets/items/product3.jpg"



let productosIniciales = [
    {
        id:1,
        nombre: "LMH5485-SEP",
        precio: 9782.4,
        stock: 10,
        imgurl: picP1

    },
    {
        id: 2,
        nombre: "MSP430FR5969-SP",
        precio: 2494.8,
        stock: 20,
        imgurl: picP2
    },
    {
        id: 3,
        nombre: "LMH5485-SEP",
        precio: 246,
        stock: 30,
        imgurl: picP3
    }
]




const ItemList = (props) =>{

    const[loading, setLoading] = useState(true);
    const[productos,setProductos] = useState([]);

    useEffect(()=>{
        console.log("Hola Mundo");
        setTimeout(()=>{
            setProductos(productosIniciales);
            setLoading(false);
        }, 2000)

})
    
        return(
            <div>
                <div>
                    <h2>Item List</h2>
                </div>
                <p>{loading ? "Cargando, espere": "Productos:"}</p>
                <ul>
                    {productos.map((producto, indice)=>{
                        return <li> <Item id={producto.id} nombre={producto.nombre} precio={producto.precio} stock={producto.stock} imgurl={producto.imgurl}/>  <ItemCount stock ={producto.stock}/>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
    
    export default ItemList;