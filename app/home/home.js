/* eslint-disable @next/next/no-img-element */
import "./home.css";

export default function Home() {
  return (
    <>
      {/* ---- Hero slideshow (auto-rotating, pure CSS) ---- */}
      <section className="hero" aria-label="Featured">
        <div className="hero__slides">
          <div className="hero__slide hero__slide--1">
            <img className="hero__img" src="/img/old-4.jpeg" alt="Residents and staff together at Tairua Residential Care" />
            <div className="hero__overlay" />
            <div className="hero__caption">
              <h1 className="hero__title">Rest Home and Hospital Care in Tairua</h1>
              <p className="hero__text">
                A welcoming place to live, with support shaped around you.
              </p>
              <a className="hero__cta" href="/contact-us">Arrange a Visit</a>
            </div>
          </div>

          <div className="hero__slide hero__slide--2">
            <img className="hero__img" src="/img/old-3.webp" alt="A resident enjoying company at the home" />
            <div className="hero__overlay" />
            <div className="hero__caption">
              <h1 className="hero__title">Care Shaped Around the Person</h1>
              <p className="hero__text">
                Dignity, practical support and involvement in everyday decisions.
              </p>
              <a className="hero__cta" href="/contact-us">Talk to Us About Care</a>
            </div>
          </div>

          <div className="hero__slide hero__slide--3">
            <img className="hero__img" src="/img/old-1.jpg" alt="Caring support at the home" />
            <div className="hero__overlay" />
            <div className="hero__caption">
              <h1 className="hero__title">A 44-Bed Home on the Coromandel</h1>
              <p className="hero__text">
                Rest home and hospital-level care in the heart of Tairua.
              </p>
              <a className="hero__cta" href="/contact-us">Arrange a Visit</a>
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
        <p className="eyebrow">Welcome to Tairua Residential Care</p>
        <h2 className="section__title">A welcoming place to live</h2>
        <div className="section__paras">
          <p>
            Choosing residential care is a personal decision. You want to
            understand the care available, meet the people involved and feel
            comfortable asking questions.
          </p>
          <p>
            Tairua Residential Care is a 44-bed home in Tairua on the Coromandel
            Peninsula, offering rest home and hospital-level care. We believe
            good care begins with knowing the person: their routines,
            preferences, background and the people who matter to them.
          </p>
          <p>
            Our approach centres on dignity, practical support and involving
            residents in decisions about their care. Whether you are exploring
            options for yourself or someone close to you, we welcome a
            conversation.
          </p>
        </div>
      </section>

      {/* ---- Facts band ---- */}
      <section className="stats">
        <div className="stat">
          <span className="stat__value">44</span>
          <span className="stat__label">Beds</span>
        </div>
        <div className="stat">
          <span className="stat__value">Rest Home</span>
          <span className="stat__label">Everyday Care</span>
        </div>
        <div className="stat">
          <span className="stat__value">Hospital</span>
          <span className="stat__label">Level Care</span>
        </div>
        <div className="stat">
          <span className="stat__value">Tairua</span>
          <span className="stat__label">Coromandel Peninsula</span>
        </div>
      </section>

      {/* ---- A new chapter with Olivet ---- */}
      <section className="section">
        <p className="eyebrow">Our Next Chapter</p>
        <h2 className="section__title">A new chapter with Olivet</h2>
        <div className="section__paras">
          <p>
            Tairua Residential Care is preparing for a planned management
            transition to Olivet Residential Care Limited towards the end of
            November 2026. Our focus for this next chapter is care that respects
            each resident, clear communication with families and whānau, and
            support for the people delivering care. We will share further details
            as arrangements are finalised.
          </p>
        </div>
      </section>

      {/* ---- Come and meet us ---- */}
      <section className="cta-band">
        <h2 className="cta-band__title">Come and meet us</h2>
        <p className="cta-band__text">
          A visit gives you time to ask questions, talk about your needs and get
          a feel for the home. Contact us to arrange a suitable time.
        </p>
        <p className="cta-band__address">7 Tui Terrace, Tairua 3508</p>
        <a className="cta-band__btn" href="/contact-us">Arrange a Visit</a>
      </section>
    </>
  );
}
