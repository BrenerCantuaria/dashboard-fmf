import { createContext } from "react";

export const User = {
  id: 0,
  email: "",
  password: ""
};

export const AuthContextType = {
  user: User,
  signin: (email,password) => Promise.resolve(true),
  signout: () => {}
};

export const AuthContext = createContext(AuthContextType);
