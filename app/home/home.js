/* eslint-disable @next/next/no-img-element */
import "./home.css";

export default function Home() {
  return (
    <>
      {/* ---- Hero slideshow (auto-rotating, pure CSS) ---- */}
      <section className="hero" aria-label="Featured">
        <div className="hero__slides">
          <div className="hero__slide hero__slide--1">
            <img className="hero__img" src="/img/old-4.jpeg" alt="A warm place to call home" />
            <div className="hero__overlay" />
            <div className="hero__caption">
              <h1 className="hero__title">A Warm Place to Call Home</h1>
              <p className="hero__text">
                Compassionate care and comfort for every stage of life.
              </p>
              <a className="hero__cta" href="/contact-us">Get in Touch</a>
            </div>
          </div>

          <div className="hero__slide hero__slide--2">
            <img className="hero__img" src="/img/old-3.webp" alt="Living the golden years, well" />
            <div className="hero__overlay" />
            <div className="hero__caption">
              <h1 className="hero__title">Living the Golden Years, Well</h1>
              <p className="hero__text">
                Comfortable rooms, nutritious meals, and friendly company.
              </p>
              <a className="hero__cta" href="/contact-us">Get in Touch</a>
            </div>
          </div>

          <div className="hero__slide hero__slide--3">
            <img className="hero__img" src="/img/old-1.jpg" alt="Care you can trust" />
            <div className="hero__overlay" />
            <div className="hero__caption">
              <h1 className="hero__title">Care You Can Trust</h1>
              <p className="hero__text">
                Trained staff and round-the-clock support, every day.
              </p>
              <a className="hero__cta" href="/contact-us">Get in Touch</a>
            </div>
          </div>
        </div>

        <div className="hero__dots" aria-hidden="true">
          <span className="hero__dot hero__dot--1" />
          <span className="hero__dot hero__dot--2" />
          <span className="hero__dot hero__dot--3" />
        </div>
      </section>

      {/* ---- Welcome intro ---- */}
      <section className="section section--intro">
        <p className="eyebrow">Welcome to Old Age Home</p>
        <h2 className="section__title">
          A caring community where seniors feel at home
        </h2>
        <p className="section__lead">
          This is placeholder text. Add a short, warm introduction about your
          home here — who you are, the care you provide, and what makes your
          community special. You can edit this later with your real content.
        </p>
      </section>

      {/* ---- Services ---- */}
      <section className="section section--muted">
        <div className="section__head">
          <p className="eyebrow">What We Offer</p>
          <h2 className="section__title">Our Care &amp; Facilities</h2>
        </div>
        <div className="cards">
          <article className="card">
            <span className="card__icon" aria-hidden="true">🩺</span>
            <h3 className="card__title">24/7 Medical Care</h3>
            <p className="card__text">
              Trained nurses and on-call doctors looking after health, day and
              night.
            </p>
          </article>
          <article className="card">
            <span className="card__icon" aria-hidden="true">🍲</span>
            <h3 className="card__title">Nutritious Meals</h3>
            <p className="card__text">
              Balanced, dietician-approved meals prepared fresh, three times a
              day.
            </p>
          </article>
          <article className="card">
            <span className="card__icon" aria-hidden="true">🛏️</span>
            <h3 className="card__title">Comfortable Rooms</h3>
            <p className="card__text">
              Clean, cozy private and shared rooms designed for safety and rest.
            </p>
          </article>
          <article className="card">
            <span className="card__icon" aria-hidden="true">🎨</span>
            <h3 className="card__title">Daily Activities</h3>
            <p className="card__text">
              Yoga, music, games and social events to keep every day joyful.
            </p>
          </article>
        </div>
      </section>

      {/* ---- Stats band ---- */}
      <section className="stats">
        <div className="stat">
          <span className="stat__value">15+</span>
          <span className="stat__label">Years of Care</span>
        </div>
        <div className="stat">
          <span className="stat__value">200+</span>
          <span className="stat__label">Happy Residents</span>
        </div>
        <div className="stat">
          <span className="stat__value">50+</span>
          <span className="stat__label">Trained Staff</span>
        </div>
        <div className="stat">
          <span className="stat__value">24/7</span>
          <span className="stat__label">Support</span>
        </div>
      </section>

      {/* ---- Call to action ---- */}
      <section className="cta-band">
        <h2 className="cta-band__title">Come visit us or say hello</h2>
        <p className="cta-band__text">
          Placeholder text — invite families to schedule a visit or get in
          touch. Replace with your real message later.
        </p>
        <a className="cta-band__btn" href="/contact-us">Contact Us</a>
      </section>
    </>
  );
}
