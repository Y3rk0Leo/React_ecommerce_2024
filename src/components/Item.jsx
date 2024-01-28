import { Link } from "react-router-dom";

const Item = ({detalle}) => {
    return (
        <div className="col-md-3 text-center">
            <div className="card border-0">
                <Link to={"/item/" + detalle.id} className="text-decoration-none text-dark">
                    <img src={detalle.imagen} className="card-img-top" alt={detalle.precio}/>
                    <div className="card-body">
                        <p className="card-text">{detalle.nombre}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Item;