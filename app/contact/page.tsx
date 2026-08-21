import type { Metadata } from "next";
import { Arrow } from "../components";

export const metadata: Metadata = {
  title: "Start a Project | SevenGen Studios",
  description: "Contact SevenGen Studios about a community website, digital product or information design project.",
};

export default function ContactPage() {
  return (
    <main className="subpage contact-page">
      <section className="contact-hero">
        <p className="kicker acid">Start a project · 04</p>
        <h1>Let’s make important information easier to use.</h1>
        <p>Tell us what exists today, what is not working and what a better outcome would look like. You do not need a finished brief.</p>
      </section>
      <section className="contact-grid">
        <div className="contact-primary">
          <p className="kicker">Direct contact</p>
          <h2>Email the founders.</h2>
          <a href="mailto:sevengenerationscapital@gmail.com?subject=SevenGen%20Studios%20Project">sevengenerationscapital@gmail.com <Arrow /></a>
          <small>Saskatchewan, Canada · Available for focused digital projects</small>
        </div>
        <div className="project-brief">
          <p className="kicker">A useful first message includes</p>
          <ol>
            <li><span>01</span><p><strong>Your organization</strong><br />Who you are and who the work needs to serve.</p></li>
            <li><span>02</span><p><strong>The problem</strong><br />What is difficult, outdated, scattered or unclear today.</p></li>
            <li><span>03</span><p><strong>The outcome</strong><br />What people should be able to understand or do afterward.</p></li>
            <li><span>04</span><p><strong>The practical details</strong><br />Any timing, existing content and budget range you already know.</p></li>
          </ol>
        </div>
      </section>
    </main>
  );
}
