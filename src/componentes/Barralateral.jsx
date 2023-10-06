import Lupa from "../assets/lupa.png";
import Amigos from "../assets/amigos.png";
import Campana from "../assets/campana.png";
import Mas from "../assets/elipsis.png";
import Guardar from "../assets/guardar-instagram.png";
import Inicio from "../assets/homa.png";
import Lista from "../assets/lista.png";
import Mensaje from "../assets/mensaje.png";
import Usuario from "../assets/usuario.png";
import Perfil from "../assets/perfil.png";
import Logo from "../assets/xblanca.png";
import Salir from "../assets/ingresar.png";
import { out, auth } from "../firebase/Myapp";
import { useNavigate } from "react-router-dom";


export const Barra = () => {
  const navigate = useNavigate();

  const outProfile = (e) => {
    e.preventDefault();

    out();
    navigate("/");
  };

  return (
    <>
      <div className="dark:bg-black w-1/5 min-h-full fixed">
        {" "}
        {/*CONTENEDOR PRINCIPAL */}
        {/*contenedor de elementos */}
        <div className="dark:bg-black w-full ml-10 min-h-full">
          {" "}
          {}
          <img src={Logo} className="w-8 mt-2" />
          <button className="flex gap-2 text-center justify-center mt-5 hover:bg-opacity-25 roundend transform">
            <img src={Inicio} className="w-8" />
            <p className="text-white mt-2">Home</p>
          </button>
          <button className="flex gap-3 text-center justify-center mt-5">
            <img src={Lupa} className="w-8" />
            <p className="text-white mt-2">Explore</p>
          </button>
          <button className="flex gap-3 text-center justify-center mt-5">
            <img src={Campana} className="w-8" />
            <p className="text-white mt-2">Notifications</p>
          </button>
          <button className="flex gap-3 text-center justify-center mt-5">
            <img src={Mensaje} className="w-8" />
            <p className="text-white mt-1">Messages</p>
          </button>
          <button className="flex gap-3 text-center justify-center mt-5">
            <img src={Lista} className="w-8" />
            <p className="text-white mt-1">Lists</p>
          </button>
          <button className="flex gap-3 text-center justify-center mt-5">
            <img src={Guardar} className="w-8" />
            <p className="text-white mt-2">Bookmarks</p>
          </button>
          <button className="flex gap-3 text-center justify-center mt-5">
            <img src={Amigos} className="w-8" />
            <p className="text-white mt-1">Communities</p>
          </button>
          <button className="flex gap-3 text-center justify-center mt-5">
            <img src={Usuario} className="w-8" />
            <p className="text-white mt-1">Profile</p>
          </button>
          <button className="flex gap-3 text-center justify-center mt-5">
            <img src={Mas} className="w-8" />
            <p className="text-white mt-1">More</p>
          </button>
          <button
            onClick={outProfile}
            className="flex gap-3 text-center justify-center mt-5"
          >
            <img src={Salir} className="w-8" />
            <p className="text-white mt-1">Log Out</p>
          </button>
          <button className="flex gap-2 text-center justify-center mt-4">
            <img src={Perfil} className="w-8" />
            <p className="text-white mt-1">Usuario</p>
            <br />
          </button>
        </div>
        {/*Finaliza contenedor de elementos */}
      </div>
    </>
  );
};
