import type { ReactElement, ReactNode } from "react"
import "./Boton.css"

interface Props {
  children: ReactNode,
  parentMethod: () => void
}

interface ChildrenProps {
  children: ReactElement
}

export const ColorRed = ({ children }: ChildrenProps) => {
  return (<div className="color-red">{children}</div>)
}

export const Boton = ({ children, parentMethod }: Props) : ReactElement => {
  return (
    <button className="custom-button" onClick={parentMethod}>
      {children}
    </button>
  )
}