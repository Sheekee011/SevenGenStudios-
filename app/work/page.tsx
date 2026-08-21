import { Arrow } from "../components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | SevenGen Studios",
  description: "Explore openband.ca, the flagship digital product built by SevenGen Studios.",
};

export default function WorkPage() {
  return (
    <main className="subpage">
      <section className="page-hero"><p className="kicker">Work · 01</p><h1>Things we’ve<br />put into the world.</h1><p>We build our own products and apply the same thinking to work created with communities.</p></section>
      <section className="openband-case">
        <div className="case-copy"><span>Flagship product · Live</span><h2>openband.ca</h2><p>Making Saskatchewan First Nations public records, community information, projects and opportunities easier to find and verify.</p><dl><div><dt>Role</dt><dd>Research, product strategy, data and development</dd></div><div><dt>Coverage</dt><dd>74 Saskatchewan First Nations</dd></div><div><dt>Status</dt><dd>Continuously expanding</dd></div></dl><a className="line-link" href="https://openband.ca" target="_blank" rel="noreferrer">Visit openband.ca <Arrow /></a></div>
        <div className="case-ui"><div className="browser-bar"><span /><span /><span /><small>openband.ca</small></div><div className="case-nav"><b>openband.ca</b><span>Browse&nbsp;&nbsp; News&nbsp;&nbsp; How it works&nbsp;&nbsp; About</span></div><div className="case-search"><small>FIRST NATIONS PUBLIC FINANCIAL RECORDS</small><strong>Search Saskatchewan<br />First Nations.</strong><div>Search a First Nation <b>⌕</b></div></div><div className="case-stats"><span><b>74</b>Communities</span><span><b>553</b>Parsed filings</span><span><b>FNFTA</b>Official source</span></div></div>
      </section>
      <section className="next-work"><p className="kicker">What comes next</p><h2>One product live.<br />More being built.</h2><p>SevenGen Studios is early. This portfolio will grow through our own products and carefully selected community projects.</p></section>
    </main>
  );
}
