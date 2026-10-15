import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col footer__brand">
          <span className="footer__name">Tairua Residential Care</span>
          <p className="footer__about">
            Rest home and hospital-level aged care in Tairua, on the Coromandel
            Peninsula. We welcome enquiries and visits.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            <li><a className="footer__link" href="/">Home</a></li>
            <li><a className="footer__link" href="/about-us">About Us</a></li>
            <li><a className="footer__link" href="/our-care">Our Care</a></li>
            <li><a className="footer__link" href="/living-here">Living Here</a></li>
            <li><a className="footer__link" href="/moving-in">Moving In</a></li>
            <li><a className="footer__link" href="/contact-us">Contact</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__contact">
            <li>7 Tui Terrace, Tairua 3508</li>
            <li><a className="footer__link" href="tel:078648720">07 864 8720</a></li>
            <li>
              <a className="footer__link" href="mailto:care@tairuaresidentialcare.co.nz">
                care@tairuaresidentialcare.co.nz
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <span>© 2026 Tairua Residential Care. All rights reserved.</span>
        <span>
          Preparing for a planned management transition to Olivet Residential
          Care Limited.
        </span>
      </div>
    </footer>
  );
}
