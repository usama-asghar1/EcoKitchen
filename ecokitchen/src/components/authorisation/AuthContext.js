import React, { createContext, useState, useEffect, useContext } from "react";
import { supabase } from "../supabase/supabaseClient.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get current session object from Supabase Auth
    const session = supabase.auth.session;

    // Update user in state if there is a current session
    if (session && session.user) {
      setUser(session.user);
    } else {
      setUser(null);
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session && session.user) {
          setUser(session.user);
        } else {
          setUser(null);
        }
      }
    );

    return () => {
      if (authListener) {
        authListener.unsubscribe();
      }
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
