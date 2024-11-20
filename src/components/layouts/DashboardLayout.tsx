import React from 'react';
import { Header } from '../Header';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const { logout } = useUser();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to landing page instead of login
  };

  return (
    <div className="min-h-screen">
      <Header onLogout={handleLogout} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        {children}
      </main>
    </div>
  );
};