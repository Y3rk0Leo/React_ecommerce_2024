import { useEffect, useState } from "react";
import matrizProductos from "./json/productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Card from "./Card";
import Item from "./Item";

const ItemListContainer = () => {
    const [articulos, setArticulos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? matrizProductos.filter(detalle => detalle.categoria === id) : matrizProductos);                
            }, 2000);
        })        
        promesa.then(dato => {
            setArticulos(dato);
        })
    }, [id]);

    return (
        <>
            <ItemList articulos={articulos}/> 
        </>
    )
}

export default ItemListContainer;