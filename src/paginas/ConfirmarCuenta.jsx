import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";
import Footer from "../components/Footer";

const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [validar, setValidar] = useState("");
  const [alerta, setAlerta] = useState({});

  const params = useParams();
  const { id } = params;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([validar].includes("")) {
      setAlerta({
        msg: "Oops! Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
  };

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/administradores/confirmar/${id}`;
        const { data } = await clienteAxios(url);
        setCuentaConfirmada(true);
        setAlerta({
          msg: data.msg,
        });
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }

      setCargando(false);
    };
    confirmarCuenta();
  }, []);

  const navigate = useNavigate();
const handleClick = (validar) => {
navigate(`/confirmar/${validar}`);
}

  return (
    <>
      <section className="md:flex h-screen md:m-auto">
        <section className="md:align-middle md:mx-96">
          <div>
            <h1 className="uppercase text-rose-500 font-black text-5xl text-center">
              Bienvenido al sistema de{" "}
              <span className="text-black">Confirmacion de Cuenta</span>
            </h1>
          </div>
          <div className="mt-20 md:mt-5 shadow-md px-5 py-1 rounded-xl bg-rose-200">
            <p className="block text-center my-5 text-rose-800">
              En este apartado podras confirmar la cuenta de los usuarios que
              han comprado un curso o capacitación de IKTAN TRAINING para que
              prosigan con su evaluación.
            </p>
          </div>
          <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            {!cargando && <Alerta alerta={alerta} />}
            <form onSubmit={handleSubmit}>
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Validar Cuenta
                </label>
                <input
                  type="text"
                  placeholder="Validador de Tokens"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={validar}
                  onChange={(e) => setValidar(e.target.value)}
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  value="Validar Cuenta"
                  className=" bg-rose-600 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-rose-700 md:w-auto md:px-24"
                  onClick={() => handleClick(validar)}
                >
                  Validar Cuenta
                </button>
              </div>
            </form>
            {cuentaConfirmada && (
              <Link className="block text-center my-5 text-gray-500" to="/">
                Iniciar Sesión
              </Link>
            )}
          </div>
          <Footer />
        </section>
      </section>
    </>
  );
};

export default ConfirmarCuenta;
