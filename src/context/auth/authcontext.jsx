/* eslint-disable no-unused-vars */
import { createContext } from "react";

export const User = {
  id: 0,
  email: "",
  password: "",
};

export const AuthContextType = {
  user: User || null,
  signin: (email, password) => Promise.resolve(true),
  signout: () => {},
};

export const AuthContext = createContext(null);
