
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={cn(
        "px-3 py-2 text-sm font-medium rounded-md hover:bg-teal-50 hover:text-teal-700 transition-colors",
        isActive ? "text-teal-700 bg-teal-50" : "text-gray-700"
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showRoomsDropdown, setShowRoomsDropdown] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-teal-600">KosanKita</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/">Home</NavLink>
            
            {/* Rooms Dropdown */}
            <div className="relative">
              <button 
                className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-teal-50 hover:text-teal-700 transition-colors flex items-center"
                onClick={() => setShowRoomsDropdown(!showRoomsDropdown)}
              >
                Rooms <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {showRoomsDropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 ring-1 ring-black ring-opacity-5">
                  <Link to="/rooms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">
                    All Rooms
                  </Link>
                  <Link to="/rooms?type=standard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">
                    Standard Rooms
                  </Link>
                  <Link to="/rooms?type=premium" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">
                    Premium Rooms
                  </Link>
                  <Link to="/rooms?type=luxury" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700">
                    Luxury Rooms
                  </Link>
                </div>
              )}
            </div>
            
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            
            <Button className="ml-4 bg-teal-600 hover:bg-teal-700">Book Now</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-3 px-2">
          <div className="pt-2 pb-3 space-y-1">
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            <Link to="/rooms" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded-md" onClick={closeMenu}>
              Rooms
            </Link>
            <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
            
            <Button className="w-full mt-4 bg-teal-600 hover:bg-teal-700">Book Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
