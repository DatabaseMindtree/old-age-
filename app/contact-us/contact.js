import "./contact.css";

export default function Contact() {
  return (
    <>
      <section className="page-banner">
        <p className="page-banner__eyebrow">Contact</p>
        <h1 className="page-banner__title">Let us help you explore your next step</h1>
        <p className="page-banner__sub">
          Whether you are beginning to look at care options or need to discuss an
          upcoming move, we welcome your enquiry.
        </p>
      </section>

      <div className="page contact__grid">
        {/* Contact details */}
        <div className="contact__info">
          <h2 className="h-serif contact__h">Get in touch</h2>
          <p className="contact__intro">
            Contact us to talk about care needs, current availability or
            arranging a visit.
          </p>
          <ul className="contact__list">
            <li className="contact__item">
              <span className="contact__icon" aria-hidden="true">📍</span>
              <div>
                <span className="contact__label">Address</span>
                <span className="contact__value">7 Tui Terrace, Tairua 3508</span>
              </div>
            </li>
            <li className="contact__item">
              <span className="contact__icon" aria-hidden="true">📞</span>
              <div>
                <span className="contact__label">Telephone</span>
                <a className="contact__value contact__link" href="tel:078648720">
                  07 864 8720
                </a>
              </div>
            </li>
            <li className="contact__item">
              <span className="contact__icon" aria-hidden="true">✉️</span>
              <div>
                <span className="contact__label">Email</span>
                <a
                  className="contact__value contact__link"
                  href="mailto:care@tairuaresidentialcare.co.nz"
                >
                  care@tairuaresidentialcare.co.nz
                </a>
              </div>
            </li>
          </ul>

          <div className="contact__map" role="img" aria-label="Map placeholder">
            Map placeholder — embed your location here later
          </div>
        </div>

        {/* Enquiry form (placeholder, not wired up yet) */}
        <div className="contact__form-wrap">
          <h2 className="h-serif contact__h">Make an enquiry</h2>
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
              <span>Telephone</span>
              <input type="tel" name="telephone" placeholder="Your phone number" />
            </label>
            <label className="contact__field">
              <span>Preferred contact method</span>
              <select name="preferred" defaultValue="">
                <option value="" disabled>
                  Choose one
                </option>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
              </select>
            </label>
            <label className="contact__field">
              <span>What would you like to discuss</span>
              <textarea
                name="message"
                rows={4}
                placeholder="A short summary of your enquiry"
              />
            </label>
            <button type="submit" className="contact__submit">
              Make an Enquiry
            </button>
            <p className="contact__hint">
              Please include general enquiry details only. We can explain how to
              share detailed care information when we speak with you.
            </p>
          </form>
        </div>
      </div>

      {/* FAQ */}
      <section className="section--muted faq">
        <div className="faq__inner">
          <p className="eyebrow">Good to Know</p>
          <h2 className="h-serif faq__title">Frequently asked questions</h2>

          <details className="faq__item">
            <summary>What types of care do you offer?</summary>
            <p>
              Tairua Residential Care offers rest home and hospital-level aged
              care. Contact us to discuss individual needs and whether our
              service is suitable.
            </p>
          </details>

          <details className="faq__item">
            <summary>Can we visit before making a decision?</summary>
            <p>
              Yes. Contact us to arrange a visit and discuss any particular
              questions you would like the team to cover.
            </p>
          </details>

          <details className="faq__item">
            <summary>How do we know which level of care is needed?</summary>
            <p>
              A needs assessment helps identify the appropriate level of support.
              Our team can explain what assessment information is needed when
              enquiring about a place.
            </p>
          </details>

          <details className="faq__item">
            <summary>Are places available now?</summary>
            <p>
              Availability changes. Please contact us for current information and
              to discuss your preferred timing.
            </p>
          </details>

          <details className="faq__item">
            <summary>How much does care cost?</summary>
            <p>
              Costs depend on the care arrangements, funding eligibility and any
              agreed additional services. Please contact us for current fee
              information. We will explain the charges relevant to the proposed
              admission before an agreement is signed.
            </p>
          </details>

          <details className="faq__item">
            <summary>How are family and whānau involved?</summary>
            <p>
              We encourage involvement according to the resident’s wishes and
              consent. Speak with us about preferred contacts, communication
              arrangements and participation in care discussions.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
