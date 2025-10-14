import MiComponente from "./MiComponente";

import { type ReactElement } from 'react';
import PruebaBoton from './components/PruebaBoton';
import PruebaGatitos from './components/PruebaGatitos';
import {GlobalProvider} from './components/global.provider'
import PruebaRickAndMorty from './PruebaRickAndMorty';
import PruebaUseFetch from "./PruebaUseFetch";
import CustomForm from "./CustomForm/CustomForm";
import PruebaUseCallback from "./PruebaUseCallback";
// @ts-expect-error Error
import PruebaNearScreen from "./components/PruebaNearScreen";
import "./App.css"


const App = () : ReactElement => {
  
  return (
    <>
    <a href='/'>Home</a><br />
      <a href='/boton'>Prueba Boton</a><br />
      <a href='/prueba2useeffect'>Prueba2Effect</a><br />
    <div style={{width: '100%', textAlign: 'center'}}>
      
      <PruebaGatitos />
      
      <GlobalProvider>
        <PruebaBoton />
      </GlobalProvider>
    </div>
    <hr />
    <div>
      <h2 style={{"fontWeight": "bolder"}} className='underline'>MiComponente</h2>
      <MiComponente param1="este es el param1">
        <h3 className='text-yellow-400'>Este es el children1 con estilos de tailwind</h3>
        <h3 className='bg-menta-500 text-mierda' style={{color: 'var(--lamierda)'}} >Este es el children2</h3> 
        {/* Tambien se puede usar la clase colormierda */}
      </MiComponente>
    </div>
    <hr />
    <div>

      <PruebaRickAndMorty />
    </div>
    <hr />
    <div>
      <PruebaUseFetch />
    </div>
    <hr />
    <div className='bg-gray-700 p-2'>
      <br></br>
      <CustomForm />
    </div>
    <hr/>
    <PruebaUseCallback />
    <hr/>
    <PruebaNearScreen />
    </>
  );
};

export default App;

