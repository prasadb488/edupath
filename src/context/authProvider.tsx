import type { User } from "firebase/auth";
import { useState } from "react";
import authContext from "./authContext";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const value = { user, setUser, loading, setLoading };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;
