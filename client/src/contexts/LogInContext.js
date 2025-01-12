import React, { createContext, useEffect, useState } from "react";

export const LogInContext = createContext();
import Cookies from "js-cookie"; // Install js-cookie library for easy cookie handling

export function LoginConextProvider({ children }) {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    token: null,
  });

  // Load token from cookies on initial render
  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      setAuth({
        isLoggedIn: true,
        token,
      });
    }
  }, []);

  const login = (token) => {
    Cookies.set("authToken", token);
    setAuth({
      isLoggedIn: true,
      token,
    });
  };

  const logout = () => {
    Cookies.remove("authToken"); // Remove token from cookies
    setAuth({
      isLoggedIn: false,
      token: null,
    });
  };

  return (
    <LogInContext.Provider value={{ auth, login, logout }}>
      {children}
    </LogInContext.Provider>
  );
}

// Custom hook to use the AuthContext
