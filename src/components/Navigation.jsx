import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 py-2">
      <nav className="card max-w-6xl !p-2">
        <div className="flex items-center justify-between px-4">
          <NavLink to="/" className="mono-accent heading-5">
            hankiou.com
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/portfolio" className="nav-link">
              Portfolio
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:!hidden btn btn-ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i
              className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}
            ></i>
          </button>
          <div className="hidden md:!block" />
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="px-4 pb-4">
            <div className="divider my-2"></div>
            <div className="space-y-2">
              <NavLink
                to="/"
                className="nav-link block"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/portfolio"
                className="nav-link block"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
