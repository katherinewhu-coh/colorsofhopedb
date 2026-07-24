const colors = [
  {
    name: "Brahma Purple",
    hex: "#4B1F6F",
    rgb: "75, 31, 111",
    role: "Primary",
    className: "purple",
  },
  {
    name: "Brahma Gold",
    hex: "#F4C542",
    rgb: "244, 197, 66",
    role: "Accent",
    className: "gold",
  },
  {
    name: "Campus Cream",
    hex: "#FFF9EB",
    rgb: "255, 249, 235",
    role: "Background",
    className: "cream",
  },
  {
    name: "Midnight",
    hex: "#1C1324",
    rgb: "28, 19, 36",
    role: "Text",
    className: "midnight",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Diamond Bar colors home">
          <span className="brand-mark">DB</span>
          <span>
            <strong>Diamond Bar</strong>
            <small>Color Guide</small>
          </span>
        </a>
        <a className="jump-link" href="#palette">
          View palette <span aria-hidden="true">↓</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Diamond Bar High School</p>
          <h1>
            Purple pride.
            <br />
            <span>Gold standard.</span>
          </h1>
          <p className="intro">
            A simple digital palette inspired by the colors worn by the
            Brahmas—confident purple, energetic gold, and calm supporting
            neutrals.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#palette">
              Explore the colors
            </a>
            <a
              className="text-link"
              href="https://dbhs.wvusd.org/"
              target="_blank"
              rel="noreferrer"
            >
              Visit DBHS <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label="Purple and gold color composition">
          <div className="gold-orbit" />
          <div className="diamond diamond-one" />
          <div className="diamond diamond-two" />
          <div className="hero-monogram">
            <span>Home of the</span>
            <strong>Brahmas</strong>
          </div>
        </div>
      </section>

      <section className="palette-section" id="palette">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The palette</p>
            <h2>Made to stand together.</h2>
          </div>
          <p>
            Purple and gold lead the way. Cream and midnight keep the palette
            balanced, clear, and easy to use on screen.
          </p>
        </div>

        <div className="color-grid">
          {colors.map((color, index) => (
            <article className={`color-card ${color.className}`} key={color.hex}>
              <div className="color-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{color.role}</span>
              </div>
              <div className="color-details">
                <h3>{color.name}</h3>
                <dl>
                  <div>
                    <dt>HEX</dt>
                    <dd>{color.hex}</dd>
                  </div>
                  <div>
                    <dt>RGB</dt>
                    <dd>{color.rgb}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="in-action">
        <div className="action-copy">
          <p className="eyebrow">In action</p>
          <h2>A little spirit goes a long way.</h2>
          <p>
            Use purple as the foundation, gold for moments of energy, and
            neutrals to give every message room to breathe.
          </p>
        </div>
        <div className="sample-card">
          <div className="sample-rings" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p>Diamond Bar High School</p>
          <strong>Go Brahmas!</strong>
          <span className="sample-tag">Purple Pride • Gold Standard</span>
        </div>
      </section>

      <section className="quick-rule">
        <span className="rule-number">70</span>
        <p>parts purple</p>
        <span className="plus">+</span>
        <span className="rule-number gold-text">20</span>
        <p>parts gold</p>
        <span className="plus">+</span>
        <span className="rule-number neutral-text">10</span>
        <p>parts neutral</p>
      </section>

      <footer>
        <p>
          A community-made color study celebrating Diamond Bar High School.
        </p>
        <p>Diamond Bar, California</p>
      </footer>
    </main>
  );
}
