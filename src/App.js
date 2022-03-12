import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";



function App(){
  return(
      <>
        <NavBar/>
        <Main/>
        <ItemListContainer/>
        <ItemDetailContainer/>
        <Footer/>
      </>
  )
}

export default App;