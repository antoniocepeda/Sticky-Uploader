import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { Dashboard } from './components/Dashboard';
import { LandingPage } from './components/LandingPage';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { PrivacyPage } from './components/pages/PrivacyPage';
import { TermsPage } from './components/pages/TermsPage';
import { ContactPage } from './components/pages/ContactPage';
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider, useUser } from './contexts/UserContext';
import { CustomCursor } from './components/CustomCursor';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  return user ? <>{children}</> : <Navigate to="/login" />;
}

function AppContent() {
  const { user } = useUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/app" /> : <LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={user ? <Navigate to="/app" /> : <LoginPage />} />
        <Route path="/signup" element={user ? <Navigate to="/app" /> : <SignupPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <CustomCursor />
    </BrowserRouter>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;