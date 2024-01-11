import CartWidget from "./CartWidget";
import LogoBb from "./LogoBb"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid px-10">
                <span className="navbar-brand mb-5 h1 fs-2"> Barberia Beto </span>                
                <div className="col-md-5">
                    <LogoBb tamano={100} />
                </div>

                <div className="col-md-4">
                    <ul className="nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" aria-current="page"href="#!">CABELLO</a></li>
                        <li className="nav-item"><a className="nav-link" aria-current="page"href="#!">BARBA</a></li>
                        <li className="nav-item"><a className="nav-link" aria-current="page"href="#!">AFEITADO</a></li>
                        <li className="nav-item"><a className="nav-link" aria-current="page"href="#!">ROSTRO</a></li>
                        <li className="nav-item"><a className="nav-link" aria-current="page"href="#!">ACCESORIOS</a></li>
                        <li className="nav-item"><a className="nav-link" aria-current="page"href="#!">PAQUETES</a></li>
                    </ul>
                </div>
                <div className="col-md-1 d-flex align-items-center justify-content">
                    <CartWidget />
                </div>
            </div>
        </nav>



    )
}

export default NavBar;