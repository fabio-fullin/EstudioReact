
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Prueba2UseEffect from './components/Prueba2UseEffect'
import PruebaBotonConProvider from './components/PruebaBotonConProvider'
import PruebaAPIS from './components/PruebaAPIS'
// @ts-expect-error Error
import PruebaNearScreen from './components/PruebaNearScreen'
import PruebaRickAndMorty from './PruebaRickAndMorty'
import PruebaUseFetch from './PruebaUseFetch'
import PruebaBoton from './components/PruebaBoton'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/pruebaboton',
    element: <PruebaBoton />
  },
  {
    path: '/pruebabotonconprovider',
    element: <PruebaBotonConProvider />
  },
  {
    path: '/prueba2useeffect',
    element: <Prueba2UseEffect />
  },
  {
    path: '/pruebaapis',
    element: <PruebaAPIS />
  },
  {
    path: '/pruebarickandmorty',
    element: <PruebaRickAndMorty />
  },
  {
    path: '/pruebausefetch',
    element: <PruebaUseFetch />
  },
    {
    path: '/pruebanearscreen',
    element: <PruebaNearScreen />
  }

])

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <div>
    <RouterProvider router={router} />
  </div>

  // </StrictMode>,
)
