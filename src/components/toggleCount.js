import React ,{useState} from "react";

const ToggleContador = ()=> {

    const [dark, setDark] = useState(false)


    const toggleDarkMode =()=>{
        console.log("Toggle Dark Mode");
        setDark(!dark);
        console.log(dark);
    }

    return(
        <div>
            <h4>ToggleDarkMode</h4>
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
            <p>The dark mode is {dark.toString()}</p>
        </div>
    )
}

export default ToggleContador;