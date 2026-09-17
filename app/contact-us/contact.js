import "./contact.css";

export default function Contact() {
  return (
    <>
      <section className="page-banner">
        <p className="page-banner__eyebrow">Contact Us</p>
        <h1 className="page-banner__title">We&apos;d love to hear from you</h1>
        <p className="page-banner__sub">
          Placeholder text — invite families to call, email or visit. Replace
          the details below with your real contact information.
        </p>
      </section>

      <div className="page contact__grid">
        {/* Contact details */}
        <div className="contact__info">
          <h2 className="h-serif contact__h">Get in touch</h2>
          <ul className="contact__list">
            <li className="contact__item">
              <span className="contact__icon" aria-hidden="true">📍</span>
              <div>
                <span className="contact__label">Address</span>
                <span className="contact__value">
                  123 Placeholder Street, Your City, State 000000
                </span>
              </div>
            </li>
            <li className="contact__item">
              <span className="contact__icon" aria-hidden="true">📞</span>
              <div>
                <span className="contact__label">Phone</span>
                <span className="contact__value">+00 00000 00000</span>
              </div>
            </li>
            <li className="contact__item">
              <span className="contact__icon" aria-hidden="true">✉️</span>
              <div>
                <span className="contact__label">Email</span>
                <span className="contact__value">hello@example.com</span>
              </div>
            </li>
            <li className="contact__item">
              <span className="contact__icon" aria-hidden="true">🕐</span>
              <div>
                <span className="contact__label">Visiting Hours</span>
                <span className="contact__value">
                  Mon – Sun, 9:00 AM – 6:00 PM
                </span>
              </div>
            </li>
          </ul>

          <div className="contact__map" role="img" aria-label="Map placeholder">
            Map placeholder — embed your location here later
          </div>
        </div>

        {/* Contact form (placeholder, not wired up yet) */}
        <div className="contact__form-wrap">
          <h2 className="h-serif contact__h">Send a message</h2>
          <form className="contact__form">
            <label className="contact__field">
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label className="contact__field">
              <span>Email</span>
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
            <label className="contact__field">
              <span>Phone</span>
              <input type="tel" name="phone" placeholder="Your phone number" />
            </label>
            <label className="contact__field">
              <span>Message</span>
              <textarea name="message" rows={5} placeholder="How can we help?" />
            </label>
            <button type="submit" className="contact__submit">
              Send Message
            </button>
            <p className="contact__hint">
              This form is a placeholder and doesn&apos;t send anything yet.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
