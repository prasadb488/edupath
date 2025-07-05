import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../config/firebaseconfig";
import { useState } from "react";
import { useNavigate } from "react-router";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();
    console.log("Checking authentication state...");
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
    });

    return user ? (
        <div>
            {children}
        </div>
    ) :  (
        <div>
            <h1>Loading...</h1>
        </div>
    );
}

export default PrivateRoute