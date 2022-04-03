import React,{useContext, useState, useEffect} from "react";
import { addDoc, collection , serverTimestamp  } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import {dbFirebase} from "../firebaseConfig"
import {Button, TextField} from "@mui/material"
import  validator  from "validator";
import {toast} from "react-toastify";

const CartForm = (props) =>{

    const {addItem, removeItem, clear, isInCart, cart, cartTotal}= useContext(CartContext)
    const [clientName, setClientName] = useState("")
    const [clientPhone, setClientPhone] = useState("")
    const [clientEmail, setClientEmail] = useState("")
    const [validEmail, setValidEmail] = useState(false);
    const [validPhone, setValidPhone] = useState(false);
    const [validName, setValidName] = useState(false);
    
    const confirmCompra = () =>{
        const orden ={
            buyer : {
                name : clientName,
                phone : clientPhone,
                email : clientEmail
            },
            items : cart,
            date : serverTimestamp(),
            total : cartTotal(cart)
        }

        const ordenCollection = collection(dbFirebase, "ordenes")
        const pedido = addDoc(ordenCollection, orden)

        pedido.then(res =>{
            toast.success("Your Order ID is" + res.id)
            clear(cart)
        })
    }

    const nuevoClientName = (a) =>{
        setClientName(a.target.value)
    }

    const nuevoClientPhone = (a) =>{
        setClientPhone(a.target.value)
    }

    const nuevoClientEmail = (a) =>{
        setClientEmail(a.target.value)
    }

    useEffect(() => {
        setValidName(validator.isAlpha(clientName, "es-ES", { ignore: " " }));
        setValidEmail(validator.isEmail(clientEmail));
        setValidPhone(validator.isNumeric(clientPhone, "es-ES"));
    }, [clientName, clientPhone, clientEmail]);

    return(
        <>
        <h3>Contact Information:</h3>
        <TextField className="formItems" error={clientName !== "" && !validName} required variant="filled" label="Name" onChange={nuevoClientName} value={clientName} />
        <TextField className="formItems" error={clientPhone !== "" && !validPhone} required variant="filled" label="Phone" onChange={nuevoClientPhone} value={clientPhone} />
        <TextField className="formItems" error={clientEmail !== "" && !validEmail} required variant="filled" label="Email" onChange={nuevoClientEmail} value={clientEmail} />
        <div className="cartFooter dropShadow cart">
            <div className="cartButtons">
                <Button onClick={confirmCompra} variant="contained" disabled={(!validName || !validEmail  || !validPhone)} color="success">Confirm</Button>
            </div>
        </div>
        </>
    )

}

export default CartForm