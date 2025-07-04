import type { User } from "firebase/auth";
import { createContext, useState } from "react"
const authContext = createContext({})
const authProvider = async ({ children }: { children: React.ReactNode }) => {
const[user, setUser] = useState<User|null>(null);
// The user state will hold the current authenticated user or null if not authenticated
// The setUser function will be used to update the user state
  const value = {user, setUser};
  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  )
}

export default authProvider
export { authContext }