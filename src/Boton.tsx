import type { ReactElement, ReactNode } from "react"
import "./Boton.css"
import { useGlobalContext } from "./global.context"

interface Props {
  children: ReactNode,
  parentMethod: () => void
}

interface ChildrenProps {
  children: ReactElement
}

export const ColorRed = ({ children }: ChildrenProps) => {
  const {value: valor} = useGlobalContext()

  return (<div className="color-red">{valor}: {children}</div>)
}



export const Boton = ({ children, parentMethod }: Props) : ReactElement => {
  const {setValue: setValor} = useGlobalContext()

  const handleClick = () => {
  setValor(2)
  parentMethod()
}
  return (
    <button className="custom-button" onClick={handleClick}>
      {children}
    </button>
  )
}