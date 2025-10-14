import React from 'react'
import { GlobalProvider } from './global.provider'
import PruebaBoton from './PruebaBoton'

const PruebaBotonConProvider = () => {
  return (
    <>
    <GlobalProvider>
        <PruebaBoton />
      </GlobalProvider>
    </>
  )
}

export default PruebaBotonConProvider