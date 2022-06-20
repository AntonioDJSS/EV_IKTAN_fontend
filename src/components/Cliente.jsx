import useClintes from "../hooks/useClientes"

const Cliente = ({cliente}) => {

    const {setEdicion, eliminarCliente} = useClintes()

    const {createdAt, curso, administrador, _id} = cliente

    const formatearFecha = (fechaFinalizacion) => {
        const nuevaFecha = new Date(fechaFinalizacion)
        return new Intl.DateTimeFormat('es-MX', {dateStyle: 'long'}).format(nuevaFecha)
    }

  return (
      <>
      
        <div className="mx-5 my-2 bg-white shadow-md px-5 py-5 rounded-xl">
        <div className="mt-5 md:mt-5 mb-5 px-2 py-1 rounded-xl bg-gray-100">
            <p className="block text-center my-5 text-gray-800">
                Información de la Evlauación
            </p>
          </div>
        <p className="font-bold uppercase text-gray-400 my-1">Folio Usuario: {' '}
            <span className="font-normal normal-case text-black">{administrador}</span>
        </p>
        <p className="font-bold uppercase text-gray-400 my-1">Folio Evaluación: {' '}
            <span className="font-normal normal-case text-black">{_id}</span>
        </p>
        <p className="font-bold uppercase text-gray-400 my-1">Fecha Finalizado: {' '}
            <span className="font-normal normal-case text-black">{formatearFecha(createdAt)}</span>
        </p>
        <div className="mt-5 md:mt-5 mb-5 px-2 py-1 rounded-xl bg-gray-100">
            <p className="block text-center my-5 text-gray-800">
               Respuestas Guardadas
            </p>
          </div>
        <p className="font-bold uppercase text-amber-600 my-1">Respuesta 01: {' '}
            <span className="font-normal normal-case text-black">{curso}</span>
        </p>

    </div>
      </>
  )
}

export default Cliente