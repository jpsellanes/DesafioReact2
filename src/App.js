import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Carrito from "./components/Carrito"
import {CartContextProvider} from "./context/CartContext"

function App(){
  return(
      <div className="App">
        <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
            <Main/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/categoria/:categoria" element={<ItemListContainer/>} />
              <Route path="/carrito" element={<Carrito/>} />
              <Route path="/item/:id" element={<ItemDetailContainer/>} />
            </Routes>
            <Footer/>
          </BrowserRouter>
          </CartContextProvider>
      </div>
  )
}

export default App;