import Card from "./components/Card"
import Cart from "./components/Cart";
import Error from "./components/Error";
import Footer from "./components/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import {BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/context/CartContext";
import Checkout from "./components/Checkout";

const App = () => {
  return (

    <CartContextProvider>
      <BrowserRouter>    
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/Cart"} element={<Cart />} />
          <Route path={"/Checkout"} element={<Checkout />} />
          <Route path={"*"} element={<Error />} />
        </Routes>
        <Card />
        <Footer />
      </BrowserRouter> 
    </CartContextProvider>
    
  )
}

export default App
