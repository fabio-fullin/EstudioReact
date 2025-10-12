
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import PruebaBoton from './components/PruebaBoton'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Prueba2UseEffect from './components/Prueba2UseEffect'

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
    path: '/prueba2useeffect',
    element: <Prueba2UseEffect />
  }
])

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <div>
    <RouterProvider router={router} />
  </div>

  // </StrictMode>,
)
