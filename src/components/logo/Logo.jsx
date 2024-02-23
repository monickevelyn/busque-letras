import "./style.logo.scss"
import { Link } from "react-router-dom"
import logoimg from "../../assets/pesquisar-alt (1).png"

export default function Logo(){
    return(
        <>
        <div>
            <Link to="/" className="link-logo">
                <img src={logoimg} alt="logo" />
                <span>Busque Letras</span>
            </Link>           
        </div>
        </>
    )
}