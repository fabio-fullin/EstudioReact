
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import PruebaBoton from './PruebaBoton'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/boton',
    element: <PruebaBoton />
  }
])

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <div>
    <RouterProvider router={router} />
  </div>

  // </StrictMode>,
)
