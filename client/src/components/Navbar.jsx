// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import { FaTicketAlt } from 'react-icons/fa';

// const Navbar = () => {
//     const { user, logout } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         logout();
//         navigate('/login');
//     };

//     return (
//         <nav className="bg-gray-900 shadow-lg">
//             <div className="container mx-auto px-4">
//                 <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
//                     <Link to="/" className="text-white text-2xl font-bold flex items-center gap-2">
//                         <FaTicketAlt /> Eventora
//                     </Link>
//                     <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
//                         <Link to="/" className="text-gray-200 hover:text-white transition cursor-pointer">Events</Link>
//                         {user ? (
//                             <>
//                                 <Link to={user.role === 'admin' ? '/admin' : '/dashboard'} className="text-gray-200 hover:text-white transition">Dashboard</Link>
//                                 <button onClick={handleLogout} className="bg-gray-700 hover:bg-black text-white px-4 py-2 rounded-md transition">Logout</button>
//                             </>
//                         ) : (
//                             <>
//                                 <Link to="/login" className="text-gray-200 hover:text-white transition">Login</Link>
//                                 <Link to="/register" className="bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md font-semibold transition">Sign Up</Link>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaTicketAlt } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">

          {/* Logo */}
          <Link
            to="/"
            className="text-white text-2xl font-bold flex items-center gap-2"
          >
            <FaTicketAlt />
            Eventora
          </Link>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">

            {/* Events */}
            <Link
              to="/"
              className={`transition-all duration-300 ${
                location.pathname === "/"
                  ? "text-white font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Events
            </Link>

            {user ? (
              <>
                {/* Dashboard */}
                <Link
                  to={user.role === 'admin' ? '/admin' : '/dashboard'}
                  className={`transition-all duration-300 ${
                    location.pathname === "/admin" ||
                    location.pathname === "/dashboard"
                      ? "text-white font-semibold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Dashboard
                </Link>

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="bg-gray-700 hover:bg-black text-white px-4 py-2 rounded-md transition-all duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Login */}
                <Link
                  to="/login"
                  className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
                    location.pathname === "/login"
                      ? "bg-white text-black"
                      : "bg-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  Login
                </Link>

                {/* Register */}
                <Link
                  to="/register"
                  className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
                    location.pathname === "/register"
                      ? "bg-white text-black"
                      : "bg-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;