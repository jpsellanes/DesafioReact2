import { createContext, useState } from "react";


export const CartContext = createContext([]) //Se crea el elemento de context
const {Provider} = CartContext;

export const CartContextProvider = ({children}) => {

    const [cart,setCart] = useState([])

    const addItem = (product, count) =>{
        let cartProduct = {product, count}
        console.log("CartProduct",cartProduct)
        let cartAux = []
        if(isInCart(product)){
            console.log("Esta en el CARRITO")
            cartProduct = cart.find(item => item.product === product)
            cartProduct.count = cartProduct.count + count
            cartAux =[...cart]
        } else{
            cartAux = [cartProduct, ...cart]
            console.log("No Esta en el Carrito")
        }
        setCart(cartAux)
    }

    const removeItem =(product)=>{
        if(isInCart(product)){
            console.log("Esta en el carrito")
            const cartAux = cart.filter(item => item.product !== product)
            setCart(cartAux)
        }
    }

    const clear=()=>{
        setCart([])
        console.log("Carrilo Eliminado")
        console.log(cart)
    }

    const isInCart =(product)=>{
        return cart && cart.some(item => item.product === product)
    }

    const cartTotal =(cart)=>{
        let cartTotalCount = 0
        for(let item in cart){
            cartTotalCount = cartTotalCount + cart[item]["product"]["precio"]*cart[item]["count"];
        } 
        console.log(cartTotalCount)
        return cartTotalCount
    }

    const cartTotalUnits =(cart)=>{
        let cartTotalUnitCount = 0
        for(let item in cart){
            cartTotalUnitCount = cartTotalUnitCount + cart[item]["count"];
        } 
        console.log(cartTotalUnitCount)
        return cartTotalUnitCount
    }


    return(
        <CartContext.Provider value={{addItem, removeItem, clear, isInCart, cart, cartTotal, cartTotalUnits}}>
            {children}
        </CartContext.Provider>
    )
} //Se crea el elemento provider, es el que pasa todos los valores del contexto

