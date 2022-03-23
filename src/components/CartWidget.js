import { ShoppingCartOutlined } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { CartContext } from "../context/CartContext"
import React from "react"
import { useContext } from "react"




const CartWidget = () =>{

    const {addItem, removeItem, clear, isInCart, cart, cartTotal, cartTotalUnits}= useContext(CartContext)

    return(
        <Badge id="cartBadge" badgeContent={cartTotalUnits(cart)} color="info">
            <ShoppingCartOutlined/>
        </Badge>
    )
}
export default CartWidget