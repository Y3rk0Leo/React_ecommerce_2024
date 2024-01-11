import SlideImg1 from "../assets/Slide1.png"
import SlideImg2 from "../assets/Slide2.png"
import SlideImg3 from "../assets/Slide3.png"

const Card = () => {
    return (
        <div className="row gx-4 gx-lg-5">
            <div className="col-md-4 mb-5">
                <div className="card h-100">
                    <img src={ SlideImg1} className="img-fluid" alt="..."/>
                    <div className="card-body">
                        <h2 className="card-title">Cabello</h2>
                        <p className="card-text">Asesoría, corte y lavado de cabello. Incluye peinado con pomada a elección.</p>
                    </div>
                    <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">Leer más...</a></div>
                </div>
            </div>
            <div className="col-md-4 mb-5">
                <div className="card h-100">
                    <img src={ SlideImg2} className="img-fluid" alt="..."/>
                    <div className="card-body">
                        <h2 className="card-title">Barba</h2>
                        <p className="card-text">Asesoría, arreglo y corte de barba, aplicación de toalla caliente, aceite y limpieza facial.</p>
                    </div>
                    <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">Leer más...</a></div>
                </div>
            </div>
            <div className="col-md-4 mb-5">
                <div className="card h-100">
                    <img src={ SlideImg3} className="img-fluid" alt="..."/>
                    <div className="card-body">
                        <h2 className="card-title">Accesorios</h2>
                        <p className="card-text">Kit completo para el cuidado y mantenimiento de la barba y bigote.</p>
                    </div>
                    <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">Leer más...</a></div>
                </div>
            </div>
        </div>


    )
}

export default Card;