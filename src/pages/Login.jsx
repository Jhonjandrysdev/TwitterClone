import Logo from "../assets/xblanca.png";
import ImgGoogle from "../assets/logogoogle.png";
import { useNavigate } from "react-router-dom";
import { signInGoogle } from "../firebase/Myapp";
import { Register } from "../componentes/Register";
import { SignIn } from "../componentes/ButtonLogin";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {
  const validation = useAuth();
  validation.verification();
  const route = useNavigate();
  const Google = async () => {
    await signInGoogle();
    route("/home");
  };
  return (
    <>
      <div className="bg-black w-full h-full">
        {" "}
        {/*CONTENEDOR PRINCIPAL */}
        <div className="bg-black w-full h-full min-h-screen flex justify-center items-center flex-col sm:flex-row" >
          {/*div contenedor de la imagen*/}
          <div className="w-1/3 h-auto">
            <img src={Logo} className="w-2/4" />
          </div>
          {/*termina contenedor de imagen */}
          {/*INICIA BOTONES DE REGISTRO CON IDENTIDAD FEDERATIVA */}
          <div className="w-2/5 h-auto">
            {" "}
            {/*Div contenedor de frases y botones del login */}
            <h1 className="text-white text-7xl">Lo que está pasando ahora</h1>
            <h4 className="text-white text-3xl mt-7">Únete Hoy</h4>
            <button
              onClick={Google}
              className="p-2 flex bg-white gap-2 justify-center items-center mt-7 rounded-2xl w-2/5"
            >
              <img src={ImgGoogle} className="w-5" />
              <p className="text-black font-medium">Registrate con Google</p>
            </button>
            {/*TERMINA BOTONES DE REGISTRO CON IDENTIDAD FEDERATIVA */}
            {/*INICA SEPARACION DE REGISTRO CON IDENTIDAD FEDERATIVA*/}
            <div className="flex gap-2 mt-3">
              <hr className="bg-white mt-3 w-24" />
              <p className="text-white">O</p>
              <hr className="bg-white mt-3 w-24" />
            </div>
            {/*TERMINA SEPARACION DE REGISTRO CON IDENTIDAD FEDERATIVA*/}
            {/*BOTON DE CREAR CUENTA */}
            <Register />
            {/*TERMINOS Y CONDICIONES */}
            <div className="mb-5">
            <p className="text-white text-xs mt-2 w-2/3">
              Al registrarte, aceptas los
              <a href="https://twitter.com/es/tos" className="text-blue-600">
                {" "}
                Terminos de servicio{" "}
              </a>{" "}
              y las
              <a
                href="https://twitter.com/es/privacy"
                className="text-blue-600"
              >
                {" "}
                Politicas de privacidad,{" "}
              </a>{" "}
              incluida las politicas de
              <a
                href="https://help.twitter.com/es/rules-and-policies/x-cookies"
                className="text-blue-600"
              >
                {" "}
                Uso de cookies.
              </a>
            </p>
            </div>
            {/*TERMINAN TERMINOS Y CONDICIONES */}
            {/*INICIO SESION  */}
            <span className="text-white text-base">
              Ya tienes una cuenta?
            </span>
            <SignIn />
            {/*FINALIZA INICIO SESIÓN */}
          </div>
          {/*INICIA INDICATIVOS FINALES */}|
        </div>
        <div className="bg-black flex justify-center gap-1 w-full h-10">
          <a
            href="https://about.twitter.com/es"
            className="text-xs text-white flex justify-center w-60 text-center hover:text-blue-600"
          >
            Información
          </a>
          <a
            href="https://help.twitter.com/es"
            className="text-xs text-white flex justify-center w-60 text-center hover:text-blue-600"
          >
            Centro de ayuda
          </a>
          <a
            href="https://twitter.com/es/tos"
            className="text-xs text-white flex justify-center w-60 text-center hover:text-blue-600"
          >
            Condiciones de servicio
          </a>
          <a
            href="https://twitter.com/es/privacy"
            className="text-xs text-white flex justify-center w-60 text-center hover:text-blue-600"
          >
            Politica de privacidad
          </a>
          <a
            href="https://help.twitter.com/es/rules-and-policies/x-cookies"
            className="text-xs text-white flex justify-center w-60 text-center hover:text-blue-600"
          >
            Politica de cookies
          </a>
          <a
            href="https://help.twitter.com/es/resources/accessibility"
            className="text-xs text-white flex justify-center w-60 text-center hover:text-blue-600"
          >
            Accesibilidad
          </a>
          <a
            href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo"
            className="text-xs text-white flex justify-center w-60 text-center hover:text-blue-600"
          >
            Información de anuncios
          </a>
          <a
            href="https://blog.twitter.com/"
            className="text-xs text-white flex justify-center w-60 text-center hover:text-blue-600"
          >
            Blog
          </a>
          <a
            href="https://status.twitterstat.us/"
            className="text-xs text-white flex justify-center w-60 text-center hover:text-blue-600"
          >
            Estado
          </a>
          <a
            href="https://careers.twitter.com/en"
            className="text-xs text-white flex justify-center w-60 text-center hover:text-blue-600"
          >
            Empleos
          </a>
          <a
            href="https://about.twitter.com/es/company/brand-resources"
            className="text-xs text-white flex justify-center w-60 text-center hover:text-blue-600"
          >
            Recursos para marcas
          </a>
          <a
            href="https://ads.twitter.com/login?ref=gl-tw-tw-twitter-advertise"
            className="text-xs text-white flex justify-center w-60 text-center hover:text-blue-600"
          >
            Publicidad
          </a>
          <a
            href="https://marketing.twitter.com/es"
            className="text-xs text-white flex justify-center w-60 text-center hover:text-blue-600"
          >
            Marketing
          </a>
          <a
            href="https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness"
            className="text-xs text-white flex justify-center w-60 text-center hover:text-blue-600"
          >
            X para empresas
          </a>
          <a
            href="https://developer.twitter.com/en"
            className="text-xs text-white flex justify-center w-60 text-center hover:text-blue-600"
          >
            Desarrolladores
          </a>
          <a
            href="https://twitter.com/i/flow/login?redirect_after_login=%2Fi%2Fdirectory%2Fprofiles"
            target="_blank"
            className="text-xs text-white flex justify-center w-60 text-center hover:text-blue-600"
          >
            Guía
          </a>
          <a
            href="https://twitter.com/settings/account/personalization"
            target="_blank"
            className="text-xs text-white flex justify-center w-60 text-center hover:text-blue-600"
          >
            Configuración
          </a>
        </div>
        {/*TERMINA INDICATIVOS FINALES */}
      </div>
    </>
  );
};
