import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/Myapp";

export const ContextAuth = createContext(null);

export const ComponentAuthContext = ({ children }) => {
  const navigate = useNavigate();
  console.log(auth.currentUser);

  const verification = () => {
    useEffect(() => {
      if (!auth.currentUser) {
        navigate("/");
      }
    }, []);
  };

  return (
    <ContextAuth.Provider value={{ verification }}>
      {children}
    </ContextAuth.Provider>
  );
};
