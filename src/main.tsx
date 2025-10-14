
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Prueba2UseEffect from './components/Prueba2UseEffect'
import PruebaBotonConProvider from './components/PruebaBotonConProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/boton',
    element: <PruebaBotonConProvider />
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
