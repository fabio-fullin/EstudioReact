import MiComponente from "./MiComponente";

import { type ReactElement } from 'react';
import PruebaBoton from './PruebaBoton';
import PruebaGatitos from './PruebaGatitos';
import {GlobalProvider} from './global.provider'
import PruebaRickAndMorty from './PruebaRickAndMorty';


const App = () : ReactElement => {
  
  return (
    <>
    <div style={{width: '100%', textAlign: 'center'}}>
      <PruebaGatitos />
      
      <GlobalProvider>
        <PruebaBoton />
      </GlobalProvider>
    </div>
      <div>
        <MiComponente param1="este es el param1">
          <h3>Este es el children1</h3>
          <h3>Este es el children2</h3>
        </MiComponente>
      </div>

    <div>

      <PruebaRickAndMorty />
    </div>
    </>
  );
};

export default App;

