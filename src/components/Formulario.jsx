import { useState, useEffect } from "react";
import Alerta from "./Alerta";
import useClintes from "../hooks/useClientes";

const Formulario = () => {
  const [curso, setCurso] = useState("");
  const [id, setId] = useState(null)

  const [alerta, setAlerta] = useState({});

  const { guardarCliente, cliente } = useClintes();

  useEffect(() => {
    if(cliente?.nombre) {
      setCurso(cliente.curso)
      setId(cliente._id)
    }
  }, [cliente])

  const handleSubmit = (e) => {
    e.preventDefault();

    //* Validar el formulario
    if ([curso].includes("")) {
      setAlerta({
        msg: "Oops! Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    guardarCliente({ curso, id });
    setAlerta({
      msg: 'Guardado Correctamente'
    });

    setCurso('')
    setId('')

  };

  const { msg } = alerta;

  return (
    <>
      <h2 className="font-black text-3xl text-center">Evaluacion Final</h2>

      <p className="text-xl mt-5 mb-5 text-center">
        Lee las instucciones{" "}
        <span className="text-amber-600 font-bold">y Resuelve el Cuestionario.</span>
      </p>
      <div className="mt-5 md:mt-5 mb-5 shadow-md px-5 py-1 rounded-xl bg-green-200">
            <p className="block text-center my-5 text-green-800">
            A continuación se le presentan una serie de preguntas de opción múltiple. Responda a cada pregunta seleccionando la opción correcta.

            </p>
          </div>

      {msg && <Alerta alerta={alerta} />}

      <form
        className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md"
        onSubmit={handleSubmit}
      >

        <div className="mb-5">
          <label htmlFor="curso" className="text-gray-700 uppercase font-bold">
          <span className="text-amber-500">1.</span>{' '} Es el tratado internacional al cual se encuentra adherido México y que expresa el compromiso nacional para contribuir a la reducción de Emisiones de Gases de Efecto Invernadero a nivel mundial.
          </label>
          <section
            id="curso"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
          >
            <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta02"
                    value="Sin haber sido
                    construidas, cuenten con un permiso otorgado por la SENER
                    previo a la entrada en vigor de los Lineamientos de Emisiones
                    de Metano."
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                  <span className="uppercase font-bold">a)</span> Sin haber sido
                  construidas, cuenten con un permiso otorgado por la SENER
                  previo a la entrada en vigor de los Lineamientos de Emisiones
                  de Metano.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta02"
                    value="Previo a la
                    entrada en vigor de los Lineamientos de Emisiones de Metano
                    hayan sido construidas."
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                  <span className="uppercase font-bold">b)</span> Previo a la
                  entrada en vigor de los Lineamientos de Emisiones de Metano
                  hayan sido construidas.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta02"
                    value="Sin haber sido
                    construidas, cuenten con un permiso otorgado por la CNH previo
                    a la entrada en vigor de los Lineamientos de Emisiones de
                    Metano."
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                  <span className="uppercase font-bold">c)</span> Sin haber sido
                  construidas, cuenten con un permiso otorgado por la CNH previo
                  a la entrada en vigor de los Lineamientos de Emisiones de
                  Metano.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta02"
                    value="Todas las
                    anteriores."
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                  <span className="uppercase font-bold ">d)</span> Todas las
                  anteriores.
                </li>
              </ul>
          </section>
        </div>

        <input
          type="submit"
          value={id ? 'Guardar Cambios' : 'Enviar Respuestas'}
          className="bg-amber-500 w-full p-3 text-white uppercase font-bold hover:bg-amber-600 cursor-pointer transition-colors rounded-md"
        />
      </form>
    </>
  );
};

export default Formulario;
