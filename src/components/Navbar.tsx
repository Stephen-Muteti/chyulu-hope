import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo1.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Programs", path: "/programs" },
  { name: "Donate", path: "/donate" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card/95 backdrop-blur-md shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="RP" className="h-auto w-16" />
            <span className="font-display text-xl">
              <span className="text-ocean font-semibold">Chyulu</span>{" "}
              <span className="text-navy font-bold">Hope</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "text-orange"
                    : "text-foreground/80 hover:text-ocean hover:bg-secondary/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/donate" className="ml-2">
              <Button variant="nav" size="sm">
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? "text-orange bg-secondary/50"
                    : "text-foreground/80 hover:bg-secondary/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-3">
              <Link to="/donate" onClick={() => setIsOpen(false)}>
                <Button variant="nav" className="w-full">
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
