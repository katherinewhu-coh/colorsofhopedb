import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Colors of Hope home">
        <span className="logo-frame logo-frame-header">
          <Image
            src="/colors-of-hope-logo.png"
            alt=""
            fill
            sizes="48px"
          />
        </span>
        <span className="brand-name">Colors of Hope</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#mission">Our mission</Link>
        <Link href="/#work">Our work</Link>
        <Link href="/impact">Our impact</Link>
      </nav>
      <Link className="header-cta" href="/impact">
        See the hope <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span className="logo-frame logo-frame-footer">
          <Image src="/colors-of-hope-logo.png" alt="" fill sizes="64px" />
        </span>
        <div>
          <strong>Colors of Hope</strong>
          <p>Keeping creativity alive.</p>
        </div>
      </div>
      <div className="footer-links">
        <Link href="/#mission">Mission</Link>
        <Link href="/#work">Our work</Link>
        <Link href="/impact">Impact gallery</Link>
      </div>
      <div className="footer-contact">
        <strong>Contact us</strong>
        <a
          href="https://www.instagram.com/colorsofhopedb/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram: @colorsofhopedb
        </a>
        <a href="mailto:colorsofhopedb@gmail.com">
          colorsofhopedb@gmail.com
        </a>
      </div>
    </footer>
  );
}
