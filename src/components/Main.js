import React, {useState, useEffect} from "react";
import ToggleContador from "./toggleCount"




/*let productosIniciales = [
    {
        id:1,
        nombre: "producto 1",
        precio: 100
    },
    {
        id: 2,
        nombre: "producto 2",
        precio: 200
    },
    {
        id: 3,
        nombre: "producto 3",
        precio: 300
    }
]*/




const Main = (props) =>{


    return(
        <main>
            <div>
                <h2>Main Main Main</h2>
            </div>
            <ToggleContador/>
        </main>
    );
}

export default Main;


/*
            <p>{loading ? "Cargando, espere": "Productos:"}</p>
            <ul>
                {productos.map((producto, indice)=>{
                    return <li>{producto.nombre}</li>
                })}
            </ul>
*/ 