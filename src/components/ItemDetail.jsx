const ItemDetail = ({detalle}) => {
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
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;