import { createContext, useContext } from "react";

//aca va lo que se desea guardar
export interface GlobalContextValueType {
    Numero1: number,
    Numero2: number,
    Nombre: string
}

//aca inicializacion
export const EmptyGlobalState: GlobalContextValueType = {Numero1: 0, Numero2: 2, Nombre: "hola"}

interface GlobalContextType {
    value: GlobalContextValueType
    setValue: React.Dispatch<React.SetStateAction<GlobalContextValueType>>
}

export const GlobalContext = createContext<GlobalContextType>({
    value: EmptyGlobalState,
    setValue: () => {}
})



export const useGlobalContext = () => {
    const context = useContext(GlobalContext)
    if (!context.value)
         throw new Error("GlobalContext deber ser usando dentro de GlobalProvider")
    return context
}