import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

const mediaSpaces = [
  {
    type: "Photo collection",
    title: "Art kit assembly",
    copy: "A home for behind-the-scenes moments from volunteers packing each kit with care.",
    className: "media-blue",
  },
  {
    type: "Photo collection",
    title: "Donation days",
    copy: "Photos from deliveries, community partners, and the people who help hope travel.",
    className: "media-pink",
  },
  {
    type: "Video stories",
    title: "Creativity in motion",
    copy: "Future short videos can share the energy, joy, and imagination your art kits inspire.",
    className: "media-light",
  },
];

export default function ImpactPage() {
  return (
    <main>
      <SiteHeader />

      <section className="impact-hero">
        <div>
          <p className="eyebrow">Our impact</p>
          <h1>Hope, captured in color.</h1>
          <p>
            This gallery will grow with every donation—holding the photos,
            videos, and stories behind the art kits we share.
          </p>
        </div>
        <div className="impact-orbit" aria-hidden="true">
          <span className="orbit-center">♥</span>
          <span className="orbit-dot dot-one" />
          <span className="orbit-dot dot-two" />
          <span className="orbit-dot dot-three" />
        </div>
      </section>

      <section className="media-section">
        <div className="section-heading media-heading">
          <div>
            <p className="eyebrow">Donation stories</p>
            <h2>A space ready for every meaningful moment.</h2>
          </div>
          <p>
            When you have donation photos or videos, they can be added here as
            individual stories, collections, or highlights.
          </p>
        </div>

        <div className="media-grid">
          {mediaSpaces.map((space, index) => (
            <article className={`media-card ${space.className}`} key={space.title}>
              <div className="media-placeholder" aria-hidden="true">
                {index === 2 ? (
                  <span className="play-button">▶</span>
                ) : (
                  <>
                    <span className="photo-sun" />
                    <span className="photo-hill" />
                  </>
                )}
              </div>
              <p className="media-type">{space.type}</p>
              <h3>{space.title}</h3>
              <p>{space.copy}</p>
              <span className="coming-soon">Ready for future media</span>
            </article>
          ))}
        </div>
      </section>

      <section className="empty-gallery">
        <div className="empty-gallery-mark" aria-hidden="true">
          <span>✦</span>
          <span>♥</span>
          <span>✦</span>
        </div>
        <p className="eyebrow">The story is just beginning</p>
        <h2>More moments of hope are on the way.</h2>
        <p>
          This page is intentionally ready to grow as Colors of Hope completes
          more kit drives and donations.
        </p>
        <Link className="button button-primary" href="/">
          Back to our mission
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
