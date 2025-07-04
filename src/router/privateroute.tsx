import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebaseconfig";
import { useState } from "react";
import { useNavigate } from "react-router";

const privateroute = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null);
    const navigate = useNavigate();
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            console.log("User is signed out")
            navigate("/login");
            return;
        }
        else {
            console.log("User is signed in", user)
            setUser(user);
        }
    })
            {user?
                <div>
                    {children}
                </div>
            :
            <div>
                <h1>Loading...</h1>
            </div>
        
    }
}

export default privateroute