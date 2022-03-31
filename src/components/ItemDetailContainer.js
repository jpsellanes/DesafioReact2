import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {toast} from "react-toastify"
import "./itemDetailContainer.css"
import { dbFirebase } from "../firebaseConfig";
import {getDocs, query, collection, where, getDoc,doc} from "firebase/firestore"




const ItemDetailContainer = ()=>{

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const {id} = useParams();
    const [producto, setProducto] = useState({});

    useEffect(()=>{
        const docRef = doc(dbFirebase, "productos", id);
            getDoc(docRef)
            .then((res)=> setProducto(res.data()))
    },[id])

    return(
        <div id="itemDetailContainer">
            <ItemDetail  producto ={producto}/>
        </div>
    )
}

export default ItemDetailContainer
