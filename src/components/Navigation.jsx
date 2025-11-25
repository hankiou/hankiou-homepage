import { Link } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 px-4 py-2">
      <nav className="card max-w-6xl mx-auto !p-2">
        <div className="flex items-center justify-between px-4">
          <Link to="/" className="mono-accent heading-5">
            hankiou.com
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden btn btn-ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i
              className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}
            ></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="px-4 pb-4">
            <div className="divider my-2"></div>
            <div className="space-y-2">
              <Link
                to="/"
                className="nav-link block"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="nav-link block"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="nav-link block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="divider my-2"></div>
              <Link
                to="/privacy"
                className="nav-link block body-small"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="nav-link block body-small"
                onClick={() => setIsMenuOpen(false)}
              >
                Terms
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
