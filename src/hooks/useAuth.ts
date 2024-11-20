import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

export const useAuth = () => {
  const { user, login, logout } = useUser();
  const navigate = useNavigate();

  const handleLogin = useCallback(
    (email: string, password: string) => {
      const success = login(email, password);
      if (success) {
        navigate('/app');
      }
      return success;
    },
    [login, navigate]
  );

  const handleLogout = useCallback(() => {
    logout();
    navigate('/');
  }, [logout, navigate]);

  return {
    user,
    login: handleLogin,
    logout: handleLogout,
    isAuthenticated: !!user,
  };
};