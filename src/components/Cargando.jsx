const Cargando = () => {
    return ( 
            <>
                <h2 className="m-5">Espere un momento...</h2>
                <div className="text-center">
                    <button type="button" className="btn btn-warning m-4" disabled>
                        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                        <h3>  Cargando...   </h3>
                    </button>
                </div>
            </>
    );
}

export default Cargando;