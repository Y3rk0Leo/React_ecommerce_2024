import Cart from "../assets/cart.svg";

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-warning position-relative">
            <img src={Cart} alt="Carrito" width={24}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
        </button>

    )
}

export default CartWidget;