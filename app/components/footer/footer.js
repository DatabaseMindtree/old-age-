import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col footer__brand">
          <span className="footer__name">Old Age Home</span>
          <p className="footer__about">
            Placeholder text — a short line about your home and the care you
            provide. Edit this later.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            <li><a className="footer__link" href="/">Home</a></li>
            <li><a className="footer__link" href="/about-us">About Us</a></li>
            <li><a className="footer__link" href="/employment">Employment</a></li>
            <li><a className="footer__link" href="/contact-us">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__contact">
            <li>123 Placeholder Street, Your City</li>
            <li>+00 00000 00000</li>
            <li>hello@example.com</li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <span>© 2026 Old Age Home. All rights reserved.</span>
        <span>Placeholder footer — content to be updated.</span>
      </div>
    </footer>
  );
}
