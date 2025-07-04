import type { User } from "firebase/auth";
import { createContext } from "react";
type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};
const authContext = createContext<AuthContextType>({
    user: null,
    setUser: () => {}, 
});

export default authContext