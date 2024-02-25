import { useEffect, useState } from "react";
//import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import  { collection, getDocs, getFirestore, query, where }  from "firebase/firestore";
import Cargando from "./Cargando";
//import Card from "./Card";
//import Item from "./Item";


const ItemListContainer = () => {
    const [articulos, setArticulos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const {id} = useParams();

/*    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? matrizProductos.filter(detalle => detalle.categoria === id) : matrizProductos);                
            }, 2000);
        })        
        promesa.then(dato => {
            setArticulos(dato);
        })
    }, [id]);    */


   /* useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "articulos");

        arrayProductos.forEach(producto => {
            addDoc(itemsCollection, producto);
        });

        console.log("Proceso terminado correctamente")

    }, []) */   

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "articulos");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then(resultado => {
            setCargando(false)
            setArticulos(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        });
    }, [id]); 



    return (
        <>
            {cargando ? <Cargando/> : <ItemList articulos={articulos}/>} 
        
        </>
    )
}

export default ItemListContainer;