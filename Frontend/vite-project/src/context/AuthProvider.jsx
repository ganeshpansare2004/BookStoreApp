import { useState } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");

  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : null
  );



  return (
    <AuthContext.Provider value={[authUser, setAuthUser ]}>
      {children}
    </AuthContext.Provider>
  );
}

