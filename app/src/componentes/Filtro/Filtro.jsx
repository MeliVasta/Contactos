
/* este componente tiene la funcionalidadad mostrar la barra de busqueda donde el cliente pueda buscar por cierto termino y devuelva el resultado que coincida con su busqueda */

/* importacion del hook que se utiliza en este componente */
import React, { useState } from "react";

/* importacion de dicho css correspondiente */
import "./Filtro.css";


const Filtro = ({ datosdecontactos }) => {

    // estado para alamacenar el termino de busqueda del usuario
    const [filtrar, setFiltrar] = useState('');

    // tomo el array contacto desde el componente padre "App.jsx" 
    const contacto = datosdecontactos;


    // crear una filtracion con un nuevo array que contenga los datos filtrados con la condicion indicada en la barra de busqueda
    const filtros = () => {
        return contacto.filter(contacto => contacto.nombre.toLowerCase().startsWith(filtrar.toLowerCase()))
    }

    return (
        <>
            {/* barra de busqueda segun el termino de busqueda */}
            <div className='contenedor-barra-busqueda'>
                {/* input para que el usuario pueda ingresar al dato a filtrar*/}
                <input className='input-busqueda' type='text' value={filtrar} onChange={(e) => setFiltrar(e.target.value)} placeholder='Buscar contacto...' />
            </div>

            {/* contenedor de cada contacto que coincida con la busqueda */}
            {filtrar && filtros().map((contacto) => (
                <div className='agenda-contactos' key={contacto.id}>
                    <div className="contacto-detalle-filtrado">
                        <div className='cajas-contactos'>
                            <div className="contacto" >
                                <div className="superiror-contacto-filtrado">
                                    <div className="superiror-contacto-nombre-filtrado">
                                        <i className="bi bi-person-circle"></i>
                                        <h3 className="nombre-contacto">Nombre: {contacto.nombre}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export { Filtro }

