import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Carrito from "./components/Carrito"

function App(){
  return(
      <div className="App">
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
      </div>
  )
}

export default App;