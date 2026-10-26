import { createContext } from "react"

export type ContxtCartCountType = {
    contextCartCount: number;
   setContextCartCount: (contxtCartCount: number) => void;
}

export const ContextCartCount = createContext<ContxtCartCountType>(
    {
        contextCartCount: 0,
        setContextCartCount: () => {}
    }
)