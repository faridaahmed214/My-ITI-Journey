import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'sonner';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage on mount
    const savedUser = localStorage.getItem('techZoneUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('techZoneUser', JSON.stringify(userData));
  };

  const signup = (userData) => {
    // In a real app, this would hit an API. For now, we just save to localStorage.
    const users = JSON.parse(localStorage.getItem('techZoneUsers') || '[]');
    users.push(userData);
    localStorage.setItem('techZoneUsers', JSON.stringify(users));
    
    // Auto-login after signup
    login(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('techZoneUser');
    toast.info('Session terminated. Secure connection closed.');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
