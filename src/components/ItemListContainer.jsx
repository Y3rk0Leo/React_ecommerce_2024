const ItemListContainer = ({greeting1, greeting2}) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <div className="alert alert-warning p-3" role="alert">
                        <h1 className="display-3">{greeting1}</h1>
                        <h3 className="display-6">{greeting2}</h3>
                    </div>
                </div>
            </div>
        </div>        

    )
}

export default ItemListContainer;