import React from 'react'

const RegisterForm = ({ setAuthView }) => {
  const handleRegister = (e) => {
      e.preventDefault();
      // Simulate registration success and navigate to login
      alert('Registration successful!'); // Placeholder
      setAuthView('login');
      // TODO: Implement actual registration logic
  };

  return (
    <form onSubmit={handleRegister} className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Join Luxe Stay</h2>
      <p className="text-gray-500">Create your account to access exclusive deals.</p>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input 
          type="text" 
          required 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition" 
          placeholder="Jane Doe" 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input 
          type="email" 
          required 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition" 
          placeholder="you@example.com" 
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input 
          type="password" 
          required 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition" 
          placeholder="•••••••• (Min 8 characters)" 
        />
      </div>

      <button 
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-500/50"
      >
        Register Account
      </button>

      <p className="text-center text-sm text-gray-600">
        Already have an account? 
        <button 
          type="button" 
          onClick={() => setAuthView('login')}
          className="font-semibold text-blue-600 hover:text-blue-800 ml-1 transition"
        >
          Sign In
        </button>
      </p>
    </form>
  );
}

export default RegisterForm