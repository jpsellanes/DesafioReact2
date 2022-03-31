import React,{useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {getDocs, query, collection, where} from "firebase/firestore"
import { dbFirebase } from "../firebaseConfig";

const onAdd = () =>{
    console.log("Agregado al carrito")
}


const ItemListContainer = () =>{

    const[error, setError] = useState(false)
    const[loading, setLoading] = useState(true);
    const[productos,setProductos] = useState([]);
    const {categoria} = useParams()
    

    useEffect(()=>{

        if(categoria){
            const q = query(collection(dbFirebase, "productos"),where("categoria","==",categoria))
            getDocs(q)
            .then((resp)=> setProductos(resp.docs.map(p=>({productos:p.data(),id: p.id}))))
            .catch((err)=> {
                console.log(err);
                setError(true);
            })
            .finally(()=> setLoading(false))
            
        } else {
            getDocs(collection(dbFirebase, "productos"))
            .then((resp)=>setProductos(resp.docs.map(p=>({productos:p.data(),id:p.id}))))
            .catch((err)=> console.log(err))
            .finally(()=> setLoading(false))
        }
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