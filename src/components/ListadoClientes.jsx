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
            Tus respuestas se guardaron correctamente en{" "}
            <span className="text-amber-600 font-bold">
              nuestra base de datos.
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
            <span className="text-amber-600 font-bold">
              ¡Las respuestas apreceran en este lugar!
            </span>
          </p>
        </>
      )}
    </>
  );
};

export default ListadoClientes;
