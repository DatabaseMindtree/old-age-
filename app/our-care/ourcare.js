import "./ourcare.css";

export default function OurCare() {
  return (
    <>
      <section className="page-banner">
        <p className="page-banner__eyebrow">Our Care</p>
        <h1 className="page-banner__title">Rest home and hospital care</h1>
        <p className="page-banner__sub">
          Care planned around each resident’s needs, and reviewed as they change.
        </p>
      </section>

      <div className="page">
        <div className="care__cards">
          <article className="care__card">
            <h2 className="h-serif care__card-title">Rest home care</h2>
            <p>
              Rest home care supports people who need regular help with everyday
              living. This may include personal care, mobility and support with
              medicines, depending on individual needs. Care planning considers
              what each resident can do independently and where support would
              help.
            </p>
          </article>

          <article className="care__card">
            <h2 className="h-serif care__card-title">Hospital level care</h2>
            <p>
              Hospital-level aged care provides residential nursing support for
              people with higher assessed care needs. The care plan considers
              health, comfort, mobility and daily support, with review as needs
              change. Speak with us about the care you are looking for so we can
              discuss whether our service can meet those needs.
            </p>
          </article>
        </div>

        <div className="care__cta">
          <a className="page__cta" href="/contact-us">Discuss your care needs</a>
        </div>
      </div>
    </>
  );
}
