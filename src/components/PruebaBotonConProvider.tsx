import React from 'react'
import { GlobalProvider } from './global.provider'
import PruebaBoton from './PruebaBoton'

const PruebaBotonConProvider = () => {
  return (
    <>
    <h3>PruebaBotonConProvider</h3>
    <GlobalProvider>
        <PruebaBoton />
      </GlobalProvider>
    </>
  )
}

export default PruebaBotonConProvider