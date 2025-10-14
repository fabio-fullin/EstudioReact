import type { ReactElement, ReactNode } from "react"
import "./Boton.css"
import { useGlobalContext } from "./global.context"

interface Props {
  children: ReactNode,
  parentMethod: () => void
}

/* 
si tengo una interfaz que solo quiero sacar una prop puedo hacer esto:
Omit<T, K>: Selecciona todas las propiedades de T EXCEPTO las especificadas en K
Pick<T, K>: Selecciona SOLO las propiedades de T especificadas en K
interface Persona {
  nombre: string;
  edad: number;
  email: string;
  direccion: string;
}

// Omit: excluye 'email' y 'direccion'
type InfoBasica = Omit<Persona, 'email' | 'direccion'>;
// Equivale a: { nombre: string; edad: number; }

// Pick: selecciona solo 'nombre' y 'edad'  
type InfoBasicaPick = Pick<Persona, 'nombre' | 'edad'>;
// Equivale a: { nombre: string; edad: number; }
*/

interface ChildrenProps {
  children: ReactElement
}

export const ColorRed = ({ children }: ChildrenProps) => {
  const {value: valor} = useGlobalContext()

  return (<div className="color-red">{valor.Numero1}/{valor.Numero2}/{valor.Nombre} =  {children}</div>)
}



export const Boton = ({ children, parentMethod }: Props) : ReactElement => {
  const {setValue: setValor} = useGlobalContext()

  const handleClick = () => {
  setValor({Numero1: 2, Numero2: 6, Nombre: "chau"})
  parentMethod()
}
  return (
    <button className="custom-button" onClick={handleClick}>
      {children}
    </button>
  )
}