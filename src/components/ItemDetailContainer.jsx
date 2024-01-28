import { useEffect, useState } from "react";
import matrizProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                let resultado = matrizProductos.find(detalle => detalle.id === parseInt(id));
                resolve(resultado);                
            }, 2000);
        })        
        promesa.then(dato => {
            setDetalle(dato);
            console.log(dato);
        })
    }, [id])

    return (
        <ItemDetail detalle={detalle}/>    
    )
}

export default ItemDetailContainer;