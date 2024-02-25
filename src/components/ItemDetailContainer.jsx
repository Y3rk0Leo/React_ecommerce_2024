import { useEffect, useState } from "react";
//import matrizProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Cargando from "./Cargando";

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState([]);
    const [cargando, setCargando] = useState(true);
    const {id} = useParams();

/*    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                let resultado = matrizProductos.find(detalle => detalle.id === parseInt(id));
                resolve(resultado);                
            }, 2000);
        })        
        promesa.then(dato => {
            setDetalle(dato);
//            console.log(dato);
        })
    }, [id])  */


    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "articulos", id);
        getDoc(producto).then(resultado => {
            setCargando(false)
            setDetalle({id:resultado.id, ...resultado.data()});
        });
    }, [id]); 


    return (

        <>
        
            {cargando ? <Cargando/> : <ItemDetail detalle={detalle}/>  } 

        </>

         
    )
}

export default ItemDetailContainer;