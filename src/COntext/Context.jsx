import { createContext, useState } from "react"; 

export const countContext = createContext(null);


const ContextProvider = ({children}) => {
    const [ counter, setCounter] = useState(5)
  return (
    <countContext.Provider value={{counter, setCounter}}>
        {children}
    </countContext.Provider>
  )
}

export default ContextProvider
