import MiComponente from "./MiComponente";

import { type ReactElement } from 'react';
import PruebaBoton from './PruebaBoton';
import PruebaGatitos from './PruebaGatitos';
import {GlobalProvider} from './global.provider'
import PruebaRickAndMorty from './PruebaRickAndMorty';
import PruebaUseFetch from "./PruebaUseFetch";
import CustomForm from "./CustomForm/CustomForm";
import PruebaUseCallback from "./PruebaUseCallback";
// @ts-expect-error: PruebaNearScreen does not have TypeScript types or has incompatible types
import PruebaNearScreen from "./PruebaNearScreen";
import "./App.css"
import PruebaSuperFetch from "./PruebaSuperFetch";


const App = () : ReactElement => {
  
  return (
    <>
      <PruebaSuperFetch />
    <hr /> <hr /> <hr />
    <div style={{width: '100%', textAlign: 'center'}}>
      <PruebaGatitos />
      
      <GlobalProvider>
        <PruebaBoton />
      </GlobalProvider>
    </div>
    <hr />
    <div>
      <MiComponente param1="este es el param1">
        <h3 className='text-yellow-200'>Este es el children1 con estilos de tailwind</h3>
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

