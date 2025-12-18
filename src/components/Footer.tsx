import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import Logo from "@/assets/logo3.png";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="space-y-4">
                <div className="space-y-4 flex flex-col justify-start">
                <img src={Logo} alt="RP" className="h-auto w-full" />
              </div>
              </div>
            </Link>
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="text-orange italic">Light</span>
              <span className="text-white/80">the</span>
              <span className="text-white font-semibold">World</span>
              <span className="text-cyan">✦</span>
              <span className="text-sky italic">one by one</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Programs", path: "/programs" },
                { name: "Donate", path: "/donate" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sky/80 hover:text-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              {[
                "Health Initiatives",
                "Educational Support",
                "Nutritional Programs",
                "Community Workshops",
                "Mentorship Programs",
              ].map((program) => (
                <li key={program}>
                  <Link
                    to="/programs"
                    className="text-sky/80 hover:text-cyan transition-colors text-sm"
                  >
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-cyan mt-0.5" />
                <div className="text-sm text-sky/80">
                  <p>+254 714 262 174</p>
                  <p>+254 799 377 805</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-cyan mt-0.5" />
                <div className="text-sm text-sky/80">
                  <p>joshwambu992@gmail.com</p>
                  <p>danielndiku58@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan mt-0.5" />
                <span className="text-sm text-sky/80">Chyulu, Kenya</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-ocean/30 flex items-center justify-center hover:bg-cyan transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-ocean/30 flex items-center justify-center hover:bg-cyan transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-ocean/30 flex items-center justify-center hover:bg-cyan transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ocean/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-sky/60">
            <p>© {new Date().getFullYear()} Chyulu Hope Initiative. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-orange" /> for the children of Kenya
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
