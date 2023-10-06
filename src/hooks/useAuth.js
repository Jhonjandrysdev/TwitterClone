import { useContext } from "react";
import { ContextAuth } from "../context/ContextValueAuth";

export const useAuth = () => {
  const context = useContext(ContextAuth);
  if (!context) throw new Error("No existe valor");
  return context;
};
