import "./employment.css";

export default function Employment() {
  return (
    <>
      <section className="page-banner">
        <p className="page-banner__eyebrow">Employment</p>
        <h1 className="page-banner__title">Join our caring team</h1>
        <p className="page-banner__sub">
          Placeholder text — invite kind, dedicated people to build a career in
          caring for elders. Edit this later.
        </p>
      </section>

      <div className="page">
        <div className="emp__intro prose">
          <h2 className="h-serif">Why work with us</h2>
          <p>
            This is placeholder content. Describe what makes your home a great
            place to work — supportive team, training, fair pay, and the
            rewarding nature of the work.
          </p>
        </div>

        <h2 className="h-serif emp__jobs-title">Current Openings</h2>
        <div className="emp__jobs">
          <article className="emp__job">
            <div className="emp__job-head">
              <h3 className="h-serif emp__job-title">Registered Nurse</h3>
              <span className="emp__badge">Full-time</span>
            </div>
            <p className="emp__job-text">
              Placeholder job description. Add duties, shift timings and
              requirements here.
            </p>
            <a className="emp__apply" href="/contact-us">Apply Now</a>
          </article>

          <article className="emp__job">
            <div className="emp__job-head">
              <h3 className="h-serif emp__job-title">Caregiver / Attendant</h3>
              <span className="emp__badge">Full-time</span>
            </div>
            <p className="emp__job-text">
              Placeholder job description. Add duties, shift timings and
              requirements here.
            </p>
            <a className="emp__apply" href="/contact-us">Apply Now</a>
          </article>

          <article className="emp__job">
            <div className="emp__job-head">
              <h3 className="h-serif emp__job-title">Cook / Kitchen Staff</h3>
              <span className="emp__badge">Part-time</span>
            </div>
            <p className="emp__job-text">
              Placeholder job description. Add duties, shift timings and
              requirements here.
            </p>
            <a className="emp__apply" href="/contact-us">Apply Now</a>
          </article>

          <article className="emp__job">
            <div className="emp__job-head">
              <h3 className="h-serif emp__job-title">Housekeeping</h3>
              <span className="emp__badge">Full-time</span>
            </div>
            <p className="emp__job-text">
              Placeholder job description. Add duties, shift timings and
              requirements here.
            </p>
            <a className="emp__apply" href="/contact-us">Apply Now</a>
          </article>
        </div>

        <div className="emp__note">
          <h3 className="h-serif">How to apply</h3>
          <p>
            Placeholder — explain how to send a CV or application. For now,
            candidates can reach out through the Contact page.
          </p>
        </div>
      </div>
    </>
  );
}
