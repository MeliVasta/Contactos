
/* este componente tiene la funcion de cuando se lo llama desde el boton "agrefar contacto" desde el componente padre "App.jsx", recolecte los datos ingresados por el usuario en los input y agregue dichos datos en el array "contacto" del componente padre "App.jsx" y asi poder generar un nuevo contacto a las lista de contactos cada vez que se llame a este componente */

/* importacion del hook que se utiliza en este componente */
import React, { useState } from "react";

/* importacion de su respectivo css*/
import './Formulario.css'


const Formulario = ({ agregarContacto }) => {

    // almacenar datos del contacto
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [profesion, setProfesion] = useState("");
    const [habilidades, setHabilidades] = useState("");


    // funcion que va a almacenar el cambio de dicho input
    const inputChange = (e) => {
        agregarContacto(e.target.value)
    };

    // funcion para alamcenar los datos de los contactos 
    const datosContactos = () => {
        // verifica que los campos no esten vacios
        if (nombre.trim() !== '' && apellido.trim() !== '' && telefono.trim() !== '' && profesion.trim() !== '' && habilidades.trim() !== '') {
            // crea un objeto con los datos recolectados de los contactos
            const nuevoContacto = {
                id: Date.now(),
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                profesion: profesion,
                habilidades: habilidades
            };

            // llama a la función para agregar el nuevo contacto
            agregarContacto(nuevoContacto);

            // reinicio valores del formulario
            setNombre("");
            setApellido("");
            setTelefono("");
            setProfesion("");
            setHabilidades("");
        }
    }

    // almacena el estado de detalle
    const [cerrar, setCerrar] = useState(false);

    // funcion para cerrar el formulario desde el boton 'x'
    const cerrarFormulario = (e) => {
        if (!cerrar) {
            e.preventDefault();
            setCerrar(!cerrar);
        }
    };



    return (
        <>
            {!cerrar && (
                <div className="contenedor-formulario">
                    {/* formulario para agregar contacto, enviara los datos recoleactados al componente padre "App.jsx" y los almacenara en el array contacto*/}
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        datosContactos();
                    }}
                        className="formulario">
                        {/* parte superior del formulario, se muestra sub-titulo dando refencia a el usuario se encuntra dentro de un formulario para agregar un contacto y el boton para cerrar dicho formulario en caso de no querer agregar un contacto */}
                        <div className="formulario-superiror">
                            <div className="lado-izquierdo">
                                <i className="bi bi-person-fill-add add-formulario"></i>
                                <h3 className="titulo-formulario">Agregar contacto</h3>
                            </div>
                            {/* boton 'x' para cerrar formulario */}
                            <button onClick={cerrarFormulario} className="btn-cerrar">
                                <i className="bi bi-x-circle"></i>
                            </button>
                        </div>

                        {/* cuerpo del fomulario donde se encuntran varios inputs para ingresar la informacion correspondiente */}
                        <div className="contenido-formulario">
                            <div className="input-label">
                                <label htmlFor="nombre">Nombre:</label>
                                <input
                                    type="text"
                                    name='nombre'
                                    value={nombre}
                                    onChange={(e) => {
                                        setNombre(e.target.value);
                                        inputChange;
                                    }}
                                    required
                                ></input>
                            </div>

                            <div className="input-label">
                                <label htmlFor="apellido">Apellido:</label>
                                <input
                                    type="text"
                                    value={apellido}
                                    name='apellido'
                                    onChange={(e) => {
                                        setApellido(e.target.value);
                                        inputChange;
                                    }}
                                    required
                                ></input>
                            </div>


                            <div className="input-label">
                                <label htmlFor="telefono">Teléfono:</label>
                                <input
                                    type="number"
                                    value={telefono}
                                    onChange={(e) => {
                                        setTelefono(e.target.value);
                                        inputChange;
                                    }}
                                    required
                                ></input>
                            </div>

                            <div className="input-label">
                                <label htmlFor="profesion">Profesión:</label>
                                <input
                                    type="text"
                                    value={profesion}
                                    onChange={(e) => {
                                        setProfesion(e.target.value);
                                        inputChange;
                                    }}
                                    required
                                ></input>
                            </div>

                            <div className="input-label">
                                <label htmlFor="habilidades">Habilidades:</label>
                                <input
                                    type="text"
                                    value={habilidades}
                                    onChange={(e) => {
                                        setHabilidades(e.target.value);
                                        inputChange;
                                    }}
                                    required
                                ></input>
                            </div>
                        </div>

                        {/* boton "agregar a la lista de contactos" que envia los datos capturados por el formulario hacia el componente padre "App.jsx" y asi poder ir generando el listado de contactos */}
                        <button className="boton-agregar-form" type="submit">Agregar a la lista de contactos</button>
                    </form>
                </div>
            )}
        </>
    );
};

export { Formulario };

