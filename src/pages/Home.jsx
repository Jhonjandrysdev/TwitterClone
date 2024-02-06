import { Barra } from "../componentes/Barralateral";
import { useAuth } from "../hooks/useAuth";
import {Tweet} from '../componentes/Tweet';
export const Home = () => {
  const validation = useAuth();
  validation.verification();
  return (
    <>
        <div className="dark:bg-black flex ">
          {" "}
          {/*CONTENEDOR PRINCIPAL */}
          <div className=" w-1/5 h-full">
            <Barra/>
          </div>
            {/* Seccion de tweets # 1*/}
          <div className="w-3/5 p-4 basis-3/4 shadow-md rounded-md h-full border border-white">
            <Tweet/>
          </div>
        </div>
    
    </>
  );
};
