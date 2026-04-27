import { useState } from 'react';
import axios from 'axios';
import loginImage from '../assets/images/login-image.png';
import logo from '../assets/icons/Logo Nav Bar.svg';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!username) errors.username = 'Username is required';
    if (!password) errors.password = 'Password is required';
    return errors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    setValidationErrors({});
    setLoading(true);

    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
        expiresInMins: 30,
      }, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Login successful:', response.data);
      alert(`Welcome ${response.data.firstName}!`);
      navigate("/");
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] flex flex-col font-sans text-[#262522]">
      {/* Header (Logo) */}
      <header className="p-6 md:px-12">
        <div className="flex justify-between items-center">
          <img src={logo} alt="CooksDelight Logo" className="h-10 w-auto" />
          <div className="md:hidden">
            {/* Hamburger Menu icon for mobile as seen in design */}
            <button className="p-2 bg-gray-200 rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content: Card */}
      <main className="grow flex items-center justify-center p-4 md:p-8">
        <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm flex flex-col md:flex-row min-h-150">
          {/* Left Side: Image (Hidden on mobile) */}
          <div className="hidden md:block md:w-1/2 relative min-h-full">
            <img
              src={loginImage}
              alt="Cooking background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12">
            <div className="max-w-md w-full mx-auto text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-center">LOG IN</h1>
              <p className="text-gray-500 mb-10 text-center text-lg leading-relaxed">
                Welcome back to your kitchen. Log in to access your saved recipes, favorite dishes, and personal cooking space.
              </p>

              {error && (
                <div className="mb-6 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm text-left">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-6 text-left">
                <div>
                  <label className="block text-sm font-bold mb-2 tracking-wider" htmlFor="username">
                    USERNAME
                  </label>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={`w-full px-5 py-4 rounded-2xl border bg-[#F9F9F9] focus:outline-none focus:ring-2 transition-all ${validationErrors.username
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-gray-300 focus:ring-orange-200 focus:border-[#F29C33]'
                      }`}
                  />
                  {validationErrors.username && (
                    <p className="mt-1 text-xs text-red-500">{validationErrors.username}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 tracking-wider" htmlFor="password">
                    PASSWORD
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-5 py-4 rounded-2xl border bg-[#F9F9F9] focus:outline-none focus:ring-2 transition-all ${validationErrors.password
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-gray-300 focus:ring-orange-200 focus:border-[#F29C33]'
                      }`}
                  />
                  {validationErrors.password && (
                    <p className="mt-1 text-xs text-red-500">{validationErrors.password}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 bg-[#F29C33] hover:bg-[#e08b22] text-black font-bold text-lg rounded-2xl transition-all shadow-md active:scale-[0.98] disabled:opacity-50 mt-4 uppercase"
                >
                  {loading ? 'Logging in...' : 'SIGN IN NOW!'}
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-300">
                <p className="text-center text-xs font-bold tracking-widest text-gray-800 uppercase">
                  DON'T HAVE AN ACCOUNT?{' '}
                  <a href="#" className="text-[#F29C33] hover:underline">
                    CREATE ONE NOW
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
