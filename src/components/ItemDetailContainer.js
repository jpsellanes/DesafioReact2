import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import picP1 from "../assets/items/product1.png"
import "./itemDetailContainer.css"

const producto ={
    id:1,
    nombre: "LMH5485-SEP",
    precio: 9782.4,
    stock: 10,
    imgurl: picP1,
    detail: "The SMV320C6727B is the next generation of Texas Instruments C67x generation of high-performance 32- and 64-bit floating-point digital signal processors.",
    features: "32- and 64-Bit 250-MHz Floating-Point DSPs \n Radiation Tolerance: 100 kRad TID (Si) \n 256K-Byte Unified Program and Data RAM \n 384K-Byte Unified Program and Data ROM "
}


const productPromise = new Promise((resolve, rej)=>{
    setTimeout(()=>{
        resolve(producto)
    }, 2000);
})

const ItemDetailContainer = ()=>{
    const [producto,setProducto] = useState({})
    const getItem = ()=>{
        return productPromise
    }

    useEffect(()=>{
        getItem()
        .then((data)=> setProducto(data))
        .catch((err)=> console.log(err))
    })

    return(
        <div id="itemDetailContainer">
            <ItemDetail producto ={producto}/>
        </div>
    )
}

export default ItemDetailContainer