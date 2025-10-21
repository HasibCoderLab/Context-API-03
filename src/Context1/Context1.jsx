import { Children, createContext, useState } from "react";

export const Context1 = createContext()



export const Context1Proverder = ({children}) => {
    const [a , setA] =  useState("Hello Wrold");
    return (
        
        <Context1.Provider value={[a , setA]}>
                 {children}
        </Context1.Provider>
        
    )
}

