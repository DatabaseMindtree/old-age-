import "./about.css";

export default function About() {
  return (
    <>
      <section className="page-banner">
        <p className="page-banner__eyebrow">About Us</p>
        <h1 className="page-banner__title">Caring for our elders like family</h1>
        <p className="page-banner__sub">
          This is placeholder text for the About page. Replace it later with a
          short line about your home&apos;s mission.
        </p>
      </section>

      <div className="page prose">
        <h2 className="h-serif about__h">Our Story</h2>
        <p>
          This is placeholder content. Write about how and when your old age
          home started, the people behind it, and the community you serve. Keep
          it warm and personal — families reading this want to feel they can
          trust you with their loved ones.
        </p>
        <p>
          Add another paragraph here about your journey and growth over the
          years. You can edit all of this text later with your real story.
        </p>

        <div className="about__mv">
          <div className="about__mv-card">
            <h3 className="h-serif">Our Mission</h3>
            <p>
              Placeholder text describing your mission — the promise you make to
              residents and their families every single day.
            </p>
          </div>
          <div className="about__mv-card">
            <h3 className="h-serif">Our Vision</h3>
            <p>
              Placeholder text describing your vision — the kind of community and
              future you are working towards.
            </p>
          </div>
        </div>

        <h2 className="h-serif about__h">Our Values</h2>
        <div className="about__values">
          <div className="about__value">
            <h3 className="h-serif">Compassion</h3>
            <p>Placeholder — describe how you care with kindness and respect.</p>
          </div>
          <div className="about__value">
            <h3 className="h-serif">Dignity</h3>
            <p>Placeholder — every resident is treated with dignity and warmth.</p>
          </div>
          <div className="about__value">
            <h3 className="h-serif">Safety</h3>
            <p>Placeholder — a secure, well-maintained environment for all.</p>
          </div>
        </div>
      </div>
    </>
  );
}
