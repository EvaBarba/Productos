import SearchPage from "./SearchPage";
import Location from "./Location";
import { Link, useParams} from "react-router-dom";
import './PagProduct.css';


export default function PagProduct(props){
    
    //const productos = props.productos;
    let {productId} = useParams();
    const producto = props.productos[productId];
    
    return (
        <div>

            <Location />
            
            <h2 id="titulo" className="titulo">Nombre: {producto.title}</h2>
            <p></p>
            <img className="imagen" src={producto.thumbnail} />

            <p className="contenedor">
            <p><b>Description: </b> {producto.description}</p>
            <p></p>
            <p><b>Price: </b>{producto.price}€</p>
            <p><b>Rating: </b>{producto.rating}</p>
            <p><b>Stock: </b>{producto.stock}</p>
            <p>⠀</p>
            <Link to="/"><button id="volver" className="botonVolver">Volver</button></Link>
            </p>


        </div>)
}