import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-secondary border-t border-default mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="mono-accent heading-5 mb-3">hankiou.com</h3>
            <p className="body-small">
              Developer portfolio and project showcase by Enzo GUENY.
            </p>
          </div>

          <div>
            <h4 className="heading-5 mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="body-small text-muted hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="body-small text-muted hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="body-small text-muted hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://hankiou.github.io/cv/" className="body-small text-muted hover:text-accent transition-colors">
                  CV
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="heading-5 mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="body-small text-muted hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="body-small text-muted hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider my-8"></div>

        <div className="text-center">
          <p className="mono-label">&copy; {currentYear} Enzo GUENY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
