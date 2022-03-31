import { createContext, useState } from "react";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext([]) //Se crea el elemento de context
const {Provider} = CartContext;

export const CartContextProvider = ({children}) => {

    const [cart,setCart] = useState([])

    const addItem = (product, count) =>{
        let cartProduct = {product, count}
        console.log("CartProduct",cartProduct)
        let cartAux = []
        if(isInCart(product)){
            toast.error("Esta en el CARRITO")
            cartProduct = cart.find(item => item.product.id === product.id)
            cartProduct.count = cartProduct.count + count
            cartAux =[...cart]
        } else{
            cartAux = [cartProduct, ...cart]
            toast.info("New Product Added")
        }
        setCart(cartAux)
    }

    const removeItem =(product)=>{
        if(isInCart(product)){
            toast.info("Item Removed")
            const cartAux = cart.filter(item => item.product !== product)
            setCart(cartAux)
        }
    }

    const clear=()=>{
        setCart([])
        toast.info("Carrilo Eliminado")
        console.log(cart)
    }

    const isInCart =(product)=>{
        return cart && cart.some(item => item.product.id === product.id)
    }

    const cartTotal =(cart)=>{
        let cartTotalCount = 0
        for(let item in cart){
            cartTotalCount = cartTotalCount + cart[item]["product"]["precio"]*cart[item]["count"];
        } 
        return cartTotalCount
    }

    const cartTotalUnits =(cart)=>{
        let cartTotalUnitCount = 0
        for(let item in cart){
            cartTotalUnitCount = cartTotalUnitCount + cart[item]["count"];
        } 
        return cartTotalUnitCount
    }


    return(
        <CartContext.Provider value={{addItem, removeItem, clear, isInCart, cart, cartTotal, cartTotalUnits}}>
            {children}
        </CartContext.Provider>
    )
} 

