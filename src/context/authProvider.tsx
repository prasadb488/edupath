import type { User } from "firebase/auth";
import { useState } from "react"
import authContext from "./authContext";

const AuthProvider =  ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const value = { user, setUser };
  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider;
