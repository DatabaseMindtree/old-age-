import "./about.css";

export default function About() {
  return (
    <>
      <section className="page-banner">
        <p className="page-banner__eyebrow">About Us</p>
        <h1 className="page-banner__title">Care starts with getting to know you</h1>
        <p className="page-banner__sub">
          A person’s care needs are only one part of their story.
        </p>
      </section>

      <div className="page prose">
        <p>
          A person’s care needs are only one part of their story. The way they
          like to spend their morning, the people they love and the traditions
          they value all matter.
        </p>
        <p>
          At Tairua Residential Care, our approach is to listen first and plan
          care around the individual. We support residents to make choices,
          maintain independence where possible and stay involved in decisions as
          their needs change.
        </p>
        <p>
          We recognise the place of family and whānau while respecting each
          resident’s preferences, privacy and consent. Clear information and an
          approachable team help everyone understand what is happening and raise
          questions early.
        </p>

        <h2 className="h-serif about__h">Our next chapter</h2>
        <p>
          Olivet Residential Care Limited is preparing to take over management of
          Tairua Residential Care towards the end of November 2026. The incoming
          management’s priorities are resident wellbeing, capable clinical
          leadership, staff support and communication with the people who use and
          deliver our services.
        </p>

        <div className="about__message">
          <h3 className="h-serif">A message from Jijo John</h3>
          <p>
            “As a New Zealand registered nurse with experience in clinical care,
            leadership and nursing education, I value care that takes time to
            understand the person. My focus for Tairua is to work with the care
            team to support residents’ wellbeing, listen to families and whānau,
            and build a service where concerns are heard and followed up. I look
            forward to getting to know the residents, staff and wider Tairua
            community.”
          </p>
        </div>
      </div>
    </>
  );
}
