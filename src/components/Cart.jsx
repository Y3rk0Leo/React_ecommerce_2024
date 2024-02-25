import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/trash.svg"


const Cart = () => {
    const {carro, removeItem, clear, TotalProductos, SumaTotalProductos} = useContext(CartContext);

    if (TotalProductos() == 0) {
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="alert m-3 alert-primary" role="alert">No existen productos en el Carrito !!! </div>
                        <Link to={"/"} className="btn btn-warning my-5"> Volver a la Pagina Principal </Link>
                    </div>
                </div>
            </div>
        )
    }

    return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1> Existen Productos </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <tbody>
                                <tr>
                                <td className="text-end" colSpan={6}><a href="#" onClick={clear} className="btn btn-primary" type="reset" value="Reset"> Vaciar Carrito </a></td>
                                </tr>
                                {carro.map(product =>
                                <tr key={product.id}>
                                    <td><img src={product.imagen} alt={product.name} width={80} /></td>
                                    <td className="text-center">{product.nombre}</td>
                                    <td>${product.precio}</td>
                                    <td>{product.quantity}</td>
                                    <td>${product.quantity * product.precio}</td>
                                    <td><a href="#" onClick={() =>{removeItem(product.id)}}><img src={trash} alt="Eliminar Producto" title="Eliminar Producto"  /></a></td>
                                </tr>
                            )}   
                                <tr>
                                    <td colSpan={4} className="text-center">Suma Total</td>
                                    <td>${SumaTotalProductos()}</td>
                                    <td className="text-end"><Link to={"/checkout"} className="btn btn-primary">Checkout</Link></td>
                                </tr>

                            </tbody>        
                        </table>
                    </div>
                </div>
            </div>
           
    )
}
export default Cart;