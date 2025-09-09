
import { type ReactElement } from 'react';
import PruebaBoton from './PruebaBoton';
import PruebaGatitos from './PruebaGatitos';
import {GlobalProvider} from './global.context'


const App = () : ReactElement => {
  
  return (
    <>
    <div style={{width: '100%', textAlign: 'center'}}>
      <PruebaGatitos />
      
      <GlobalProvider>
        <PruebaBoton />
      </GlobalProvider>
    </div>
    </>
  );
};

export default App;

