import { useState, type ReactNode } from "react"
import { GlobalContext, EmptyGlobalState, type GlobalContextValueType } from "./global.context"

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