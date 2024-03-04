
/* este componente tiene la funcionalidadad de por cada contacto que se agregue desde el componente "Formulario.jsx" devolver al mismo de una forma en la que se enliste y reciba ciertos estilos indicados */

/* importacion del hook que se utiliza en este componente */
import React, { useState } from "react";


// importacion de su respectivo css
import "./Detalle.css";

const Detalle = ({ props }) => {
    // destructring contacto en detalle
    const { nombre, apellido, telefono, profesion, habilidades } = props;

    // estado de desplegar detalle de contacto
    const [detalle, setDetalle] = useState(false);

    // funcion para que el boton de detalle muestre los detalles del contacto 
    function detalles() {
        setDetalle(!detalle);
    }

    return (
        <>
            {/* contenedor de cada contacto */}
            <div className="contacto-detalle">
                {/* parte superior de  contacto donde se encuentra el valor nombre tomado por el fomulario y el boton para desplegar los detalles del contacto */}
                <div className="superiror-contacto">
                    <div className="superiror-contacto-nombre">
                        {/* aqui se encuntra el nombre del contacto */}
                        <i className="bi bi-person-circle"></i>
                        <h3 className="nombre-contacto">Nombre: {nombre}</h3>
                    </div>

                    {/* boton que muestra los detalles de los contactos */}
                    <div className="superior-contacto-botones">
                        <button className="btn-detalles" onClick={detalles}>
                            {detalle ? <i className="bi bi-caret-up-fill"></i> : <i className="bi bi-caret-down-fill"></i>}
                        </button>
                    </div>
                </div>

                {/* parte inferior de contacto aqui se mostraran los valores tomados por el formulario, apellido, telefono, profesion y habiliadades */}
                {detalle && (
                    <div className="inferior-contacto">
                        <div className="detalle-contacto">
                            <h5 className="sub-titulos-contacto">Apellido:</h5>
                            <span className="resultado-dato">{apellido}</span>
                        </div>
                        <div className="detalle-contacto">
                            <h5 className="sub-titulos-contacto">Teléfono:</h5>
                            <span className="resultado-dato">{telefono}</span>
                        </div>
                        <div className="detalle-contacto">
                            <h5 className="sub-titulos-contacto">Profesión:</h5>
                            <span className="resultado-dato">{profesion}</span>
                        </div>
                        <div className="detalle-contacto">
                            <h5 className="sub-titulos-contacto">Habilidades: </h5>
                            <span className="resultado-dato">{habilidades}</span>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export { Detalle };
