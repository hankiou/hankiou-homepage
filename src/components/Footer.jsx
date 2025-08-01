import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-neutral-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">hankiou.com</h3>
            <p className="text-neutral-500 text-sm">
              Developer portfolio and project showcase by Enzo GUENY.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-neutral-500 hover:text-neutral-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-500 hover:text-neutral-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-500 hover:text-neutral-300">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://hankiou.github.io/cv/" className="text-neutral-500 hover:text-neutral-300">
                  CV
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-neutral-500 hover:text-neutral-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-neutral-500 hover:text-neutral-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-500">
          <p>&copy; {currentYear} Enzo GUENY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;