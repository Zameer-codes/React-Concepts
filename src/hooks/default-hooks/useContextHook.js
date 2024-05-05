import { createContext, useContext } from 'react'

export const UseContextHook = () => {
    const value1 = "passing first value";
    const value2 = "passing second value";
    return(
        <contextCreation.Provider value={{value1, value2}}>
            <ConsumeContextComponent/>
        </contextCreation.Provider>
    )
}

const contextCreation = createContext();

const ConsumeContextComponent = () => {
    const {value1, value2} = useContext(contextCreation);
    console.log(value1, value2);
    return(
        <>
        </>
    )
}
