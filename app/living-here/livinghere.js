import "./livinghere.css";

export default function LivingHere() {
  return (
    <>
      <section className="page-banner">
        <p className="page-banner__eyebrow">Living Here</p>
        <h1 className="page-banner__title">Making room for the things that matter</h1>
        <p className="page-banner__sub">
          Daily support planned around habits, interests and the people you love.
        </p>
      </section>

      <div className="page prose">
        <p>
          Every resident brings their own habits, interests and way of doing
          things. Some enjoy regular company; others value quiet time. We take
          these preferences seriously when planning daily support.
        </p>
        <p>
          Tell us about favourite routines, food preferences, cultural practices
          and the activities or relationships that bring enjoyment. Understanding
          these details helps us support a day that feels more familiar and
          comfortable.
        </p>

        <h2 className="page__h">Family and whānau</h2>
        <p>
          The people close to a resident can make an important contribution to
          their wellbeing. With the resident’s agreement, we welcome family and
          whānau involvement in care conversations and encourage questions about
          changing needs or preferences.
        </p>
        <p>
          Contact the team to discuss visiting arrangements and how to stay in
          touch. During a visit, we can talk through the home’s spaces, daily
          routines and opportunities for social connection.
        </p>

        <h2 className="page__h">Respect for identity and choice</h2>
        <p>
          We respect residents’ cultural identities, beliefs, languages and
          personal relationships. Please tell us what matters to you and what
          helps you feel comfortable. We will discuss how these preferences can
          be reflected in your care.
        </p>

        <a className="page__cta" href="/contact-us">Talk to us about living here</a>
      </div>
    </>
  );
}
