

/* este componente tiene la funcionalidadad de mapear el array de contactos y eleminarlo de la lista */

/* importacion de su respectivo css*/
import './Contacto.css'


const Contacto = ({ contactos, estadoContacto }) => {

    // tomo el array contacto desde el componente padre "App.jsx" 
    const contacto = contactos;


    // eliminar contacto
    const eliminarContacto = (contactoID) => {
        // funcion para elimianar el contacto utilizando el metodo filter para crear un nuevo array que excluya la tarea
        const contactoEliminar = contactos.filter(contacto => contacto.id !== contactoID);
        estadoContacto(contactoEliminar);
    }



    return (
        <>
            {/* aqui se muestra el boton de eliminar contacto con su dicha funcion */}
            {contacto.map((contacto) => (
                <div key={contacto.id}>
                    <button className="btn-borrar-contacto" onClick={() => eliminarContacto(contacto.id)}>
                        <i className="bi bi-person-fill-dash"></i>
                    </button>
                </div>
            ))}
        </>
    )
}

export { Contacto }

