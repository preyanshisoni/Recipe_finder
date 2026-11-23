
import { useState } from "react";
import {
  ChefHat,
  Search,
  Heart,
  Menu,
  X
} from "lucide-react";

import "./Navbar.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Explore", href: "#recipes" },
  { name: "Categories", href: "#categories" },
  { name: "About", href: "#about" }
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar__container">

        {/* Logo */}
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-icon">
            <ChefHat size={22} />
          </span>

          <span className="navbar__brand">
            Recipe<span>Hub.</span>
          </span>
        </a>

        {/* Navigation */}
        <div className="navbar__links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="navbar__actions">

          <button
            className="navbar__icon-btn"
            aria-label="Search"
          >
            <Search size={19} />
          </button>

          <button
            className="navbar__icon-btn"
            aria-label="Favorites"
          >
            <Heart size={19} />
          </button>

          <a href="#recipes" className="navbar__cta">
            Explore Now
          </a>

          <button
            className="navbar__mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="navbar__mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
