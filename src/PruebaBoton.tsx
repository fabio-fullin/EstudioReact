import type { ReactElement } from "react";
import { Boton, ColorRed } from "./Boton";

const dimeHola = () => {
    alert("hola !!")
  }
const handleClick = () => {
    alert('handleclick')
  }

const PruebaBoton = () : ReactElement => {
    return (
        <>
        <ColorRed><Boton parentMethod={dimeHola}>My Boton Rojo</Boton></ColorRed>
        <Boton parentMethod={handleClick}> My Boton Normal</Boton>

        </>
    )
}


export default PruebaBoton;