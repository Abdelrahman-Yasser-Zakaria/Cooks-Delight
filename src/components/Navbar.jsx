import { useState } from "react";
import { MagnifyingGlassIcon, UserIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../assets/icons/Logo Nav Bar.svg';
import logo2 from '../assets/images/Logo Nav Bar dark.png';

const Facebook = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Youtube = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 11.98 9.75 8.94 9.75 15.02" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Recipes", path: "/recipes" },
    { name: "Cooking Tips", path: "/tips" },
    { name: "About Us", path: "/about" },
  ];



  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/recipes?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsOpen(false);
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 lg:px-15 py-5 bg-[#F2EDE4] border-separate border-spacing-2   border-gray-100 sticky top-0 z-50 rounded-b-2xl">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 group shrink-0">

        <div className="flex flex-col -space-y-1.5">
          <img src={logo} alt="CooksDelight Logo" className="h-10 w-auto" />
        </div>
      </Link>

      {/* Links (Desktop) */}
      <ul className="hidden xl:flex items-center gap-10 text-[12px] font-bold text-gray-400 uppercase tracking-[0.15em]">
        {navLinks.map((link) => (
          <li key={link.name} className="relative group">
            <Link
              to={link.path}
              className={`hover:text-brand-dark transition-all duration-300 ${(location.pathname === link.path) ? "text-brand-dark" : ""
                }`}
            >
              {link.name}
            </Link>
            {location.pathname === link.path && (
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-brand-red rounded-full shadow-sm" />
            )}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 lg:gap-6">
        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 border border-gray-200 transition-all focus-within:bg-white focus-within:shadow-md focus-within:border-brand-orange/30">
          <MagnifyingGlassIcon className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            className="bg-transparent border-none outline-none text-[13px] ml-2 w-32 lg:w-48 text-brand-dark placeholder:text-gray-400 font-medium"
          />
        </div>

        {/* Login */}
        <Link
          to="/login"
          className="hidden md:flex items-center gap-2 bg-[#F29C33] text-white px-5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-[#EE6352] transition-colors shadow-lg shadow-black/10 active:scale-95"
        >
          <UserIcon className="w-4 h-4" />
          <span>Sign In</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="xl:hidden p-2.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          <Bars3Icon className="w-6 h-6 text-brand-dark" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-[#262522] text-white p-8 animate-in fade-in duration-300 flex flex-col overflow-y-auto">
          <div className="flex justify-between items-center mb-16">

            <div className="flex items-center gap-3">

              <div className="flex flex-col -space-y-1">


                <div className="flex flex-col -space-y-1.5">font-semibold font-weight: 600
                  <img src={logo2} alt="CooksDelight Logo" className="h-10 w-auto" />
                </div>

              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <XMarkIcon className="w-6 h-6 text-[#F29C33]" />
            </button>
          </div>

          <ul className="space-y-0 text-2xl font-black uppercase tracking-tighter mb-16  ">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-white/10 py-6 first:border-t ">
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-brand-orange transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 mb-16">
            <div className="bg-white/10 rounded-4xl flex items-center px-4 w-full">
              <MagnifyingGlassIcon className="w-6 h-6 text-white/50" />
              <input
                type="text"
                placeholder="Search.."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="bg-transparent border-none outline-none text-white py-5 ml-4  text-lg font-black"
              />
            </div>

          </div>

          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block w-full py-6 bg-white/20 text-center rounded-4xl text-sm font-black uppercase tracking-widest hover:bg-white/30 transition-all mb-16"
          >
            SIGN IN
          </Link>

          <div className="flex justify-center gap-10 mt-auto pt-12 pb-8 border-t border-white/5">
            <a href="#" className="text-white hover:text-[#F29C33] transition-all transform hover:scale-110 active:scale-95">
              <Facebook size={28} />
            </a>
            <a href="#" className="text-white hover:text-[#F29C33] transition-all transform hover:scale-110 active:scale-95">
              <Instagram size={28} />
            </a>
            <a href="#" className="text-white hover:text-[#F29C33] transition-all transform hover:scale-110 active:scale-95">
              <Youtube size={28} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



