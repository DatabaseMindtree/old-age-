import "./nav.css";

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        {/* Logo — left */}
        <a className="nav__logo" href="/" aria-label="Old Age Home — home">
          <span className="nav__badge" aria-hidden="true">
            <svg viewBox="0 0 40 40" width="40" height="40">
              <circle cx="20" cy="23" r="8" fill="#fff" opacity="0.95" />
              <path
                d="M6 30 H34"
                stroke="#fff"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M20 6 V11 M9 11 L12 15 M31 11 L28 15 M4 22 H8 M32 22 H36"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </a>

        {/* Hidden checkbox drives the mobile menu (no JavaScript) */}
        <input type="checkbox" id="nav-toggle" className="nav__checkbox" />

        {/* Links — center */}
        <nav className="nav__menu" aria-label="Main navigation">
          <a className="nav__link" href="/">Home</a>
          <a className="nav__link" href="/about-us">About Us</a>
          <a className="nav__link" href="/employment">Employment</a>
          <a className="nav__link" href="/contact-us">Contact Us</a>
        </nav>

        {/* Name — right */}
        <a className="nav__name" href="/">
          <span className="nav__name-title">Old Age Home</span>
          <span className="nav__name-tagline">Care &amp; Comfort</span>
        </a>

        {/* Hamburger label toggles the checkbox */}
        <label className="nav__toggle" htmlFor="nav-toggle" aria-label="Toggle menu">
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
        </label>
      </div>
    </header>
  );
}
