
import { useState } from 'react';
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-tech-dark">
          <span className="text-tech-blue">Quan</span> Nguyen
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center p-2"
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        
        {/* Mobile menu */}
        <div className={cn(
          "absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}>
          <div className="flex flex-col space-y-4 px-4 py-6">
            <MobileNavLink href="#home" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink href="#about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink href="#experience" onClick={toggleMenu}>Experience</MobileNavLink>
            <MobileNavLink href="#skills" onClick={toggleMenu}>Skills</MobileNavLink>
            <MobileNavLink href="#education" onClick={toggleMenu}>Education</MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-gray-700 hover:text-tech-blue font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-full after:h-0.5 after:bg-tech-blue hover:after:right-0 after:transition-all"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  onClick,
  children 
}: { 
  href: string; 
  onClick?: () => void;
  children: React.ReactNode 
}) => (
  <a 
    href={href} 
    className="text-gray-700 hover:text-tech-blue font-medium text-lg py-1"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navigation;
