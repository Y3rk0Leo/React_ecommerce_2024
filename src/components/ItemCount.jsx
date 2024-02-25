import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({disponible, onAdd}) => {
    const [contador, setContador] = useState(1);
    const [itemDisponible, setItemDisponible] = useState(disponible);
    const [agregar, setAgregar] = useState(false);

    const aumentar = () => {
        if (contador < itemDisponible) {
            setContador(contador + 1);
        }
    }
    const disminuir = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }
    const AddToCart = () => {
        if (contador <= itemDisponible) {
            setItemDisponible(itemDisponible - contador);
            setContador(1);
            onAdd(contador);
            setAgregar(true)
//            console.log("Agregaste " + contador + " productos al carrito. Quedan " + (itemDisponible - contador) + "productos disponibles");

        }
    }

    useEffect(() => {
        setItemDisponible(disponible)
    }, [disponible]);

    return(

     
        <>

            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-warning" onClick={disminuir}>-</button>
                <button type="button" className="btn btn">{contador}</button>
                <button type="button" className="btn btn-warning" onClick={aumentar}>+</button>
            </div>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                {agregar ? <Link to={"/Cart"} className="btn btn-warning m-3"> Finalizar la Compra </Link>: <button type="button" 
                className="btn btn-warning m-3" onClick={AddToCart}>Añadir Al Carrito</button>}
            </div>
        
        </>
        

    )
}
export default ItemCount;