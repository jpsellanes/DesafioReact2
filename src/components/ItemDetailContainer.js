import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {toast} from "react-toastify"
import "./itemDetailContainer.css"
import {productosIniciales} from "./ItemListContainer"





const ItemDetailContainer = ()=>{

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const {id} = useParams();
    const [producto, setProducto] = useState({});

    useEffect(()=>{
        setLoading(true);
        const promesaTest = new Promise((res, rej)=>{
            setTimeout(()=>{
                res(productosIniciales);
            }, 2000)
        })

        promesaTest
            .then((res)=>{
                var producto = productosIniciales.find(producto => {
                    return producto.id == id;
                })
                setProducto(producto)
            })
            .catch((rej)=>{
                toast.error("Problema al cargar producto");
                setError(true);
            })
            .finally(()=>{
                setLoading(true)
            })
    },[])

    return(
        <div id="itemDetailContainer">
            <ItemDetail producto ={producto}/>
        </div>
    )
}

export default ItemDetailContainer




/*

const productPromise = new Promise((resolve, rej)=>{
    setTimeout(()=>{
        resolve(productosIniciales)
    }, 2000);
})


const ItemDetailContainer = ()=>{


    const {id} = useParams()
    const [producto,setProducto] = useState({})

    const getItem = ()=>{
        return productPromise.id === id
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

export default ItemDetailContainer*/