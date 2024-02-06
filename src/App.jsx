import { BrowserRouter,Routes,Route } from 'react-router-dom' // COMO PRIMER PASO SE IMPORTA EL BROWSE ROUTER PARA QUE EL NAVEGADOR IDENTIFQUE QUE ESTE COMPONENTE SE VA A UTILIZAR
import { Login } from './pages/Login' // CADA COMPONENTE SE IMPORTA PARA MOSTRARLO EN LAS RUTAS
import { Profile } from './pages/Profile'
import { Register } from './componentes/Register'
import { Home } from './pages/Home'
import { Notifications } from './pages/Notifications'
import { Tweet } from './componentes/Tweet'
import {ComponentAuthContext} from './context/ContextValueAuth';


function App() {

  return (
    <>
    {/*Segundo paso: Se llama a BrowserRouter y dentro de el Se llama a Routes */}
    <BrowserRouter>
    <ComponentAuthContext>
      <Routes> {/*Dentro de las rutas se coloca cada ruta especifica a la cual accedemos*/}
        <Route path='/' element={<Login/>}/>             {/*PAGINA PRINCIPAL */}
        <Route path='/profile' element={<Profile/>}/>     {/*Perfil Principal */}
        <Route path='/register' element={<Register/>}/>   {/*Pagina de registro; Los 5 pasos del registro se hacen en esta misma ruta */} 
        <Route path='/home' element={<Home/>}/>           {/*Pagina de inicio al inciar sesión */}
        <Route path='/notifications' element={<Notifications/>}/> {/*Pagina de notificaciones */}
        <Route path='/tweet' element={<Tweet/>}/>         {/*Pagina para hacer tweets */}
      </Routes>
      </ComponentAuthContext>
    </BrowserRouter>
    </>
  )
}

export default App
