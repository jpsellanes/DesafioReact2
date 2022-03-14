import React,{useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


import picP1 from "../assets/items/product1.png"
import picP2 from "../assets/items/product2.jpg"
import picP3 from "../assets/items/product3.jpg"


export let productosIniciales = [
    {
        id:1,
        nombre: "SMV320C6727B-SP",
        precio: 9782.4,
        stock: 10,
        imgurl: picP1,
        categoria: "Microcontrollers",
        detail: "The SMV320C6727B is the next generation of Texas Instruments C67x generation of high-performance 32- and 64-bit floating-point digital signal processors.",
    features: "32- and 64-Bit 250-MHz Floating-Point DSPs \n Radiation Tolerance: 100 kRad TID (Si) \n 256K-Byte Unified Program and Data RAM \n 384K-Byte Unified Program and Data ROM "

    },
    {
        id: 2,
        nombre: "MSP430FR5969-SP",
        precio: 2494.8,
        stock: 20,
        imgurl: picP2,
        categoria: "Sensors"
    },
    {
        id: 3,
        nombre: "LMH5485-SEP",
        precio: 246,
        stock: 30,
        imgurl: picP3,
        categoria: "Amplifiers"
    }
]


const onAdd = () =>{
    console.log("Agregado al carrito")
}


const ItemListContainer = (props) =>{

    const[error, setError] = useState(false)
    const[loading, setLoading] = useState(true);
    const[productos,setProductos] = useState([]);
    const {categoria} = useParams()
    

    useEffect(()=>{
        const PromesaTest = new Promise((res,rej) =>{
            setTimeout(() =>{
                res(productosIniciales);
            }, 2000)
        })
        console.log(categoria)
        PromesaTest
            .then((res)=>{
                if(categoria != undefined){
                    const productoFiltrado = productosIniciales.filter(productos => productos.categoria === categoria)
                    setProductos(productoFiltrado);
                } else {
                    setProductos(productosIniciales);
                }
            })
            .catch((rej)=>{
                setError(true);
            })
            .finally(()=>{
                setLoading(false)
            })
    },[categoria])


    return(
        <div id="ItemListConteiner">
            <h2>Item List</h2>
            <p>{loading ? "Cargando, espere": "Productos:"}</p>
            <ItemList productos ={productos}/>
        </div>
    )
}

export default ItemListContainer