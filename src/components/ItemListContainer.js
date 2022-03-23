import React,{useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


import picP1 from "../assets/items/product1.png"
import picP2 from "../assets/items/product2.jpg"
import picP3 from "../assets/items/product3.jpg"
import picP4 from "../assets/items/AM5718-HIREL.png"
import picP5 from "../assets/items/TMP461-SP.png"
import picP6 from "../assets/items/SMJ320C6701.png"
import picP7 from "../assets/items/TLV1704.png"


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
    },
    {
        id: 4,
        nombre: "AM5718-HIREL",
        precio: 110,
        stock: 10,
        imgurl: picP4,
        categoria: "Microcontrollers",
        detail: "ARM MCU Cortex-A15 Military Rating ",
        features: "Up to 512KB of On-Chip L3 RAM"
    },
    {
        id: 5,
        nombre: "TMP461-SP",
        precio: 1211,
        stock: 10,
        imgurl: picP5,
        categoria: "Sensors",
        detail: "Radiation-hardness-assured (RHA), high-accuracy remote and local temperature sensor",
        features: "Enables Measurement Of Remote Diode Temperatures in the Range of -64°C to 191°C"
    },
    {
        id: 6,
        nombre: "SMJ320C6701",
        precio: 1211,
        stock: 10,
        imgurl: picP6,
        categoria: "Microcontrollers",
        detail: "Space grade C6701 floating-point DSP - rad-tolerant class V with ceramic package",
        features: "140-MHz Clock Rate - Up to One GFLOPS Performance - 1M-Bit On-Chip SRAM"
    },
    {
        id: 7,
        nombre: "TLV1704",
        precio: 1211,
        stock: 10,
        imgurl: picP7,
        categoria: "Amplifiers",
        detail: "2.2-V to 36-V, radiation hardened microPower quad comparator in space enhanced plastic",
        features: "Available in Military (-55°C to 125°C) Temperature Range"
    },
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