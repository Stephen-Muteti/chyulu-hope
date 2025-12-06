import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import Logo from "@/assets/logo3.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="space-y-4 flex flex-col justify-start">
            <img src={Logo} alt="RP" className="h-auto w-full" />
          </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/about" className="hover:text-primary transition-smooth">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/programs" className="hover:text-primary transition-smooth">
                  Our Programs
                </NavLink>
              </li>
              <li>
                <NavLink to="/donate" className="hover:text-primary transition-smooth">
                  Donate
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-primary transition-smooth"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>+254 714 262 174</p>
                  <p>+254 799 377 805</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="break-all">
                  <p>joshwambu992@gmail.com</p>
                  <p>danielndiku58@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Chyulu, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div>
            <h4 className="font-semibold mb-4">Our Mission</h4>
            <p className="text-sm text-secondary-foreground/80">
              To empower vulnerable and needy children through education, basic needs provision, and community engagement.
            </p>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Chyulu Hope. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
