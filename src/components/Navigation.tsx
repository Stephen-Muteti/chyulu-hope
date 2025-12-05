import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Logo from "@/assets/logo1.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY.current) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/programs", label: "Our Programs" },
    { to: "/donate", label: "Donate" },
    { to: "/contact", label: "Contact" },
  ];

  return (
      <nav
        className={`fixed top-[3rem] left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <NavLink to="/" className="flex items-center gap-2 font-bold text-xl">
              <img src={Logo} alt="RP" className="h-auto w-16" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Chyulu Hope
              </span>
            </NavLink>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className="text-foreground/80 hover:text-primary transition-smooth font-medium"
                  activeClassName="text-primary font-semibold"
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink to="/donate">
                <Button variant="hero" size="default">
                  Donate Now
                </Button>
              </NavLink>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    className="text-foreground/80 hover:text-primary transition-smooth font-medium py-2"
                    activeClassName="text-primary font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <NavLink to="/donate" onClick={() => setIsOpen(false)}>
                  <Button variant="hero" size="default" className="w-full">
                    Donate Now
                  </Button>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>
  );
};

export default Navigation;
