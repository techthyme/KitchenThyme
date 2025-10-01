"use client";
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Session } from "@/types";

interface AuthState {
  session: Session;
}

type AuthAction =
  | { type: "LOGIN"; payload: string }
  | { type: "LOGOUT"; payload: string };

interface AuthContextType {
  authState: AuthState;
  login: (userId: string) => void;
  logout: (userId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      console.log("logging in...");
      return {
        session: {
          userId: "tomthing",
          isAuthenticated: true,
        },
      };
    case "LOGOUT":
      console.log("logging out...");
      return {
        session: {
          userId: "tomthing",
          isAuthenticated: false,
        },
      };
    default:
      return state;
  }
};

const initialState: AuthState = {
  session: {
    userId: "tomthing",
    isAuthenticated: true,
  },
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = (userId: string) => {
    dispatch({ type: "LOGIN", payload: userId });
  };

  const logout = (userId: string) => {
    dispatch({ type: "LOGOUT", payload: userId });
  };

  const value: AuthContextType = {
    authState: initialState,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
