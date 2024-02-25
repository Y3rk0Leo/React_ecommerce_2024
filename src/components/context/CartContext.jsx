import { createContext, useState } from "react"


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [carro, setCarro] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = carro.findIndex(product => product.id === id);
            carro[pos].quantity += quantity;
            setCarro([...carro]);

        } else {
            carro.push({...item, quantity:quantity})
            setCarro([...carro]);
        }
    }

    const removeItem = (id) => {
        const items = carro.filter(product => product.id != id);
        setCarro([...items]);

    }

    const clear = () => {
        setCarro([]);
    }

    const isInCart = (id) => {

        return carro.some(product => product.id === id);
    }

    const TotalProductos = () => {
        return carro.reduce((acumulador, product) => acumulador += product.quantity, 0);
    }

    const SumaTotalProductos = () => {
        return carro.reduce((acumulador, product) => acumulador += product.quantity * product.precio, 0);
    }

    return (
        <CartContext.Provider value={{carro, addItem, removeItem, clear, TotalProductos, SumaTotalProductos }}>

            {children}

        </CartContext.Provider>
    )
}
export default CartContextProvider;


