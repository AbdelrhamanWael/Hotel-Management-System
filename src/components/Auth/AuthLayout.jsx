import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import PasswordReset from './PasswordReset';

const AuthLayout = () => {
  const [authView, setAuthView] = useState('login'); // 'login', 'register', 'reset'

  const renderAuthForm = () => {
    switch (authView) {
      case 'login':
        return <LoginForm setAuthView={setAuthView} />;
      case 'register':
        return <RegisterForm setAuthView={setAuthView} />;
      case 'reset':
        return <PasswordReset setAuthView={setAuthView} />;
      default:
        return <LoginForm setAuthView={setAuthView} />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          {renderAuthForm()}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
