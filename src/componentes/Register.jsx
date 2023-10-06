import { useState } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { registrerUser } from "../firebase/Myapp";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [openModal, setOpenModal] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const props = { openModal, setOpenModal };
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    registrerUser(email, password);
    setMensaje("Bienvenido " + email);
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };
  return (
    <>
      <Button
        onClick={() => props.setOpenModal("form-elements")}
        className="bg-blue-500 mt-1 flex justify-center items-center text-white rounded-2xl w-2/5"
      >
        Crear Cuenta
      </Button>

      <Modal
        show={props.openModal === "form-elements"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        {/*El props modal maneja el estado para abrir y cerrar el formulario de registro */}

        <Modal.Header className="bg-black" />
        <Modal.Body className="bg-black">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6 ">
              <h3 className="text-xl font-medium text-white">Crea tu cuenta</h3>

              <div>
                <div className="mb-2 block ">
                  <Label
                    htmlFor="email"
                    value="Correo Electronico"
                    className="text-white text-sm"
                  />
                </div>
                <TextInput
                  id="email"
                  placeholder="Escribe tu correo electronico"
                  className=" text-black text-sm"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />{" "}
                {/*Se le asigna el evento onChange, se hace una funcion donde el parametro sera el evento, la funcion busca obtener el valor del evento el cual le estamos pasando, en este caso el correo*/}
              </div>
              <div>
                <div className="mb-2 block ">
                  <Label
                    htmlFor="password"
                    value="Tu contraseña"
                    className="text-white text-sm"
                  />
                </div>
                <TextInput
                  id="password"
                  type="password"
                  required
                  className=" text-black text-sm"
                  placeholder="Escribe tu contraseña"
                  onChange={(event) => setPassword(event.target.value)}
                />{" "}
                {/*Se le asigna el evento onChange, se hace una funcion donde el parametro sera el evento, la funcion busca obtener el valor del evento el cual le estamos pasando, en este caso la contraseña */}
              </div>
              <div className="w-full">
                <Button
                  type="submit"
                  className="bg-white text-black flex justify-center items-center"
                >
                  Registrar
                </Button>
                <h1 className="text-white text-lg flex text-center items-center justify-center mt-4">
                  {mensaje}
                </h1>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
