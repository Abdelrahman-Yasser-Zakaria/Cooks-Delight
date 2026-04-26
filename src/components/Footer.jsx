import { Link } from "react-router-dom";
import logoFooter from '../assets/images/Logo Footer.png';

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

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Recipes", path: "/recipes" },
    { name: "Cooking Tips", path: "/tips" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <footer className="px-4  pb-10 bg-[#F2EDE4]">
      <div className="max-w-8xl mx-auto bg-[#23211D] rounded-[30px] px-8 py-10 lg:px-20 lg:py-16 shadow-xl">


        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 pb-10 border-b border-white/10">


          <div className="flex items-center gap-3">

            <div className="flex flex-col leading-[1.1]">
              <img src={logoFooter} alt="Logo" className="w-full h-full object-contain" />

            </div>
          </div>

          {/* Navigation Links with Dividers */}
          <ul className="flex flex-wrap justify-center items-center text-white font-bold uppercase text-[13px] tracking-wider">
            {navLinks.map((link, i) => (
              <li key={link.name} className="flex items-center">
                <Link to={link.path} className="hover:text-gray-300 transition-colors px-4 md:px-6">
                  {link.name}
                </Link>
                {/* Vertical Divider - only shows between items */}
                {i < navLinks.length - 1 && (
                  <div className="h-4 w-[1px] bg-white/20" />
                )}
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-white">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a8.15 8.15 0 0 1-1.33-.92v7.17a7.25 7.25 0 0 1-1.17 3.91c-1.51 2.11-4.21 3.39-6.79 3.01-2.99-.41-5.41-3.12-5.41-6.17 0-3.18 2.5-5.96 5.67-6.12a6.76 6.76 0 0 1 3.25.57V10.2a3.25 3.25 0 0 0-1.81-.53c-2.02.01-3.69 1.95-3.41 3.95.21 1.48 1.6 2.7 3.1 2.5 1.5-.2 2.6-1.5 2.6-3V0z" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Youtube size={24} />
            </a>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 text-center">
          <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.25em]">
            Copyright: © 2024 Cooks Delight.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
