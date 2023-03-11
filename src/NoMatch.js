import { Link } from "react-router-dom";

export default function NoMatch(props){
    
    return (
        <div>
            <p>⠀</p>
            <h2 id="info" className="titulo">Ruta no encontrada</h2>
            <p>⠀</p>
            <Link to="/"><button id="volver" className="botonVolver">Volver</button></Link>
            

        </div>)
}