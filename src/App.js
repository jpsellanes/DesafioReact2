import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ItemListContainer from "./components/ItemListContainer";



function App(){
  return(
      <>
        <NavBar/>
        <div></div>
        <ItemListContainer model ="B-Type" compqty={250}/>
        <Main/>
        <Footer/>
      </>
  )
}

export default App;