// src/contexts/AuthContext.tsx

import { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextValue {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
