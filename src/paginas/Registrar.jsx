import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";
import Footer from "../components/Footer";

const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");

  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, email, telefono ,password, confirmarPassword].includes("")) {
      setAlerta({ msg: "Oops! Hay campos vacios", error: true });
      return;
    }

    if (password !== confirmarPassword) {
      setAlerta({ msg: "Oops! Los password no son iguales", error: true });
      return;
    }

    if (password.length < 8) {
      setAlerta({
        msg: "Oops! Es password es muy corto, agrega minimo 8 caracteres",
        error: true,
      });
      return;
    }

    setAlerta({});

    // Crear el usuario en la api
    try {
      await clienteAxios.post("/administradores", { nombre, email, telefono, password });
      setAlerta({
        msg: "¡Solicitud Registrada! Nos pondremos en contacto contigo",
        error: false,
      });
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <section className="md:flex h-screen md:m-auto">
        <section className="md:align-middle md:mx-96">
          <div>
            <h1 className="uppercase text-rose-500 font-black text-5xl text-center">
              ¿No Tienes Una cuenta?{" "}
              <span className="text-black">Creala Aqui</span>
            </h1>
          </div>
          <div className="mt-5 md:mt-5 shadow-md px-5 py-1 rounded-xl bg-green-100">
            <p className="block text-center my-5 text-green-900">
              Bienvenido al sistema de evaluación continua, si compraste un
              curso o capacitación y aun no tienes cuenta para ingresar a la
              plataforma... Puedes crearla aquí. Nuestros administradores se
              pondran en contacto contigo para validar tu información y activar
              la misma.
            </p>
          </div>

          <div className="mt-5 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            {msg && <Alerta alerta={alerta} />}

            <form onSubmit={handleSubmit}>
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  placeholder="Tu Nombre"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email de Registro"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Telefono
                </label>
                <input
                  type="tel"
                  placeholder="Tu Telefono o Celular de Contacto"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>

              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Tu Password"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Confirmar Password
                </label>
                <input
                  type="password"
                  placeholder="Confirma tu Password"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={confirmarPassword}
                  onChange={(e) => setConfirmarPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-center">
              <input
                type="submit"
                value="Solicitar Cuenta"
                className=" bg-rose-600 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-rose-700 md:w-auto md:px-24"
              />
              </div>
            </form>

            <nav className="mt-2 lg:flex lg:justify-center">
              <Link className="block text-center my-5 text-gray-500" to="/">
                ¿Ya tienes una cuenta? Inicia Sesión
              </Link>
            </nav>
          </div>
          <Footer />
        </section>
      </section>
    </>
  );
};

export default Registrar;
