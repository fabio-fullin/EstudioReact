
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import PruebaBoton from './PruebaBoton'
import {PruebaUseEffect} from './PruebaUseEffect' //si pongo PruebaUseEffect sin {} busca el default export
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/boton',
    element: <PruebaBoton />
  },
  {
    path: '/pruebauseeffect',
    element: <PruebaUseEffect />
  }
])

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <div>
    <RouterProvider router={router} />
  </div>

  // </StrictMode>,
)
