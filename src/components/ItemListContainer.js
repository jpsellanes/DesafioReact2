import React,{useState, useEffect} from "react";
import ItemList from "./ItemList";


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




const onAdd = () =>{
    console.log("Agregado al carrito")
}




const ItemListContainer = (props) =>{

    const[error, setError] = useState(false)
    const[loading, setLoading] = useState(true);
    const[productos,setProductos] = useState([]);

    useEffect(()=>{
        const PromesaTest = new Promise((res,rej) =>{
            setTimeout(() =>{
                res(productosIniciales);
            }, 2000)
        })

        PromesaTest
            .then((res)=>{
                setProductos(productosIniciales);
            })
            .catch((rej)=>{
                setError(true);
            })
            .finally(()=>{
                setLoading(false)
            })
    })


    return(
        <div id="ItemListConteiner">
            <h2>Item List</h2>
            <p>{loading ? "Cargando, espere": "Productos:"}</p>
            <ItemList productos ={productos}/>
        </div>
    )
}

export default ItemListContainer