import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import  { collection, getFirestore, addDoc }  from "firebase/firestore";

const Checkout =() => {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [orderId, setOrderId] = useState();
    const {carro, clear, TotalProductos, SumaTotalProductos} = useContext(CartContext);
    
  
        const crearOrden = ()  => {
            if (nombre.length === 0) {
                return false;
            }
            if (email.length === 0) {
                return false;
            }
            if (telefono.length === 0) {
                return false;
            }

            const buyer = {name:nombre, email:email, phone:telefono};
            const items = carro.map(item => ({id:item.idx, nombre:item.nombre, precio:item.precio}));
            const fecha = new Date();
            const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
            const total = TotalProductos();
            const order = {buyer:buyer, items:items, date:date, total:total};

            const db = getFirestore();
            const ordersCollection = collection(db, "orders");
            addDoc(ordersCollection, order).then(resultado => {
                clear();
                setOrderId(resultado.id);
            });
        }
    
        return(
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1> Checkout </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />                               
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />                                
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Telfono</label>
                                <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} />                                
                            </div>

                            <button type="button" className="btn btn-primary my-3" onClick={crearOrden}>Crear Orden</button>
                        </form>

                        </div>
                        <div className="col">
                            <table className="table">
                                <tbody>
                                    {carro.map(product =>
                                    <tr key={product.id}>
                                        <td><img src={product.imagen} alt={product.name} width={80} /></td>
                                        <td className="text-center">{product.nombre}</td>
                                        <td>${product.precio}</td>
                                        <td>{product.quantity}</td>
                                        <td>${product.quantity * product.precio}</td>                                        
                                    </tr>
                                )}   
                                    <tr>
                                        <td colSpan={4}>&nbsp;</td>
                                        <td>${SumaTotalProductos()}</td>
                                    </tr>
    
                                </tbody>        
                            </table>
                        </div>
                        <div className="row my-5">
                            <div className="col text-center">
                                {orderId ? <div className="alert alert-warning p-5 text-center" role="alert">
                                    <p className="display-1">👏👏👏 </p>
                                    <h1> Agradecemos su compra y preferencia </h1>
                                    <h3> Su ID de compra es: <b>{orderId}</b></h3>
                                    </div> : ""}
                                        
                            </div>
                        </div>
                    </div>
                </div>
               
        )
 }
export default Checkout;