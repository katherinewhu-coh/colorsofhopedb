import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";

const values = [
  {
    number: "01",
    title: "Inspire hope",
    copy: "A fresh set of art supplies can open a small, bright door when life feels uncertain.",
  },
  {
    number: "02",
    title: "Make space to express",
    copy: "Creative play gives children another language for feelings, ideas, and experiences.",
  },
  {
    number: "03",
    title: "Build resilience",
    copy: "Making something of their own helps children practice confidence, choice, and possibility.",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Art kits for children facing hardship</p>
          <h1>
            Creativity changes <em>everything.</em>
          </h1>
          <p className="hero-intro">
            We help keep imagination within reach by putting joyful, thoughtful
            art supplies directly into children&apos;s hands.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#mission">
              Our mission
            </a>
            <Link className="button button-quiet" href="/impact">
              See our impact <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="Colors of Hope bear mascot">
          <div className="soft-shape shape-blue" />
          <div className="soft-shape shape-pink" />
          <div className="logo-frame logo-frame-hero">
            <Image
              src="/colors-of-hope-logo.png"
              alt="Colors of Hope bear mascot"
              fill
              priority
              sizes="(max-width: 760px) 68vw, 36vw"
            />
          </div>
          <span className="doodle doodle-star" aria-hidden="true">✦</span>
          <span className="doodle doodle-heart" aria-hidden="true">♥</span>
        </div>
      </section>

      <section className="mission-section" id="mission">
        <div className="mission-label">
          <p className="eyebrow">Our mission</p>
          <div className="tiny-sun" aria-hidden="true">✳</div>
        </div>
        <blockquote>
          In a world where art is often the first thing lost during difficult
          circumstances—whether due to school funding cuts, or families
          struggling financially—Colors of Hope strives to foster creativity by
          providing art kits for children facing hardship, inspiring hope,
          self-expression, emotional growth, and resilience.
        </blockquote>
      </section>

      <section className="values-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Why art matters</p>
            <h2>Every child deserves room to create.</h2>
          </div>
          <p>
            Art is more than an activity. It can be a safe place, a voice, and a
            way forward.
          </p>
        </div>
        <div className="values-grid">
          {values.map((value) => (
            <article className="value-card" key={value.number}>
              <span>{value.number}</span>
              <div className="value-mark" aria-hidden="true" />
              <h3>{value.title}</h3>
              <p>{value.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="journey-section">
        <div className="journey-art" aria-hidden="true">
          <div className="kit-card kit-card-back" />
          <div className="kit-card kit-card-front">
            <span>Colors of Hope</span>
            <strong>Art Kit</strong>
            <div className="kit-rainbow">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
        <div className="journey-copy">
          <p className="eyebrow">From care to creativity</p>
          <h2>A small kit can carry a lot of hope.</h2>
          <ol>
            <li>
              <span>1</span>
              <p><strong>Gather with care</strong>Art supplies are thoughtfully selected for joyful, open-ended making.</p>
            </li>
            <li>
              <span>2</span>
              <p><strong>Pack with purpose</strong>Each kit is assembled to feel personal, complete, and ready to explore.</p>
            </li>
            <li>
              <span>3</span>
              <p><strong>Share the possibility</strong>Kits reach children and communities navigating difficult circumstances.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="impact-callout">
        <p className="eyebrow">Growing a gallery of good</p>
        <h2>Every donation has a story.</h2>
        <p>
          Our impact page is ready to hold the photos, videos, and moments that
          show what your support makes possible.
        </p>
        <Link className="button button-white" href="/impact">
          Visit our impact page <span aria-hidden="true">→</span>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
