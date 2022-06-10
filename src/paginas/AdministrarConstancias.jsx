import { useState } from 'react'
import Formulario from '../components/Formulario'
import ListadoClientes from '../components/ListadoClientes'
import Footer from '../components/Footer'

function AdministrarConstancias() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  return (
    <section className="md:flex h-screen md:m-auto">
    <section className="md:align-middle md:mx-40">
          <div>
            <Formulario />
            <ListadoClientes />
            <Footer />
          </div>
        </section>
        </section>
    )
}

export default AdministrarConstancias;