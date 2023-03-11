import { useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import Location from "./Location";
import PagProduct from "./PagProduct";
import './SearchPage.css';
import { useNavigate, Route, Routes } from "react-router-dom";


export default function SearchPage(props){

    const theproducts = props.theproducts;
    let navigate = useNavigate();

    const [palabra, setPalabra] = useState("");
    const [seleccion, setSeleccion] = useState("All");


    const listProducts = theproducts
    
    .filter(unproducto =>(seleccion === "All" ? (unproducto.category.toLowerCase().includes("")) : (unproducto.category.toLowerCase() === (seleccion))))

    .filter(unproducto => (unproducto.title.toLowerCase().includes(palabra)))
    
    .map(unproducto => (
                  
        <td key={unproducto.id} >
            <Card style={{ width: '18rem' }} className="unproducto">
            <Card.Img variant="top" src={unproducto.thumbnail} />
            <Card.Body>
                <Card.Title className="cardTitle">{unproducto.title}</Card.Title>
                <Card.Text>
                   {unproducto.description}
                </Card.Text>
                <Button variant="primary" onClick={() => (navigate("/products/" + theproducts.indexOf(unproducto)))}>VER</Button>
            </Card.Body>
            </Card>
        </td>
    )).slice(0, props.numProducts)


    const seleccionar = theproducts.reduce((listaCategorias, unproducto) => listaCategorias.includes(unproducto.category) ? listaCategorias : [...listaCategorias, unproducto.category], []);
    //array que contiene todas las categorías 


    return (
        <div>
            
            <h2 id="catálogo">Aquí tienes el catálogo</h2>
            <input id="filtro" placeholder="Escriba lo que quiere buscar" className='input'></input>
            <button id="buscador" onClick={() => setPalabra(document.getElementById("filtro").value)}>Buscar</button>


            <Form.Select name="categoria" id="selector" onChange={e => setSeleccion(e.target.value)}>
                <option value="All">All</option>

                {seleccionar.map((unproducto, index) => (
                <option key={index} value={unproducto.category}>{unproducto}</option>
                ))}

            </Form.Select>

            
            <table id="productosresultados" align='center' className="tablaProductos">
                {listProducts}
            </table>


        </div>)
}