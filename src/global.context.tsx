import { createContext, useContext, useState, type ReactNode } from "react";

//aca va lo que se desea guardar
interface GlobalContextValueType {
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

interface GlobalProps {
    children: ReactNode
}

export const GlobalProvider = ({children}: GlobalProps) => {
    const [value, setValue] = useState<GlobalContextValueType>(EmptyGlobalState)

    return (
        <GlobalContext.Provider value={{value, setValue}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext)
    // if (context.value === 0)
    //     throw new Error("GlobalContext deber ser usando dentro de GlobalProvider")
    return context
}