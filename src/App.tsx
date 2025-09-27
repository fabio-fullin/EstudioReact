import MiComponente from "./MiComponente";

import { type ReactElement } from 'react';
import PruebaBoton from './PruebaBoton';
import PruebaGatitos from './PruebaGatitos';
import {GlobalProvider} from './global.provider'
import PruebaRickAndMorty from './PruebaRickAndMorty';
import PruebaUseFetch from "./PruebaUseFetch";
import CustomForm from "./CustomForm/CustomForm";
import PruebaUseCallback from "./PruebaUseCallback";


const App = () : ReactElement => {
  
  return (
    <>
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
        <h3>Este es el children2</h3>
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
    </>
  );
};

export default App;

