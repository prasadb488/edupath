import { createContext } from "react"

const authContext = createContext({})
const authProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <authContext.Provider value={{}}>
      {children}
    </authContext.Provider>
  )
}

export default authProvider
export { authContext }