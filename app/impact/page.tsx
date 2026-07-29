import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

const donationStories = [
  {
    src: "/impact-handmade-cards.webp",
    alt: "A collection of colorful handmade encouragement cards",
    title: "Handmade cards",
    description: "Handmade cards filled with encouragement and care.",
  },
  {
    src: "/impact-packing-together.webp",
    alt: "Volunteers packing Colors of Hope art kits together",
    title: "Packing together",
    description: "Packing every art kit together with care.",
  },
  {
    src: "/impact-art-kits.webp",
    alt: "Completed Colors of Hope art kits ready for donation",
    title: "Art kits",
    description: "Finished art kits ready to bring creativity and hope.",
  },
];

export default function ImpactPage() {
  return (
    <main>
      <SiteHeader />

      <section className="impact-hero">
        <div>
          <p className="eyebrow">Our impact</p>
          <h1>Hope, in color</h1>
          <p>
            This gallery grows with each donation made, holding photos, videos,
            and stories behind the art kits we share.
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
            <h2>Every meaningful moment</h2>
          </div>
        </div>

        <div className="polaroid-grid">
          {donationStories.map((story) => (
            <figure className="polaroid-card" key={story.title}>
              <div className="polaroid-photo">
                <Image
                  src={story.src}
                  alt={story.alt}
                  fill
                  sizes="(max-width: 900px) 90vw, 30vw"
                />
              </div>
              <figcaption>
                <strong>{story.title}</strong>
                <span>{story.description}</span>
              </figcaption>
            </figure>
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
        <h2>More moments of hope are on the way!</h2>
        <p>
          This page will continue to grow as Colors of Hope completes more
          donations.
        </p>
        <Link className="button button-primary" href="/">
          Back to our mission
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
