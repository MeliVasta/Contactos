
// importacion del hook que se utiliza en este componente 
import { useState } from 'react'

// importacion de su respectivo css
import './App.css'

// importacion de los componentes de nuestra app 
import { Detalle } from './componentes/Detalle/Detalle'
import { Filtro } from './componentes/Filtro/Filtro'
import { Contacto } from './componentes/Contacto/Contacto'
import { Formulario } from './componentes/Formulario/Formulario'


function App() {

  // estado para almacenar  los contactos
  const [contacto, setContacto] = useState([]);


  // función para agregar un nuevo contacto al array cada vez que se ingrese los valores correspondientes en el componente formulario
  const agregarContacto = (nuevoContacto) => {
    setContacto([...contacto, nuevoContacto]);
    // ocultar el formulario después de agregar el contacto
    setFormularioAgregar(false);
  };


  // estado para controlar la visibilidad del formulario
  const [formularioAgregar, setFormularioAgregar] = useState(false);
  // función para alternar la visibilidad del formulario
  const aparecerFormulario = () => {
    setFormularioAgregar(!formularioAgregar);
  };


  return (
    <>

      {/* header donde se encuentra el titulo de nuestra app, barra de busqueda de contactos y boton agregar contacto */}
      <header className='header'>
        {/* titulo de la aplicación */}
        <h1 className='header-titulo'>Agenda de contactos </h1>
        {/* se llamara al componente filtro que contiene la barra de busqueda y al boton agregar contacto que llama al componente formulario  */}
        <div className='barra-boton'>
          {/* el boton agregar contacto llama al componente "Formulario.jsx" */}
          <div className='btn-agregar'>
            <button className='boton-agregar' onClick={aparecerFormulario}><i className="bi bi-person-fill-add btn"></i>
              Agregar contacto
            </button>
            {formularioAgregar && <Formulario agregarContacto={agregarContacto} />}
          </div>

          {/* barra de busqueda de contactos */}
          <Filtro datosdecontactose={contacto} />
        </div>
      </header>


      {/* aqui se mostrara el listado de contactos agendados donde se podra visualizar el detalle de cada contacto y ejecutar la accion de eliminarlo de la lista */}
      <main className='agenda-contactos'>
        <div className='cajas-contactos'>
          {/* por cada contacto agregado se llama al componente detalle que muestra el contacto y el detalle del mismo, por ejemplo apellido, telefono, etc */}
          <div className='caja-contacto'>
            {contacto.map((contacto => (
              <Detalle key={contacto.id} props={contacto} />
            )))}
          </div>

          {/* aqui se llama al componente contacto que brinda la funcion de eliminar el contacto de nuestra lista */}
          <div className='caja-eliminar'>
            <Contacto contactos={contacto} estadoContacto={setContacto} />
          </div>
        </div>
      </main>


      {/* footer de la app */}
      <footer>
        <div className='barra-divisora'></div>
        <p className='titulo-footer'>2024 Agenda de contactos. Todos los derechos reservados.</p>
        <p className='sub-titulo-footer'>Melina Vasta</p>
      </footer>
    </>
  )
}


export default App


