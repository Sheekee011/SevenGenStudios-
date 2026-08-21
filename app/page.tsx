import { Arrow } from "./components";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-topline"><span>Indigenous-led · Saskatchewan</span><span>Community-focused digital studio</span></div>
        <div className="home-hero-grid">
          <div><p className="kicker acid">Two Indigenous business students.<br />One long-term vision.</p><h1>Building for the<br />next <em>seven.</em></h1></div>
          <div className="generation-lines" aria-label="Seven generations">{[1,2,3,4,5,6,7].map(n=><div key={n}><span>0{n}</span><i /></div>)}</div>
        </div>
        <div className="home-hero-bottom"><p>We build websites and digital products focused on Indigenous communities, clearer information and long-term value.</p><Link href="/studio">Meet the studio <Arrow /></Link></div>
      </section>

      <section className="studio-signals" aria-label="Studio credentials">
        <div><span>01</span><strong>Indigenous-led</strong><small>Built from lived perspective</small></div>
        <div><span>02</span><strong>Saskatchewan-based</strong><small>Working close to community</small></div>
        <div><span>03</span><strong>Founder-operated</strong><small>Direct access to the builders</small></div>
        <div><span>04</span><strong>Product-proven</strong><small>Creators of openband.ca</small></div>
      </section>

      <section className="founder-intro">
        <div className="founder-pair">
          <figure><img className="brennan-photo" src="/brennan-kakakaway.webp" alt="Brennan Kakakaway, founder of SevenGen Studios" width="780" height="858" loading="lazy" decoding="async" /><figcaption>Brennan Kakakaway · Founder</figcaption></figure>
          <figure><img src="/cofounder.webp" alt="Rylan Iron, co-founder of SevenGen Studios" width="1144" height="1560" loading="lazy" decoding="async" /><figcaption>Rylan Iron · Co-founder</figcaption></figure>
        </div>
        <div className="founder-copy"><p className="kicker">Who we are</p><h2>Built together.<br />Serious about the work.</h2><p>SevenGen is an Indigenous-led digital studio founded together by two Indigenous business students. Brennan Kakakaway serves as Founder and Rylan Iron as Co-founder. Both have helped shape the studio and openband.ca from the beginning.</p><p>We combine business thinking, research, design and development to create websites and digital products that make important information easier to use.</p><Link className="line-link" href="/studio">Meet the founding team <Arrow /></Link></div>
      </section>

      <section className="proof-section">
        <div><p className="kicker">Our first product</p><h2 className="proof-title"><span>We built</span><em>openband.ca</em></h2><p>What began as a way to simplify public financial records has grown into a deeper source of Saskatchewan First Nations information. It is our proof that a focused Indigenous team can turn scattered public data into a useful digital product.</p><Link className="line-link light-link" href="/work">View the case study <Arrow /></Link></div>
        <div className="proof-card"><span>LIVE PRODUCT · 2026</span><strong>74</strong><p>Saskatchewan First Nations tracked</p><strong>553</strong><p>Public filings parsed</p><a href="https://openband.ca" target="_blank" rel="noreferrer">Visit openband.ca <Arrow /></a></div>
      </section>

      <section className="studio-standard">
        <div><p className="kicker">The SevenGen standard</p><h2>One studio from first question to final handoff.</h2></div>
        <div className="standard-grid">
          <article><span>01</span><h3>Research before design</h3><p>We learn the audience, information and operating reality before deciding what the website should become.</p></article>
          <article><span>02</span><h3>Clear scope and ownership</h3><p>Every engagement has defined deliverables, direct communication and a clean handoff—not agency fog.</p></article>
          <article><span>03</span><h3>Built to remain useful</h3><p>We prioritize accessible structure, maintainable systems and value beyond the launch announcement.</p></article>
        </div>
      </section>

      <section className="home-paths">
        <Link href="/work"><span>01</span><h3>Our work</h3><p>See what we have already put into the world.</p><Arrow /></Link>
        <Link href="/services"><span>02</span><h3>What we do</h3><p>Community websites, digital products and information design.</p><Arrow /></Link>
        <Link href="/studio"><span>03</span><h3>The studio</h3><p>Meet the Indigenous students behind SevenGen.</p><Arrow /></Link>
        <Link href="/contact"><span>04</span><h3>Start a project</h3><p>Tell us what needs to become clearer, more useful or easier to find.</p><Arrow /></Link>
      </section>
    </main>
  );
}
