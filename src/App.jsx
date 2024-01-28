import Card from "./components/Card"
import Error from "./components/Error";
import Footer from "./components/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import {BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>    
      <NavBar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error />} />
      </Routes>
      <Card />
      <Footer />
    </BrowserRouter> 
  )
}

export default App
