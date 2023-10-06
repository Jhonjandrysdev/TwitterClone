import { useState, } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { auth, signInUser } from "../firebase/Myapp";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/xblanca.png";


export const SignIn = () => {
  const [openModal, setOpenModal] = useState();
  const [email, setValidationEmail] = useState("");
  const [password, setValidationPassword] = useState("");
  const [mensaje, setMensaje] = useState("")
  const props = { openModal, setOpenModal };
  const navigate = useNavigate();


 const ValidationUser = async (event) => {
    event.preventDefault();
    
    try {
        if (!email && !password){
            setMensaje("Ecribe tu correo y contraseña")
            return 
        }
        
        const user = await signInUser(email, password);
        setMensaje("Bienvenido " + email)
        setTimeout(() => {
          navigate("/home")
        }, 2000);
        
      } catch (error) {
        setMensaje("Correo o contraseña incorrecta");
        }

  };

  return (
    <>
      <Button
        onClick={() => props.setOpenModal("form-elements")}
        className=" mt-4 flex  bg-black justify-center border-2 border-blue-500 items-center text-white rounded-2xl w-2/5"
      >
        Iniciar Sesión
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

          <form onSubmit={ValidationUser}>
            {" "}
            {/*Esta funcion valida los usuarios ya registrados en la base de datos */}
            <div className="space-y-6">
              <img src={Logo} className="w-6 flex justify-center ml-44" />
              <h3 className="text-lg font-medium text-white flex items-center text-center mt-3 ml-28">
                Inicia sesión en X
              </h3>

              <div>
                <div className="mb-2 flex items-center justify-center">
                  <Label
                    htmlFor="email"
                    value="Correo Electronico"
                    className="text-white text-sm flex items-center justify-center"
                  />
                </div>
                <TextInput
                  id="email"
                  placeholder="Escribe tu correo electronico"
                  className=" text-black text-sm"
                  onChange={(event) => setValidationEmail(event.target.value)}
                />{" "}
                {/*Se le asigna el evento onChange, se hace una funcion donde el parametro sera el evento, la funcion busca obtener el valor del evento el cual le estamos pasando, en este caso el correo, y validar la existenica de este */}
              </div>

              <div>
                <div className="mb-2 flex items-center justify-center">
                  <Label
                    htmlFor="password"
                    value="Contraseña"
                    className="text-white text-sm"
                  />
                </div>
                <TextInput
                  id="password"
                  type="password"
                  className=" text-black text-sm"
                  placeholder="Escribe tu contraseña"
                  onChange={(event) =>
                    setValidationPassword(event.target.value)
                  }
                />{" "}
                {/*Se le asigna el evento onChange, se hace una funcion donde el parametro sera el evento, la funcion busca obtener el valor del evento el cual le estamos pasando, en este caso la contraseña */}
              </div>
                  
              <div className="w-full flex items-center justify-center">
                <Button
                  type="submit"
                  className="bg-white text-black flex justify-center items-center"
                >
                  Inicia Sesión
                </Button>
              </div>
                <h1 className="text-white text-center">{mensaje}</h1>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
