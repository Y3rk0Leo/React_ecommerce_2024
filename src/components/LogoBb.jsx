import { Link } from "react-router-dom";
import Logo from "../assets/LogoBb.png";

const LogoBb = ({tamano}) => {
    return (
        <Link to={"/"}>
            <img src={Logo} alt="BarberiaBeto" with={tamano}/>
            
        </Link>

    )
} 
export default LogoBb;