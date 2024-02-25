import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({detalle}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(detalle, quantity);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2 p-3">
                    <img src={detalle.imagen} alt={detalle.nombre} className="img-fluid"/>
                </div>
                <div className="col-md-4">
                    <h1>{detalle.nombre}</h1>
                    <p>{detalle.descripcion}</p>
                    <p><b>${detalle.precio}</b></p>
                    <ItemCount disponible={detalle.disponible} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;