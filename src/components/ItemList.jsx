import Item from "./Item";

const ItemList = ({articulos}) => {
    return (
        <div className="container my-5">
            <div className="row">
                {articulos.map(detalle => (
                    <Item key={detalle.id} detalle={detalle} />
                ))}
            </div>
        </div>        
    )
}

export default ItemList;