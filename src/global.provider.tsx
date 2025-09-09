import { useState, type ReactNode } from "react"
import { GlobalContext, EmptyGlobalState } from "./global.context"

interface GlobalProps {
    children: ReactNode
}
//aca va lo que se desea guardar
interface GlobalContextValueType {
    Numero1: number,
    Numero2: number,
    Nombre: string
}


export const GlobalProvider = ({children}: GlobalProps) => {
    const [value, setValue] = useState<GlobalContextValueType>(EmptyGlobalState)

    return (
        <GlobalContext.Provider value={{value, setValue}}>
            {children}
        </GlobalContext.Provider>
    )
}