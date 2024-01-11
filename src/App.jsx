import Card from "./components/Card"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <> 
    
    <NavBar />
    <ItemListContainer greeting1={"👷SITIO EN CONSTRUCCIÓN 👷"} greeting2={"¡ Gracias Por Su Visita !"}/>
    <Card />
    <Footer />
    
    </>
  )
}

export default App
