import useClintes from "../hooks/useClientes";
import useClintes from "../hooks/useClientes";
import Cliente from "./Cliente";

const ListadoClientes = () => {
  const { clientes } = useClintes();
  console.log(clientes);
  return (
    <>
      {clientes.length ? (
        <>
          <h2 className="font-black pt-10 text-3xl text-center">Respuestas Almacenadas</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Aquí aparecen las respuestas{" "}
            <span className="text-rose-600 font-bold">
              que se almacenaron en la base de datos
            </span>
          </p>

          {clientes.map ( cliente => (
            <Cliente 
                key={cliente._id}
                cliente={cliente}
            />
          ))}

        </>
      ) : (
        <>
          <h2 className="font-black text-3xl pt-10 text-center">No Hay Respuestas</h2>

          <p className="text-xl mt-5 mb-10 text-center">
           Resuelve tu examen...{" "}
            <span className="text-rose-600 font-bold">
              ¡Las respuestas apreceran en este lugar!
            </span>
          </p>
        </>
      )}
    </>
  );
};

export default ListadoClientes;
