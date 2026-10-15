import "./movingin.css";

export default function MovingIn() {
  return (
    <>
      <section className="page-banner">
        <p className="page-banner__eyebrow">Moving In</p>
        <h1 className="page-banner__title">Start with a conversation</h1>
        <p className="page-banner__sub">
          A few simple steps, taken together, at a pace that suits you.
        </p>
      </section>

      <div className="page">
        <ol className="steps">
          <li className="step">
            <span className="step__num">1</span>
            <div className="step__body">
              <h2 className="h-serif step__title">Start with a conversation</h2>
              <p>
                You do not need to have every question answered before contacting
                us. Tell us what support you are looking for, your preferred
                timing and any questions you would like to discuss.
              </p>
            </div>
          </li>

          <li className="step">
            <span className="step__num">2</span>
            <div className="step__body">
              <h2 className="h-serif step__title">Visit the home</h2>
              <p>
                Arrange a time to meet the team and look around. We encourage
                residents and their support people to ask about care, daily life,
                communication, fees and anything else that matters to their
                decision.
              </p>
            </div>
          </li>

          <li className="step">
            <span className="step__num">3</span>
            <div className="step__body">
              <h2 className="h-serif step__title">Discuss needs and availability</h2>
              <p>
                We will explain the assessment and information needed to consider
                admission. Any offer of a place depends on availability and our
                ability to meet the person’s assessed needs. We will also explain
                fees, what is included and any agreed additional charges before
                you decide.
              </p>
            </div>
          </li>

          <li className="step">
            <span className="step__num">4</span>
            <div className="step__body">
              <h2 className="h-serif step__title">Plan the move together</h2>
              <p>
                Once admission is agreed, we will discuss the care information,
                medicines, personal belongings and practical arrangements needed
                for the move. Learning about preferences and routines helps us
                plan support from the beginning.
              </p>
            </div>
          </li>
        </ol>

        <div className="movingin__cta">
          <a className="page__cta" href="/contact-us">Make an enquiry</a>
        </div>
      </div>
    </>
  );
}
