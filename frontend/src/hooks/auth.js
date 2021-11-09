import React, { useContext, createContext, useState, useCallback } from "react";

import api from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@Freelas:token");
    const user = localStorage.getItem("@Freelas:user");

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {};
  });

  const signIn = useCallback(async ({ login, password }) => {
    const response = await api.post("/sessions", {
      login,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem("@Freelas:token", token);
    localStorage.setItem("@Freelas:user", JSON.stringify(user));

    setData({ token, user });
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem("@Freelas:token");
    localStorage.removeItem("@Freelas:user");

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
